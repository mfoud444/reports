<script setup lang="ts">
import { ref } from 'vue';
import { NCard, NTable, NInput } from 'naive-ui';

const rows = ref([
  { id: 1, type: '1', revenue: '', expense: '' },
  { id: 2, type: '2', revenue: '', expense: '' },
  { id: 3, type: '3', revenue: '', expense: '' },
  { id: 4, type: '4', revenue: '', expense: '' },
  { id: 5, type: '5', revenue: '', expense: '' },
  { id: 6, type: '6', revenue: '', expense: '' },
  { id: 7, type: '7', revenue: '', expense: '' },
  { id: 8, type: '8', revenue: '', expense: '' },
]);
</script>

<template>
 <NCard :title="t('common.revenues_and_expenses')">
    <NTable bordered>
      <thead>
        <tr>
          <th>{{ t('common.revenue_type') }}</th>
          <th>{{ t('common.revenue_amount') }}</th>
          <th>{{ t('common.expense_amount') }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.id">
          <td>{{ row.type }}</td>
          <td>
            <NInput v-model:value="row.revenue" placeholder="أدخل المبلغ" />
          </td>
          <td>
            <NInput v-model:value="row.expense" placeholder="أدخل المبلغ" />
          </td>
        </tr>
      </tbody>
    </NTable>
  </NCard>
</template>