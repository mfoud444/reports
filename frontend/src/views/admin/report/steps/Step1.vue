<script setup lang="ts">
import { NFormItemGi, NGrid, NDatePicker, NTimePicker } from 'naive-ui';
import { onMounted } from 'vue';

const reportStore = useReportStore();
const { model } = reportStore;

const appStore = useAppStore();
const span = appStore.getSpan();

const semesterOptions = computed(() => reportStore.dropdownState.semesters)
const institutionOptions = computed(() => reportStore.dropdownState.executingagencies)
const resourcesOptions = computed(() => reportStore.dropdownState.resources)
const requestType = computed(() => reportStore.dropdownState.requesttypes)
const departments = computed(() => reportStore.dropdownState.departments)
const maintenanceType = computed(() => reportStore.dropdownState.maintenancetypes)

// Set default date on component mount
onMounted(() => {
  if (!model.executionDate) {
    model.executionDate = new Date().toISOString();
  }
  if (!model.maintenanceTime && model.reportType === 'maintenance') {
    model.maintenanceTime = new Date().toISOString();
  }
});

const labelStyle = appStore.getLabelStyle();
</script>

<template>
 <NGrid :x-gap="12" :y-gap="8">
    <NFormItemGi :label-style="labelStyle" :span="span" path="semester" :label="t('common.semester')">
      <BaseSelect v-model="model.semester" :options="semesterOptions" :placeholder="t('common.select_semester')" />
    </NFormItemGi>

    <NFormItemGi v-if="model.reportType === 'maintenance'" :label-style="labelStyle" :span="span" path="maintenanceType" :label="t('common.maintenance_type')">
      <BaseSelect v-model="model.maintenanceType" :options="maintenanceType" :placeholder="t('common.maintenance_type')"/>
    </NFormItemGi>

    <NFormItemGi :label-style="labelStyle" :span="span" path="executionDate" :label="model.reportType === 'maintenance' ? t('common.maintenance_date') : t('common.execution_date')">
      <NDatePicker 
        v-model="model.executionDate" 
        type="date" 
        class="w-full"
        :default-value="new Date()"
        :is-date-disabled="(timestamp: number) => timestamp > Date.now()"
        :actions="['clear', 'now']"
      />
    </NFormItemGi>

    <NFormItemGi v-if="model.reportType === 'maintenance'" :label-style="labelStyle" :span="span" path="maintenanceTime" :label="t('common.maintenance_time')">
      <NTimePicker 
        v-model="model.maintenanceTime" 
        class="w-full"
        :default-value="new Date()"
        :actions="['clear', 'now']"
        format="h:mm a"
        :use-12-hours="true"
        :show-seconds="false"
      />
    </NFormItemGi>

    <NFormItemGi v-if="model.reportType !== 'maintenance'" :label-style="labelStyle" :span="span" path="institution" :label="t('common.executing_authority')">
      <BaseSelect v-model="model.institution" :options="institutionOptions" :placeholder="t('common.select_institution')" />
    </NFormItemGi>

    <NFormItemGi v-if="model.reportType !== 'maintenance'" :label-style="labelStyle" :span="span" path="topic" :label="t('common.report_topic')">
      <BaseInput v-model="model.topic" :placeholder="t('common.enter_topic')" />
    </NFormItemGi>

    <NFormItemGi v-if="model.reportType !== 'maintenance'" :label-style="labelStyle" :span="span" path="mainSupervisor" :label="t('common.main_supervisor')">
      <BaseInput v-model="model.mainSupervisor" :placeholder="t('common.enter_supervisor')" />
    </NFormItemGi>

    <NFormItemGi v-if="model.reportType === 'financial'" :label-style="labelStyle" :span="span" path="subSupervisor" :label="t('common.sub_supervisor')">
      <BaseInput v-model="model.subSupervisor" :placeholder="t('common.enter_sub_supervisor')" />
    </NFormItemGi>

    <NFormItemGi v-if="model.reportType === 'maintenance'" :label-style="labelStyle" :span="span" path="requestType" :label="t('common.request_type')">
      <BaseSelect v-model="model.requestType" :options="requestType" :placeholder="t('common.select_request_type')" />
    </NFormItemGi>

    <NFormItemGi v-if="model.reportType === 'maintenance'" :label-style="labelStyle" :span="span" path="maintenanceTopic" :label="t('common.maintenance_topic')">
      <BaseInput v-model="model.maintenanceTopic" :placeholder="t('common.enter_maintenance_topic')" />
    </NFormItemGi>

    <NFormItemGi v-if="model.reportType === 'maintenance'" :label-style="labelStyle" :span="span" path="department" :label="t('common.requesting_department')">
      <BaseSelect v-model="model.department" :options="departments" :placeholder="t('common.select_department')" />
    </NFormItemGi>

    <NFormItemGi v-if="model.reportType === 'achievement'" :label-style="labelStyle" :span="span" path="resources" :label="t('common.resources_used')">
      <BaseSelect v-model="model.resources" :options="resourcesOptions" :placeholder="t('common.select_resources')" />
    </NFormItemGi>
  </NGrid>
</template>