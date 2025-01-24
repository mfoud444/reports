<script setup lang="ts">
import { SvgIcon } from '@/components/common';
import { t } from '@/locales';
import { useBasicLayout } from '@/hooks/useBasicLayout';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { LineChart, BarChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
} from 'echarts/components';
import VChart from 'vue-echarts';

import { ref, computed, onMounted } from 'vue';

// Register ECharts components
use([
  CanvasRenderer,
  LineChart,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
]);

const dashboardStore = useDashboardStore();
const isLoading = ref(true);
const { isMobile } = useBasicLayout();

const cardItems = [
  { title: t('common.AchievementReports'), count: () => dashboardStore.achievementReportCount, icon: 'mdi:file-document' },
  { title: t('common.FinancialReports'), count: () => dashboardStore.financialReportCount, icon: 'mdi:finance' },
  { title: t('common.MaintenanceReports'), count: () => dashboardStore.maintenanceReportCount, icon: 'mdi:wrench' },
  { title: t('common.FeedbackCount'), count: () => dashboardStore.feedbackCount, icon: 'mdi:message' },
];

// Chart options
const reportTrendOptions = computed(() => ({
  title: {
    text: t('common.ReportGrowthTrend'),
    left: 'center',
  },
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    data: [t('common.AchievementReports'), t('common.FinancialReports'), t('common.MaintenanceReports')],
    bottom: 0,
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '60px',
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: dashboardStore.monthlyData?.map((d) => d.month) || [],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      name: t('common.AchievementReports'),
      type: 'line',
      data: dashboardStore.monthlyData?.map((d) => d.achievementReportCount) || [],
      smooth: true,
      itemStyle: { color: '#5470C6' }, // Custom color for achievement reports
    },
    {
      name: t('common.FinancialReports'),
      type: 'line',
      data: dashboardStore.monthlyData?.map((d) => d.financialReportCount) || [],
      smooth: true,
      itemStyle: { color: '#91CC75' }, // Custom color for financial reports
    },
    {
      name: t('common.MaintenanceReports'),
      type: 'line',
      data: dashboardStore.monthlyData?.map((d) => d.maintenanceReportCount) || [],
      smooth: true,
      itemStyle: { color: '#EE6666' }, 
    },
  ],
}));

const feedbackTrendOptions = computed(() => ({
  title: {
    text: t('common.FeedbackTrends'),
    left: 'center',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  legend: {
    data: [t('common.FeedbackCount')],
    bottom: 0,
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '60px',
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    data: dashboardStore.monthlyData?.map((d) => d.month) || [],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      name: t('common.FeedbackCount'),
      type: 'bar',
      data: dashboardStore.monthlyData?.map((d) => d.feedbackCount) || [],
      itemStyle: {
        color: '#4080ff', // Custom color for feedback bars
      },
    },
  ],
}));

onMounted(async () => {
  await dashboardStore.fetchDashboardData();
  isLoading.value = false;
});
</script>

<template>
  <div class="p-4" :class="{ 'mx-0 my-2': isMobile, 'mx-12': !isMobile }">
    <h1 class="font-bold mb-4 gtext" :class="{ 'text-xl': isMobile, 'text-2xl': !isMobile }">
      {{ t('common.Dashboard') }}
    </h1>

    <!-- Charts Section -->
    <!-- <NGrid :x-gap="isMobile ? 8 : 12" :y-gap="isMobile ? 8 : 12" :cols="isMobile ? 1 : 2" class="mt-4">
    
      <NGridItem>
        <NCard>
          <NSkeleton v-if="isLoading" text :repeat="3" />
          <v-chart v-else class="chart" :option="reportTrendOptions" :autoresize="true" />
        </NCard>
      </NGridItem>

      <NGridItem>
        <NCard>
          <NSkeleton v-if="isLoading" text :repeat="3" />
          <v-chart v-else class="chart" :option="feedbackTrendOptions" :autoresize="true" />
        </NCard>
      </NGridItem>
    </NGrid> -->

    <!-- Stat Cards -->
    <NGrid class="mt-8" :x-gap="isMobile ? 8 : 12" :y-gap="isMobile ? 8 : 12" :cols="isMobile ? 1 : 2">
      <NGridItem v-for="item in cardItems" :key="item.title">
        <NCard>
          <div class="flex items-center justify-between">
            <div>
              <h3 class="font-bold mb-2 gtext" :class="{ 'text-lg': isMobile, 'text-2xl': !isMobile }">
                {{ item.title }}
              </h3>
              <NSkeleton v-if="isLoading" text :repeat="1" :width="60" />
              <div v-else class="font-bold gtext" :class="{ 'text-2xl': isMobile, 'text-4xl': !isMobile }">
                {{ item.count() }}
              </div>
            </div>
            <NSkeleton v-if="isLoading" circle :width="48" :height="48" />
            <SvgIcon :icon="item.icon" :width="isMobile ? 28 : 38" :height="isMobile ? 28 : 38" class="color: blue;" />
          </div>
        </NCard>
      </NGridItem>
    </NGrid>
  </div>
</template>

<style scoped>
.chart {
  width: 100%;
  height: 400px; /* Adjust height as needed */
}
</style>