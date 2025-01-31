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
    Terminal(),
    // Terminal({console: 'terminal'}),
    
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
    base:  "/reports/public/app/" ,
    plugins: setupPlugins(viteEnv),
    server: {
      host: 'jct.edu.sa',
      proxy: {
       
      
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
      outDir: "../public/app",
      reportCompressedSize: false,
      sourcemap: false,
      commonjsOptions: {
        ignoreTryCatch: false,
      },
    },
  }
})
