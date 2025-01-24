<script setup lang="ts">
import { NFormItemGi, NGrid } from 'naive-ui';

const reportStore = useReportStore();
const { model } = reportStore;

const appStore = useAppStore();
const span = appStore.getSpan();
</script>

<template>
  <NGrid :x-gap="12" :y-gap="8">
    <NFormItemGi v-if="model.reportType !== 'maintenance'" :span="span" path="generalGoal" :label="t('common.general_goal')">
      <BaseInput v-model="model.generalGoal" type="textarea" :placeholder="t('common.enter_general_goal')" />
    </NFormItemGi>

    <NFormItemGi v-if="model.reportType === 'maintenance'" :span="span" path="faultDescription" :label="t('common.fault_description')">
      <BaseInput v-model="model.faultDescription" type="textarea" :placeholder="t('common.enter_fault_description')" />
    </NFormItemGi>

    <NFormItemGi v-if="model.reportType !== 'financial'" :span="span" path="executionProcedures" :label="t('common.execution_procedures')">
      <BaseInput v-model="model.executionProcedures" type="textarea" :placeholder="t('common.enter_execution_procedures')" />
    </NFormItemGi>

    <NFormItemGi v-if="model.reportType !== 'financial'" :span="span" path="challenges" :label="t('common.challenges')">
      <BaseInput v-model="model.challenges" type="textarea" :placeholder="t('common.enter_challenges')" />
    </NFormItemGi>

    <NFormItemGi :span="span" path="recommendations" :label="t('common.recommendations')">
      <BaseInput v-model="model.recommendations" type="textarea" :placeholder="t('common.enter_recommendations')" />
    </NFormItemGi>
  </NGrid>
</template>