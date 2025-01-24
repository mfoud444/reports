import { defineStore } from 'pinia';
import axios from 'axios';
import { baseURL } from '@/utils/request/axios';
import { get } from '@/utils/request';

interface MonthlyData {
  month: string;
  achievementReportCount: number;
  financialReportCount: number;
  maintenanceReportCount: number;
  feedbackCount: number;
}

interface DashboardState {
  achievementReportCount: number;
  financialReportCount: number;
  maintenanceReportCount: number;
  feedbackCount: number;
  monthlyData: MonthlyData[];
  monthlyDataLoading: boolean;
}

export const useDashboardStore = defineStore('dashboard', {
  state: (): DashboardState => ({
    achievementReportCount: 0,
    financialReportCount: 0,
    maintenanceReportCount: 0,
    feedbackCount: 0,
    monthlyData: [],
    monthlyDataLoading: false,
  }),

  actions: {
    async fetchDashboardData() {
      try {
        // Fetch current counts for each report type
        const [
          achievementResponse,
          financialResponse,
          maintenanceResponse,
          feedbackResponse,
        ] = await Promise.all([
          get({method:"GET",url:'reportprocesses/count',data: {  type: 'achievement' } }),
          get({method:"GET",url:'reportprocesses/count',data: {  type: 'financial' } }),
          get({method:"GET",url:'reportprocesses/count',data: {  type: 'maintenance' } }),
          get({method:"GET",url:'reportprocesses/count',data: {  type: 'maintenance' } }),
        ]);
    
        // Extract counts from responses
        this.achievementReportCount = achievementResponse.count || 0;
        this.financialReportCount = financialResponse.count || 0;
        this.maintenanceReportCount = maintenanceResponse.count || 0;
        this.feedbackCount = feedbackResponse.count || 0;
    
        // Fetch monthly data
        await this.fetchMonthlyData();
      } catch (error:any) {
        console.error('Error fetching dashboard data:', error.message);
      }
    },
    async fetchMonthlyData() {
      this.monthlyDataLoading = true;
      try {
        // Get the last 6 months
        const months = Array.from({ length: 6 }, (_, i) => {
          const date = new Date();
          date.setMonth(date.getMonth() - i);
          return date.toISOString().slice(0, 7); // Format: YYYY-MM
        }).reverse();
    
        const monthlyData: MonthlyData[] = await Promise.all(
          months.map(async (month) => {
            const startDate = `${month}-01`;
            const endDate = `${month}-${new Date(month + '-01').getMonth() === 11 ? '31' : '30'}`;
    
            const [
              achievementResponse,
              financialResponse,
              maintenanceResponse,
              feedbackResponse,
            ] = await Promise.all([
              axios.get(`${baseURL}reportprocesses/count`, {
                params: { type: 'achievement', startDate, endDate },
              }),
              axios.get(`${baseURL}reportprocesses/count`, {
                params: { type: 'financial', startDate, endDate },
              }),
              axios.get(`${baseURL}reportprocesses/count`, {
                params: { type: 'maintenance', startDate, endDate },
              }),
              axios.get(`${baseURL}reportfeedbacks/count`, {
                params: { startDate, endDate },
              }),
            ]);
    
            return {
              month: new Date(startDate).toLocaleDateString('en-US', { month: 'short' }),
              achievementReportCount: achievementResponse.data.count || 0,
              financialReportCount: financialResponse.data.count || 0,
              maintenanceReportCount: maintenanceResponse.data.count || 0,
              feedbackCount: feedbackResponse.data.count || 0,
            };
          })
        );
    
        this.monthlyData = monthlyData;
      } catch (error) {
        console.error('Error fetching monthly data:', error);
      } finally {
        this.monthlyDataLoading = false;
      }
    }
  },
});