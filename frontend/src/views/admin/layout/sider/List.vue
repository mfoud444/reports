<script setup lang="ts">
import { ref } from 'vue'
import { NMenu, NScrollbar, useLoadingBar } from 'naive-ui'
import type { MenuInst, MenuOption } from 'naive-ui'
import { useRouter } from 'vue-router'
import { useIconRender } from '@/hooks/useIconRender';
import { t } from '@/locales';
import { useBasicLayout } from '@/hooks/useBasicLayout';
import { useAppStore } from '@/store';
const router = useRouter()
const accordionRef = ref(false)
const selectedKeyRef = ref('dashboard')
const menuInstRef = ref<MenuInst | null>(null)
const { iconRender } = useIconRender()
const loadingBar = useLoadingBar()
const { isMobile } = useBasicLayout()
const appStore = useAppStore()
const disabledRef = ref(true)
function handleStart() {
  loadingBar.start()
  disabledRef.value = false
  if (isMobile.value)
    appStore.setSiderCollapsed(true)
}
function handleFinish() {
  loadingBar.finish()
  disabledRef.value = true
}
const servicesControls = [
  { key: "areas", icon: "mdi:map", label: "common.areas" },
  { key: "establishments", icon: "mdi:office-building", label: "common.establishments" },
  { key: "reporttypes", icon: "mdi:chart-bar", label: "common.report_types" },
  { key: "training-classes", icon: "mdi:school", label: "common.training_classes" },
  { key: "executing-agencies", icon: "mdi:account-group", label: "common.executing_agencies" },
  { key: "resources", icon: "grommet-icons:resources", label: "common.resources" },
  { key: "performance-indicators", icon: "mdi:chart-line", label: "common.performance_indicators" },
  { key: "maintenance-types", icon: "mdi:wrench", label: "common.maintenance_types" },
  { key: "request-types", icon: "mdi:file-document", label: "common.request_types" },
  { key: "maintenance-requesting-agencies", icon: "mdi:account-hard-hat", label: "common.maintenance_requesting_agencies" },
  { key: "departments", icon: "mdi:domain", label: "common.departments" }
];

async function handleUpdateValue(key: string, item: MenuOption) {
  handleStart();

  switch (key) {
    case 'dashboard':
      await router.push({ name: 'dashboard' });
      handleFinish();
      break;
  
    case 'profile':
      await router.push({ name: 'profile' });
      handleFinish();
      break;
    case 'settingsapp':
      await router.push({ name: 'settingsapp' });
      handleFinish();
      break;
    
    case 'translation':
      await router.push({ name: 'translation' });
      handleFinish();
      break;
   
    case 'themes':
      await router.push({ name: 'themes' });
      handleFinish();
      break;
    case 'settings':
      await router.push({ name: 'settings' });
      handleFinish();
      break;
    case 'reports':
      await router.push({ name: 'reports' });
      handleFinish();
      break;
   
    default:
      if (servicesControls.some(control => control.key === key)) {
        await router.push({ name: 'control', params: { type: key } });
        handleFinish();
      }
      break;
  }
}

const accordion = accordionRef;
const selectedKey = selectedKeyRef;
const menuOptions: MenuOption[] = [
  {
    type: 'group',
    label: t('common.dashboard'),
    key: 'Dashboard',
    children: [
      {
        label: t('common.dashboard'),
        key: 'dashboard',
        icon: iconRender({ icon: 'material-symbols:dashboard' }),
      },
    ],
  },

  {
    type: 'group',
    label: t('common.demo_try'),
    key: 'demotry',
    children: [
      {
        label: t('common.reports'),
        key: 'reports',
        icon: iconRender({ icon: 'arcticons:ask-ai' }),
      }
    ],
  },

  {
    type: 'group',
    label: t('common.manage_data_reports'),
    key: 'public',
    children: [
      ...servicesControls.map(control => ({
        label: t(control.label),
        key: control.key,
        icon: iconRender({ icon: control.icon }),
      })),
    ],
  },
  // {
  //   type: 'group',
  //   label: t('common.settings'),
  //   key: 'settings',
  //   children: [
  //     {
  //       label: t('common.themes'),
  //       key: 'themes',
  //       icon: iconRender({ icon: 'mdi:palette' }),
  //     },
  //   ],
  // },
];

const inverted = ref(false);
</script>

<template>
  <NScrollbar class="">
    <NMenu
      :inverted="inverted"
      ref="menuInstRef"
      :accordion="accordion"
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :options="menuOptions"
      @update:value="handleUpdateValue"
    />
  </NScrollbar>
</template>
