<script setup lang="ts">
import { NUpload, NFormItemGi, NGrid, UploadCustomRequestOptions } from 'naive-ui';
import { useMessage } from 'naive-ui';
import { ref } from 'vue';

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

const urlStatus = ref<'error' | 'success' | undefined>(undefined);

const isValidUrl = (url: string): boolean => {
  if (!url) return true; // Allow empty since not required
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

const handleBlur = (e: Event) => {
  const value = (e.target as HTMLInputElement).value;
  urlStatus.value = isValidUrl(value) ? undefined : 'error';
};


const handleChange = (e: Event) => {
  const value = (e.target as HTMLInputElement).value;
  urlStatus.value = isValidUrl(value) ? undefined : 'error';
};


</script>

<template>
  <NGrid :x-gap="12" :y-gap="8">
    <NFormItemGi :label-style="labelStyle" :span="12" path="documentation1" :label="t('common.image_1')">
      <NUpload
        accept="image/*"
        list-type="image-card"
        :max="1"
        :data="{ bucket: 'documentation1' }"
        :custom-request="customRequest"
      />
    </NFormItemGi>

    <NFormItemGi :label-style="labelStyle" :span="12" path="documentation2" :label="t('common.image_2')">
      <NUpload
        accept="image/*"
        list-type="image-card"
        :max="1"
        :data="{ bucket: 'documentation2' }"
        :custom-request="customRequest"
      />
    </NFormItemGi>

    <NFormItemGi :label-style="labelStyle" :span="12" path="documentation3" :label="t('common.image_3')">
      <NUpload
        accept="image/*"
        list-type="image-card"
        :max="1"
        :data="{ bucket: 'documentation3' }"
        :custom-request="customRequest"
      />
    </NFormItemGi>

    <NFormItemGi :label-style="labelStyle" :span="span" path="documentation4" :label="t('common.tweet_video')">
      <BaseInput 
        v-model="model.documentation4"
        :status="urlStatus"
        @blur="handleBlur"
      
        @change="handleChange"
     
        @input="handleInput"
        :placeholder="t('common.enter_tweet_video_link')"
      />
    </NFormItemGi>
  </NGrid>
</template>