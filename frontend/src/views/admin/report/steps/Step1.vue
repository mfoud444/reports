<script setup lang="ts">
import { NFormItemGi, NGrid, NDatePicker, NTimePicker } from 'naive-ui';

const reportStore = useReportStore();
const { model } = reportStore;

const appStore = useAppStore();
const span = appStore.getSpan();

const semesterOptions = [
  { label: 'الفصل التدريبي الأول ١٤٤٦', value: 'الفصل التدريبي الأول ١٤٤٦' },
  { label: 'الفصل التدريبي الثاني ١٤٤٦', value: 'الفصل التدريبي الثاني ١٤٤٦' },
];

const institutionOptions = [
  { label: 'عمادة الكلية', value: 'عمادة الكلية' },
  { label: 'وكالة الكلية للجودة', value: 'وكالة الكلية للجودة' },
  { label: 'وكالة الكلية لشؤون المتدربين', value: 'وكالة الكلية لشؤون المتدربين' },
];

const resourcesOptions = [
  { label: 'بشرية فقط', value: 'بشرية فقط' },
  { label: 'مادية فقط', value: 'مادية فقط' },
];
</script>

<template>
 <NGrid :x-gap="12" :y-gap="8">
    <NFormItemGi :span="span" path="semester" :label="t('common.semester')">
      <BaseSelect v-model="model.semester" :options="semesterOptions" :placeholder="t('common.select_semester')" />
    </NFormItemGi>

    <NFormItemGi v-if="model.reportType === 'maintenance'" :span="span" path="resources" :label="t('common.maintenance_type')">
      <BaseSelect v-model="model.resources" :options="resourcesOptions" :placeholder="t('common.select_resources')" />
    </NFormItemGi>

    <NFormItemGi :span="span" path="executionDate" :label="t('common.execution_date')">
      <NDatePicker v-model="model.executionDate" type="date" class="w-full" />
    </NFormItemGi>

    <NFormItemGi v-if="model.reportType === 'maintenance'" :span="span" path="maintenanceTime" :label="t('common.maintenance_time')">
      <NTimePicker v-model="model.maintenanceTime" class="w-full" />
    </NFormItemGi>

    <NFormItemGi v-if="model.reportType !== 'maintenance'" :span="span" path="institution" :label="t('common.executing_authority')">
      <BaseSelect v-model="model.institution" :options="institutionOptions" :placeholder="t('common.select_institution')" />
    </NFormItemGi>

    <NFormItemGi v-if="model.reportType !== 'maintenance'" :span="span" path="topic" :label="t('common.report_topic')">
      <BaseInput v-model="model.topic" :placeholder="t('common.enter_topic')" />
    </NFormItemGi>

    <NFormItemGi v-if="model.reportType !== 'maintenance'" :span="span" path="supervisor" :label="t('common.main_supervisor')">
      <BaseInput v-model="model.supervisor" :placeholder="t('common.enter_supervisor')" />
    </NFormItemGi>

    <NFormItemGi v-if="model.reportType === 'financial'" :span="span" path="subSupervisor" :label="t('common.sub_supervisor')">
      <BaseInput v-model="model.subSupervisor" :placeholder="t('common.enter_sub_supervisor')" />
    </NFormItemGi>

    <NFormItemGi v-if="model.reportType === 'maintenance'" :span="span" path="requestType" :label="t('common.request_type')">
      <BaseSelect v-model="model.requestType" :options="resourcesOptions" :placeholder="t('common.select_request_type')" />
    </NFormItemGi>

    <NFormItemGi v-if="model.reportType === 'maintenance'" :span="span" path="maintenanceTopic" :label="t('common.maintenance_topic')">
      <BaseInput v-model="model.maintenanceTopic" :placeholder="t('common.enter_maintenance_topic')" />
    </NFormItemGi>

    <NFormItemGi v-if="model.reportType === 'maintenance'" :span="span" path="department" :label="t('common.requesting_department')">
      <BaseSelect v-model="model.department" :options="institutionOptions" :placeholder="t('common.select_department')" />
    </NFormItemGi>

    <NFormItemGi v-if="model.reportType === 'achievement'" :span="span" path="resources" :label="t('common.resources_used')">
      <BaseSelect v-model="model.resources" :options="resourcesOptions" :placeholder="t('common.select_resources')" />
    </NFormItemGi>
  </NGrid>
</template>