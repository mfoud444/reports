<template>
  <NSelect
    :value="modelValue"
    :dir="direction"
    @update:value="$emit('update:modelValue', $event)"
    :options="options"
    :placeholder="placeholder"
    clearable

    :multiple="multiple"
  />
</template>

<script setup lang="ts">
import { SelectOption, SelectGroupOption } from 'naive-ui'
import { useLanguage } from '@/hooks/useLanguage'

const { language } = useLanguage()
const direction = computed(() => 'rtl');

const props = defineProps<{
  modelValue?: any;
  placeholder: string;
  options: Array<SelectOption | SelectGroupOption>;
  multiple?: boolean;
}>();

const emit = defineEmits(['update:modelValue']);
</script>

