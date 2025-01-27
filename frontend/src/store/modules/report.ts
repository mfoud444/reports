// store/report.ts
import { defineStore } from 'pinia';
import axios from 'axios';
import { baseURL } from '@/utils/request/axios';
import { ref } from 'vue';
import { initializeModel } from '@/utils/modelUtils';
import {  useMessage } from 'naive-ui';
export const useReportStore = defineStore('report', {
  state: () => ({
    model: ref<API.ReportModel>(initializeModel()),
    steps: [] as Array<{ title: string; status: 'process' | 'wait' | 'finish' }>,
    showProcessCompletion:false,
    currentStep: 0,
    showFeedbackForm: false, 
    feedback: ref({
      isLiked: false,
    }),
    reportProcessId: ref(null), 
    rules: {
        region: [{ required: true, message: t('common.regionRequired'), trigger: ['input', 'blur'] }],
        college: [{ required: true, message: t('common.collegeRequired'), trigger: ['input', 'blur'] }],
        reportType: [{ required: true, message: t('common.reportTypeRequired'), trigger: ['input', 'blur'] }],
        semester: [{ required: true, message: t('common.semesterRequired'), trigger: ['input', 'blur'] }],
        executionDate: [{ required: false, message: t('common.executionDateRequired'), trigger: ['blur', 'change']}],
        institution: [{ required: true, message: t('common.institutionRequired'), trigger: ['input', 'blur'] }],
        topic: [{ required: true, message: t('common.topicRequired'), trigger: ['input', 'blur'] }],
        supervisor: [{ required: true, message: t('common.supervisorRequired'), trigger: ['input', 'blur'] }],
        resources: [{ required: true, message: t('common.resourcesRequired'), trigger: ['input', 'blur'] }],
        operationalGoal: [{ required: true, message: t('common.operationalGoalRequired'), trigger: ['input', 'blur'] }],
        executionProcedures: [{ required: true, message: t('common.executionProceduresRequired'), trigger: ['input', 'blur'] }],
        challenges: [{ required: true, message: t('common.challengesRequired'), trigger: ['input', 'blur'] }],
        recommendations: [{ required: true, message: t('common.recommendationsRequired'), trigger: ['input', 'blur'] }],
        documentation1: [{ required: false, message: t('common.documentation1Required'), trigger: ['input', 'blur'] }],
        documentation2: [{ required: false, message: t('common.documentation2Required'), trigger: ['input', 'blur'] }],
        documentation3: [{ required: false, message: t('common.documentation3Required'), trigger: ['input', 'blur'] }],
        documentation4: [{ required: false, message: t('common.documentation4Required'), trigger: ['input', 'blur'] }],
        performanceIndicator: [{ required: true, message: t('common.performanceIndicatorRequired'), trigger: ['input', 'blur'] }],
        target: [{ required: false, message: t('common.targetRequired'),   trigger: ['blur', 'change'] }],
        achieved: [{ required: false, message: t('common.achievedRequired'),   trigger: ['blur', 'change'] }],
        percentage: [{ required: true, message: t('common.percentageRequired'),   trigger: ['blur', 'change'] }],
        reporter: [{ required: true, message: t('common.reporterRequired'), trigger: ['input', 'blur'] }],
        reportDate: [{ required: false, message: t('common.reportDateRequired'), trigger: ['blur', 'change'] }],
        approver: [{ required: true, message: t('common.approverRequired'), trigger: ['input', 'blur'] }],
        stamp: [{ required: true, message: t('common.stampRequired'), trigger: ['input', 'blur'] }],
        generalGoal: [{ required: true, message: t('common.generalGoalRequired'), trigger: ['input', 'blur'] }],
        mainSupervisor: [{ required: true, message: t('common.mainSupervisorRequired'), trigger: ['input', 'blur'] }],
        subSupervisor: [{ required: true, message: t('common.subSupervisorRequired'), trigger: ['input', 'blur'] }],
        auditDate: [{ required: true, message: t('common.auditDateRequired'), trigger: ['blur', 'change'] }],
        maintenanceType: [{ required: true, message: t('common.maintenanceTypeRequired'), trigger: ['input', 'blur'] }],
        maintenanceDate: [{ required: true, message: t('common.maintenanceDateRequired'), trigger: ['blur', 'change'] }],
        maintenanceTime: [{ required: true, message: t('common.maintenanceTimeRequired'), trigger: ['input', 'blur'] }],
        requestType: [{ required: true, message: t('common.requestTypeRequired'), trigger: ['input', 'blur'] }],
        maintenanceTopic: [{ required: true, message: t('common.maintenanceTopicRequired'), trigger: ['input', 'blur'] }],
        faultDescription: [{ required: true, message: t('common.faultDescriptionRequired'), trigger: ['input', 'blur'] }],
        department: [{ required: true, message: t('common.departmentRequired'), trigger: ['input', 'blur'] }],
    },
  }),
  actions: {
    initializeSteps() {
      if (this.model.reportType === 'financial' || this.model.reportType === 'maintenance') {
        this.steps = [
          { title: '', status: 'process' },
          { title: '', status: 'wait' },
          { title: '', status: 'wait' },
          { title: '', status: 'wait' },
          { title: '', status: 'wait' },
        ];
      } else {
        this.steps = [
          { title: '', status: 'process' },
          { title: '', status: 'wait' },
          { title: '', status: 'wait' },
          { title: '', status: 'wait' },
          { title: '', status: 'wait' },
          { title: '', status: 'wait' },
        ];
      }
    },

    // content-disposition:
    // attachment; filename=report_22.pdf
    
    // but not found match[1]
    // » "kkkkkkkkk" "report.pdf"
    async generationReport() {
      try {
        console.log("data", this.model);
    
        const formData = new FormData();
        Object.keys(this.model).forEach((key) => {
          const value = this.model[key];
          if (value && typeof value === 'object' && value.file) {
            formData.append(key, value.file);
          } else {
            formData.append(key, value);
          }
        });
    
        // Send the request to the backend
        const response = await axios.post(`${baseURL}generatereport`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
    
        // Extract data from the response
        const { reportProcessId, file } = response.data;
    
        if (reportProcessId) {
          this.reportProcessId = reportProcessId;
          console.log("Report Process ID:", reportProcessId);
        } else {
          console.warn("Response does not contain reportProcessId.");
        }
    
        if (file) {
          // Decode the base64 file and create a blob
          const blob = new Blob([Uint8Array.from(atob(file), (c) => c.charCodeAt(0))], {
            type: 'application/pdf',
          });
          const blobUrl = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = blobUrl;
          a.download = `report_${reportProcessId || 'unknown'}.pdf`; // Use default if reportProcessId is missing
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(blobUrl);
        }
    
        // Show feedback form after download
        this.showFeedbackForm = true;
        this.showProcessCompletion = true;
    
      } catch (error:any) {
        console.error('Error generating report:', error.message);
        if (error.response && error.response.data) {
          try {
            const errorMessage = JSON.parse(error.response.data).message;
            console.error('Error:', errorMessage);
          } catch {
            console.error('Error details:', error);
          }
        }
      }
    },
    

    async submitFeedback() {
      try {
        if (!this.reportProcessId) {
          throw new Error('Report process ID is missing.');
        }

        const response = await axios.post(`${baseURL}report-processes/${this.reportProcessId}/feedback`, {
          is_liked: this.feedback.isLiked,
         
        });
    
        this.showFeedbackForm = false; // Hide feedback form after submission
        this.showProcessCompletion = false;
      } catch (error: any) {
     

        console.error('Error submitting feedback:', error.message);
       
      }
    },
    nextStep() {
      if (this.currentStep < this.steps.length - 1) {
        this.currentStep++;
        this.steps[this.currentStep].status = 'process';
      }
    },
    prevStep() {
      if (this.currentStep > 0) {
        this.currentStep--;
        this.steps[this.currentStep].status = 'process';
      }
    },
  },
});