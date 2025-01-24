<script setup lang="ts">
import { NFormItemGi, NGrid, NInputNumber } from 'naive-ui';

const reportStore = useReportStore();
const { model } = reportStore;

const appStore = useAppStore();
const span = appStore.getSpan();

const resourcesOptions = [
  { label: 'بشرية فقط', value: 'بشرية فقط' },
  { label: 'مادية فقط', value: 'مادية فقط' },
];
</script>

<template>
 <NGrid :x-gap="12" :y-gap="8">
    <NFormItemGi :span="span" path="performanceIndicator" :label="t('common.performance_indicator')">
      <BaseSelect v-model="model.performanceIndicator" :options="resourcesOptions" :placeholder="t('common.select_performance_indicator')" />
    </NFormItemGi>

    <NFormItemGi :span="span" path="target" :label="t('common.target')">
      <NInputNumber v-model="model.target" :placeholder="t('common.enter_target')" class="w-full" />
    </NFormItemGi>

    <NFormItemGi :span="span" path="achieved" :label="t('common.achieved')">
      <NInputNumber v-model="model.achieved" :placeholder="t('common.enter_achieved')" class="w-full" />
    </NFormItemGi>

 
  </NGrid>
</template>