<template>
  <NFormItemGi
    v-bind="$attrs"
    :label-style="{ fontWeight: 'bold', fontSize: '18px' }"
  >
    <slot></slot>
  </NFormItemGi>
</template>

<script setup lang="ts">
import { NFormItemGi } from 'naive-ui';
</script> 