<script setup lang="ts">
import { ref, reactive, computed, h } from 'vue';
import { useRoute } from 'vue-router';
import { DataTableColumns, NText, NSwitch } from 'naive-ui';
import FormView from './FormView.vue';
import { storesSettings } from '@/store/modules/controlsSetting';

const route = useRoute();
const { type } = route.params as { type: string };


let objStore;

switch (type) {
  case 'areas':
    objStore = storesSettings.areas();
    break;
  case 'establishments':
    objStore = storesSettings.establishments();
    break;
  case 'reporttypes':
    objStore = storesSettings.reporttypes();
    break;
  case 'training-classes':
    objStore = storesSettings.trainingclasses();
    break;
  case 'executing-agencies':
    objStore = storesSettings.executingagencies();
    break;
  case 'resources':
    objStore = storesSettings.resources();
    break;
  case 'performance-indicators':
    objStore = storesSettings.performanceindicators();
    break;
  case 'maintenance-types':
    objStore = storesSettings.maintenancetypes();
    break;
  case 'request-types':
    objStore = storesSettings.requesttypes();
    break;
  case 'maintenance-requesting-agencies':
    objStore = storesSettings.maintenancerequestingagencies();
    break;
  case 'departments':
    objStore = storesSettings.departments();
    break;
    case 'semesters': // Added case for semesters
    objStore = storesSettings.semesters();
    break;
  default:
    throw new Error(`Unknown type: ${type}`);
}

const columns = reactive<DataTableColumns<API.AdministrativeArea>>([
  {
    title: t('common.name'), 
    key: 'name',
    align: 'center',
    render(row: API.AdministrativeArea) {
      return h(NText, { strong: true }, { default: () => row.name });
    },
    sorter: 'default',
  },
  {
    title: t('common.is_active'), 
    key: 'isActivate',
    align: 'center',
    render(row: API.AdministrativeArea) {
      return h(NSwitch, { value: !!row.state });
    },
  },
  {
    title: t('common.created_at'), 
    key: 'createdAt',
    align: 'center',
    render(row: API.AdministrativeArea) {
      return h(NText, {}, { default: () => new Date(row.createdAt).toLocaleString() });
    },
    sorter: (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
  },
  {
    title: t('common.updated_at'), 
    key: 'updatedAt',
    align: 'center',
    render(row: API.AdministrativeArea) {
      return h(NText, {}, { default: () => new Date(row.updatedAt).toLocaleString() });
    },
  },
]);
</script>

<template>
  <DataTableBase
    :title="type"
    :objStore="objStore"
    :columns="columns"
    :FormView="FormView"
  />
</template>