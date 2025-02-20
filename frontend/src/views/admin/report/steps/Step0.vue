<!-- components/steps/Step0.vue -->

<script setup lang="ts">
import { NFormItemGi, NGrid, NRadioGroup, NRadio } from 'naive-ui';

const reportStore = useReportStore();
const { model } = reportStore;

const appStore = useAppStore();
const span = appStore.getSpan();
const labelStyle = appStore.getLabelStyle();



// Options for select fields
const regionOptions = computed(() => reportStore.dropdownState.areas)

const collegeOptions = [
  { label: 'الكلية التقنية بجدة', value: 'الكلية التقنية بجدة' },
  { label: 'غير ذلك', value: 'other' },
];

const reportTypeOptions = [
  { label: 'تقرير إنجاز', value: 'achievement' },
  { label: 'تقرير مالي', value: 'financial' },
  { label: 'تقرير صيانة', value: 'maintenance' },
];

watch(
  () => reportStore.model.reportType,
  () => {
    reportStore.initializeSteps();
  }
);

onMounted(async () => {
  reportStore.initializeSteps();
    await  reportStore.fetchData();
});
</script>

<template>
    <NGrid :x-gap="12" :y-gap="8">
    <NFormItemGi :label-style="labelStyle" :span="span" path="region" :label="t('common.region')">
      <BaseSelect v-model="model.region" :options="regionOptions" :placeholder="t('common.select_region')" />
    </NFormItemGi>

    <NFormItemGi :label-style="labelStyle" :span="span" path="college" :label="t('common.college')">
      <BaseSelect v-model="model.college" :options="collegeOptions" :placeholder="t('common.select_college')" />
    </NFormItemGi>

    <NFormItemGi :label-style="labelStyle" :span="span" path="reportType" :label="t('common.report_type')">
      <NRadioGroup v-model:value="model.reportType">
        <NRadio v-for="option in reportTypeOptions" :key="option.value" :value="option.value">
          {{ option.label }}
        </NRadio>
      </NRadioGroup>
    </NFormItemGi>
  </NGrid>
  </template>
  