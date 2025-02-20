<script setup lang="ts">
import { NFormItemGi, NGrid, NDatePicker, NUpload, UploadCustomRequestOptions } from 'naive-ui';

import { useMessage } from 'naive-ui';

const reportStore = useReportStore();
const { model } = reportStore;

const appStore = useAppStore();
const span = appStore.getSpan();
const message = useMessage();
const labelStyle = appStore.getLabelStyle();

const customRequest = async ({ file, data, onFinish, onError, onProgress }: UploadCustomRequestOptions) => {
  try {
    onProgress({ percent: 20 });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    model[data.bucket] = file;
    onFinish();
  } catch (error: any) {
    message.error(error.message);
    onError();
  }
};

onMounted(() => {
  if (!model.reportDate) {
    model.reportDate = new Date().toISOString();
  }

});

const institutionOptions =  computed(() => reportStore.dropdownState.executingagencies)
</script>

<template>
  <NGrid :x-gap="12" :y-gap="8">
    <NFormItemGi :label-style="labelStyle" :span="span" path="reporter" :label="t('common.reporter')">
      <BaseInput v-model="model.reporter" :placeholder="t('common.enter_reporter')" />
    </NFormItemGi>

    <NFormItemGi :label-style="labelStyle" :span="span" path="reportDate" :label="t('common.report_date')">
      <NDatePicker    :default-value="new Date()" v-model="model.reportDate" class="w-full" />
    </NFormItemGi>

    <NFormItemGi :label-style="labelStyle" :span="span" path="approver" :label="t('common.approver')">
      <BaseInput v-model="model.approver" :placeholder="t('common.enter_approver')" />
    </NFormItemGi>

    <NFormItemGi v-if="model.reportType === 'maintenance'" :label-style="labelStyle" :span="span" path="department" :label="t('common.department')">
      <BaseSelect v-model="model.department" :options="institutionOptions" :placeholder="t('common.select_department')" />
    </NFormItemGi>

    <NFormItemGi :label-style="labelStyle" :span="span" path="stamp" :label="t('common.upload_stamp')">
      <NUpload
        accept="image/*"
        list-type="image-card"
        :max="1"
        :data="{ bucket: 'stamp' }"
        :custom-request="customRequest"
      />
    </NFormItemGi>
  </NGrid>
</template>