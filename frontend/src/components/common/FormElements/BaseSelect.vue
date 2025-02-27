<template>
  <div  class="w-full">
    <NSelect
      :value="modelValue"
      :dir="direction"
      @update:value="handleSelectChange"
      :options="options"
      :placeholder="placeholder"
      clearable
      class="w-full"
      :multiple="multiple"
      :menu-props="{
        style: {
          textAlign: direction === 'rtl' ? 'right' : 'left',
          direction: direction,
          width: '100%'
        }
      }"
      :consistent-menu-width="false"
      :render-label="renderLabel"
      :style="{
        textAlign: direction === 'rtl' ? 'right' : 'left'
      }"
    />
    
    <!-- Add text input when "other" is selected -->
    <NInput
      v-if="showOtherInput"
      v-model:value="otherValue"
      class="mt-2 w-full"
     :placeholder="placeholder"
      @update:value="handleOtherInputChange"
    />
  </div>
</template>

<script setup lang="ts">
import { SelectOption, SelectGroupOption, SelectBaseOption, NIcon, NInput } from 'naive-ui'
import { useLanguage } from '@/hooks/useLanguage'
import { h, VNodeChild, ref, computed } from 'vue'
import { t } from '@/locales'

const { language } = useLanguage()
const direction = computed(() => language.value.name === 'ar-DZ' ? 'rtl' : 'ltr')

const props = defineProps<{
  modelValue?: any;
  placeholder: string;
  options: Array<SelectOption | SelectGroupOption>;
  multiple?: boolean;
}>();

const emit = defineEmits(['update:modelValue']);

const otherValue = ref('')
const showOtherInput = ref(false)

const handleSelectChange = (value: any) => {
  // Check for both 'other' and 'غير ذلك'
  if (value === 'other' || value === 'غير ذلك') {
    showOtherInput.value = true
    otherValue.value = '' // Reset other input value
    emit('update:modelValue', '') // Clear the select value until other input has a value
  } else {
    showOtherInput.value = false
    otherValue.value = ''
    emit('update:modelValue', value)
  }
}

const handleOtherInputChange = (value: string) => {
  if (showOtherInput.value) {
    if (value.trim() === '') {
      emit('update:modelValue', '') // Clear select value if other input is empty
    } else {
      emit('update:modelValue', value) // Set the custom value when input has text
    }
  }
}

const renderLabel: (option: SelectOption) => VNodeChild = (option) => {
  return h(
    'div',
    {
      style: {
        display: 'flex',
        alignItems: 'center',
      },
    },
    [
      h(
        'span',
        {
          style: {
            marginLeft: '8px',
          },
        },
        option.label as string,
      ),
    ],
  );
};
</script>

