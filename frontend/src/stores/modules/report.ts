import { defineStore } from 'pinia';
import { get } from '@/api/request';

export const useReportStore = defineStore('report', {
  state: () => ({
    // ... existing state ...
    statistics: {
      happy: 0,
      sad: 0
    },
  }),

  actions: {
    // ... existing actions ...
    
    async fetchStatistics() {
      try {
        const response = await get({ method: 'GET', url: 'reportfeedbacks/count' });
        if (response) {
          this.statistics = {
            happy: response.positiveFeedback || 0,
            sad: response.negativeFeedback || 0
          };
        }
      } catch (error) {
        console.error('Error fetching feedback statistics:', error);
      }
    },
  },
});