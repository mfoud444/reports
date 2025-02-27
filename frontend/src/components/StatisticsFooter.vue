<script setup lang="ts">
import { NStatistic } from 'naive-ui';

interface Props {
  statistics: {
    happy: number;
    sad: number;
  }
}

defineProps<Props>();
</script>

<template>
  <div class="pt-8">
    <div class="flex flex-col items-center gap-4">
      <div class="flex justify-center space-x-12 gap-4">
        <!-- Happy Statistics -->
        <div class="flex flex-col items-center">
            <span class="mt-2 text-sm font-bold  text-green-600">{{ t('common.satisfied_users') }}</span>
          <NStatistic
            :value="statistics.happy"
            class="text-green-600"
          />
         
        </div>

        <!-- Sad Statistics -->
        <div class="flex flex-col items-center">
            <span class="mt-2 font-bold text-sm text-red-600">{{ t('common.unsatisfied_users') }}</span>
          <NStatistic
            :value="statistics.sad"
            class="text-red-600"
          />
         
        </div>
      </div>
      <div class="text-center text-gray-500">اعداد وكالة الجودة بالكلية التقنية بجدة - ٢٠٢٤</div>
    </div>
  </div>
</template> 