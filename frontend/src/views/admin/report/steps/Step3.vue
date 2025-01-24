<script setup lang="ts">
import { NUpload, NFormItemGi, NGrid, UploadCustomRequestOptions } from 'naive-ui';
import { useMessage } from 'naive-ui';

const reportStore = useReportStore();
const { model } = reportStore;

const appStore = useAppStore();
const span = appStore.getSpan();
const message = useMessage();

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
</script>

<template>
  <NGrid :x-gap="12" :y-gap="8">
    <NFormItemGi :span="12" path="documentation1" :label="t('common.documentation_1')">
      <NUpload
        accept="image/*"
        list-type="image-card"
        :max="1"
        :data="{ bucket: 'documentation1' }"
        :custom-request="customRequest"
      />
    </NFormItemGi>

    <NFormItemGi :span="12" path="documentation2" :label="t('common.documentation_2')">
      <NUpload
        accept="image/*"
        list-type="image-card"
        :max="1"
        :data="{ bucket: 'documentation2' }"
        :custom-request="customRequest"
      />
    </NFormItemGi>

    <NFormItemGi :span="12" path="documentation3" :label="t('common.documentation_3')">
      <NUpload
        accept="image/*"
        list-type="image-card"
        :max="1"
        :data="{ bucket: 'documentation3' }"
        :custom-request="customRequest"
      />
    </NFormItemGi>

    <NFormItemGi :span="span" path="documentation4" :label="t('common.documentation_4')">
      <BaseInput v-model="model.documentation4" :placeholder="t('common.enter_documentation_4')" />
    </NFormItemGi>
  </NGrid>
</template>