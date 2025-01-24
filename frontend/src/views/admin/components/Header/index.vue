<script lang="ts" setup>
import { computed, ref } from 'vue'
import {  SvgIcon, LanguageSelect } from '@/components/common'
import { useAppStore } from '@/store'
import { t } from '@/locales';

interface Props {
  usingContext: boolean

}

interface Emit {
  (ev: 'export'): void
  (ev: 'handleClear'): void
}

defineProps<Props>()
const emit = defineEmits<Emit>()
const appStore = useAppStore()
const collapsed = computed(() => appStore.siderCollapsed)

function handleUpdateCollapsed(type: 'chat' | 'admin') {
  if (type === 'admin')
    appStore.setSiderCollapsed(!collapsed.value)
  else
    appStore.setSiderCollapsedChat(!collapsed.value)
}


</script>

<template>

  <header
    class="sticky top-0 left-0 mx-3 right-0 z-30 border rounded-lg mt-2 md:mt-0 md:mx-0 md:rounded-none md:py-1 dark:border-neutral-800  dark:bg-black/20 backdrop-blur"
  >

    <div class="relative flex items-center justify-between px-4 md:px-8  min-w-0 overflow-hidden h-14">
      <div class="flex items-center">
        <button
          class="flex items-center justify-center w-11 h-11"
          @click="handleUpdateCollapsed('admin')"
        >
          <SvgIcon v-if="collapsed" class="text-3xl" icon="material-symbols:menu" />
          <SvgIcon v-else class="text-2xl" icon="ri:align-right" />
        </button>
        <a class="gtext btn btn-ghost normal-case text-xl">
      {{ t('common.nameApp') }}
    </a>
      </div>
 
   
    

   <div class="flex justify-end gap-2">

<LanguageSelect/>
   
      </div>
    </div>
  </header>

</template>
