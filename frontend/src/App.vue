<script setup lang="ts">
import { NConfigProvider } from 'naive-ui'
import { NaiveProvider } from '@/components/common'
import { useTheme } from '@/hooks/useTheme'
import { useLanguage } from '@/hooks/useLanguage'
const { theme, themeOverrides } = useTheme()
const { language } = useLanguage()
const direction = computed(() => (language.value.name === 'ar-DZ' ? 'rtl' : 'ltr'));
</script>

<template>
    <NConfigProvider
   class="h-full"
    :dir="direction"
      :theme="theme"
      :theme-overrides="themeOverrides"
      :locale="language"
    >
      <NaiveProvider>
        <RouterView />
      </NaiveProvider>
    </NConfigProvider>

</template>