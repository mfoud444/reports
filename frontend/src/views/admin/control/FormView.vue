<script setup lang="ts">
import { t } from '@/locales';
import { useAppStore } from '@/store';
import { generateValidationRules } from '@/utils/functions';
import { FormInst } from 'naive-ui';
const appStore =  useAppStore()
const span = appStore.getSpan()
const props = defineProps<{
  initialModel: API.AdministrativeArea;
  objStore: Object,
}>();
onMounted(() => {
  emit('formMounted', formRef.value);
});
const emit = defineEmits(['handleValidateButtonClick', 'formMounted']);
const model = toRef(props, 'initialModel');
const formRef = ref<FormInst | null>(null);
const requiredFields: (keyof API.AdministrativeArea)[] = ['name'];
const rules = generateValidationRules(props.initialModel, requiredFields);
</script>
<template>

  <NForm
    ref="formRef"
    :model="model"
    :rules="rules"
    size="large"
  >
    <div>
      <NGrid>
       
        <NFormItemGi
          :span="span"
          path="name"
          :label="t('common.name')"
        >
          <BaseInput
            v-model="model.name"
            :placeholder="t('common.name')"
            @keyup.enter="$emit('handleValidateButtonClick', $event)"
          />
        </NFormItemGi>
       
        <NFormItemGi
          :span="span"
          path="isActivate"
          :label="t('common.isActivate')"
        >
          <BaseSwitch v-model:value="model.state" />
        </NFormItemGi>
      </NGrid>
    </div>

  </NForm>
</template>
