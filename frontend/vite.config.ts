import path from 'path'
import type { PluginOption } from 'vite'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import Terminal from 'vite-plugin-terminal'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

function setupPlugins(env: ImportMetaEnv): PluginOption[] {
  return [
    vue(),
    env.VITE_GLOB_APP_PWA === 'true' && VitePWA({
      injectRegister: 'auto',
      manifest: {
        name: 'Quality Agency at the Technical College',
        short_name: 'Quality-Agency',
        icons: [
          { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png' },
        ],
      },
    }),

    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      vueTemplate: true,
      dirs: [
        'src/locales',
        'src/store',
        'src/components/**', 
    
      ],
      imports: [
        
        'vue',
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar'
          ]
        }
      ]
    }),
    Components({
      resolvers: [NaiveUiResolver()]
    }),
    // Terminal(),
    Terminal({console: 'terminal'}),
    
  ]
}

export default defineConfig((env) => {
  const viteEnv = loadEnv(env.mode, process.cwd()) as unknown as ImportMetaEnv
  const isDevelopment = false;

  return {
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), 'src'),
      },
    },
    base:  "" ,
    plugins: setupPlugins(viteEnv),
    server: {
      port: 3000, // Your desired port for the Vite server
      proxy: {
        // '/': {  // This will proxy any request starting with /app
        //   target: 'http://localhost/laravel-vue-manual/public/app', // The backend server where the request will be forwarded
        //   changeOrigin: true,  // Needed to properly handle the target URL's origin
        //   rewrite: (path) => path.replace(/^\/app/, '')  // Optional, rewrite the URL path before sending it
        // },
      
      '/api': {
          target: viteEnv.VITE_APP_API_BASE_URL,
          changeOrigin: true,
          rewrite: path => path.replace('/api/', '/'),
        },
      
    },},
  
    // server: {
    //   host: '0.0.0.0',
    //   port: 3000,
    //   overlay:false,
    //   open: false,
    //   proxy: {
    //     '/api': {
    //       target: viteEnv.VITE_APP_API_BASE_URL,
    //       changeOrigin: true,
    //       rewrite: path => path.replace('/api/', '/'),
    //     },
    //   },
    // },
    build: {
      outDir: "./../public/app",
      reportCompressedSize: false,
      sourcemap: false,
      commonjsOptions: {
        ignoreTryCatch: false,
      },
    },
  }
})
