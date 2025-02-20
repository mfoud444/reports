<script setup lang="ts">
import { ref, watch } from 'vue';
import { NCard, NTable, NInput } from 'naive-ui';
import { storeToRefs } from 'pinia';
const reportStore = useReportStore();
const { model } = storeToRefs(reportStore); // Make model reactive
const appStore = useAppStore();
const labelStyle = appStore.getLabelStyle();

// Initialize rows with reactive model data
const rows = ref([
  {
    id: 1,
    type: model.value.revenueType1 ,
    revenue: model.value.revenueAmount1,
    expense: model.value.expenseAmount1,
  },
  {
    id: 2,
    type: model.value.revenueType2 ,
    revenue: model.value.revenueAmount2,
    expense: model.value.expenseAmount2,
  },
  {
    id: 3,
    type: model.value.revenueType3 ,
    revenue: model.value.revenueAmount3,
    expense: model.value.expenseAmount3,
  },
  {
    id: 4,
    type: model.value.revenueType4 ,
    revenue: model.value.revenueAmount4,
    expense: model.value.expenseAmount4,
  },
  {
    id: 5,
    type: model.value.revenueType5 ,
    revenue: model.value.revenueAmount5,
    expense: model.value.expenseAmount5,
  },
  {
    id: 6,
    type: model.value.revenueType6 ,
    revenue: model.value.revenueAmount6,
    expense: model.value.expenseAmount6,
  },
  {
    id: 7,
    type: model.value.revenueType7 ,
    revenue: model.value.revenueAmount7,
    expense: model.value.expenseAmount7,
  },
  {
    id: 8,
    type: model.value.revenueType8 ,
    revenue: model.value.revenueAmount8,
    expense: model.value.expenseAmount8,
  },
]);

// Watch for changes in rows and update the model
watch(
  rows,
  (newRows) => {
    newRows.forEach((row, index) => {
      const revenueTypeKey = `revenueType${index + 1}` as keyof typeof model.value;
      const revenueAmountKey = `revenueAmount${index + 1}` as keyof typeof model.value;
      const expenseAmountKey = `expenseAmount${index + 1}` as keyof typeof model.value;

      model.value[revenueTypeKey] = row.type;
      model.value[revenueAmountKey] = row.revenue;
      model.value[expenseAmountKey] = row.expense;
    });
  },
  { deep: true }
);
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
          <td>
            <NInput v-model:value="row.type" placeholder="أدخل النوع" />
          </td>
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