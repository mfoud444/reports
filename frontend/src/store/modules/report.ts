// store/report.ts
import { defineStore } from 'pinia';
import axios from 'axios';
import { baseURL } from '@/utils/request/axios';
import { ref } from 'vue';
import { initializeModel } from '@/utils/modelUtils';

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
    async generationReport() {
      try {
        console.log("data",this.model)
       
    // Create FormData object
    const formData = new FormData();

    // Append all fields from the model to FormData
    Object.keys(this.model).forEach((key) => {
      const value = this.model[key];

      // Check if the value is a file object (from NUpload)
      if (value && typeof value === 'object' && value.file) {
        // Append the file
        formData.append(key, value.file);
      } else {
        // Append other fields as strings
        formData.append(key, value);
      }
    });

    // Send the FormData to the backend
    const response = await axios.post(`${baseURL}generatereport`, formData, {
      responseType: 'blob',
      headers: {
        'Content-Type': 'multipart/form-data', 
      },
    });

        const blob = new Blob([response.data]);
        const blobUrl = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = blobUrl;

        const contentDisposition = response.headers['content-disposition'];
        let filename = 'report.pdf';
        if (contentDisposition && contentDisposition.includes('filename=')) {
          filename = contentDisposition
            .split('filename=')[1]
            .split(';')[0]
            .replace(/['"]/g, '');
        }

        // Extract the report_process_id from the filename
        const match = filename.match(/report_(\d+)\.pdf/);
        if (match) {
          this.reportProcessId = match[1]; // Store the report_process_id
        }

        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(blobUrl);

        // Show feedback form after download
        this.showFeedbackForm = true;
        this.showProcessCompletion = true;

        // Show success message
        // message.success('Report generated successfully!');
      } catch (error: any) {
        console.error('Error generating report:', error.message);
        console.error('Error :', error.error);
        if (error.response && error.response.data instanceof Blob) {
          const reader = new FileReader();
          reader.onload = () => {
            const errorMessage = JSON.parse(reader.result as string).message;
            console.error('Error generating report:', errorMessage);
            // message.error(`Error: ${errorMessage}`);
          };
          reader.readAsText(error.response.data);
        } else {
          // message.error('Failed to generate report. Please try again.');
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

        // Show success message
        // message.success('Feedback submitted successfully!');
        this.showFeedbackForm = false; // Hide feedback form after submission
      } catch (error: any) {
        console.error('Error submitting feedback:', error.message);
        // message.error('Failed to submit feedback. Please try again.');
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