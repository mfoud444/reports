// store/report.ts
import { defineStore } from 'pinia';
import axios from 'axios';
import { baseURL } from '@/utils/request/axios';
import { ref } from 'vue';
import { initializeModel } from '@/utils/modelUtils';
import { v4 as uuidv4 } from 'uuid';
import { get } from '@/utils/request';

interface DropdownItem {
  label: string;
  value: any;
}

interface DropdownState {
  areas: DropdownItem[];
  establishments: DropdownItem[];
  reporttypes: DropdownItem[];
  trainingclasses: DropdownItem[];
  executingagencies: DropdownItem[];
  resources: DropdownItem[];
  performanceindicators: DropdownItem[];
  maintenancetypes: DropdownItem[];
  requesttypes: DropdownItem[];
  maintenancerequestingagencies: DropdownItem[];
  departments: DropdownItem[];
  semesters: DropdownItem[];
}



export const useReportStore = defineStore('report', {
  state: () => ({
    model: ref<API.ReportModel>(initializeModel()),
    statistics: {
      happy: 0,
      sad: 0
    },
    dropdownState : ref<DropdownState>({
      areas: [],
      establishments: [],
      reporttypes: [],
      trainingclasses: [],
      executingagencies: [],
      resources: [],
      performanceindicators: [],
      maintenancetypes: [],
      requesttypes: [],
      maintenancerequestingagencies: [],
      departments: [],
      semesters: []
    }),
    steps: [] as Array<{ title: string; status: 'process' | 'wait' | 'finish' }>,
    showProcessCompletion:false,
    currentStep: 0,
    showFeedbackForm: false, 
    feedback: ref({
      isLiked: false,
    }),
    reportProcessId: ref(""),
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
        // documentation1: [{ required: false, message: t('common.documentation1Required'), trigger: ['input', 'blur'] }],
        // documentation2: [{ required: false, message: t('common.documentation2Required'), trigger: ['input', 'blur'] }],
        // documentation3: [{ required: false, message: t('common.documentation3Required'), trigger: ['input', 'blur'] }],
        // documentation4: [{ required: false, message: t('common.documentation4Required'), trigger: ['input', 'blur'] }],
        performanceIndicator: [{ required: true, message: t('common.performanceIndicatorRequired'), trigger: ['input', 'blur'] }],
        // target: [{ required: false, message: t('common.targetRequired'),   trigger: ['blur', 'change'] }],
        // achieved: [{ required: false, message: t('common.achievedRequired'),   trigger: ['blur', 'change'] }],
        percentage: [{ required: true, message: t('common.percentageRequired'),   trigger: ['blur', 'change'] }],
        reporter: [{ required: true, message: t('common.reporterRequired'), trigger: ['input', 'blur'] }],
        reportDate: [{ required: false, message: t('common.reportDateRequired'), trigger: ['blur', 'change'] }],
        approver: [{ required: true, message: t('common.approverRequired'), trigger: ['input', 'blur'] }],
        // stamp: [{ required: false, message: t('common.stampRequired'), trigger: ['blur', 'change'] }],
        generalGoal: [{ required: true, message: t('common.generalGoalRequired'), trigger: ['input', 'blur'] }],
        mainSupervisor: [{ required: true, message: t('common.mainSupervisorRequired'), trigger: ['input', 'blur'] }],
        subSupervisor: [{ required: true, message: t('common.subSupervisorRequired'), trigger: ['input', 'blur'] }],
        auditDate: [{ required: true, message: t('common.auditDateRequired'), trigger: ['blur', 'change'] }],
        maintenanceType: [{ required: true, message: t('common.maintenanceTypeRequired'), trigger: ['input', 'blur'] }],
        maintenanceDate: [{ required: true, message: t('common.maintenanceDateRequired'), trigger: ['blur', 'change'] }],
        maintenanceTime: [{ required: false, message: t('common.maintenanceTimeRequired'), trigger: ['input', 'blur'] }],
        requestType: [{ required: true, message: t('common.requestTypeRequired'), trigger: ['input', 'blur'] }],
        maintenanceTopic: [{ required: true, message: t('common.maintenanceTopicRequired'), trigger: ['input', 'blur'] }],
        faultDescription: [{ required: true, message: t('common.faultDescriptionRequired'), trigger: ['input', 'blur'] }],
        department: [{ required: true, message: t('common.departmentRequired'), trigger: ['input', 'blur'] }],
    },
  }),
  actions: {
    async fetchData(): Promise<void> {
      try {
        // loading.value = true;
        // error.value = false;
    
        storesSettings.areas().fetchDataDropDown();
   
   await storesSettings.establishments().fetchDataDropDown();

   await storesSettings.reporttypes().fetchDataDropDown();

   await storesSettings.trainingclasses().fetchDataDropDown();

   await storesSettings.executingagencies().fetchDataDropDown();

   await storesSettings.resources().fetchDataDropDown();

   await storesSettings.performanceindicators().fetchDataDropDown();

   await storesSettings.maintenancetypes().fetchDataDropDown();

   await storesSettings.requesttypes().fetchDataDropDown();
 
await storesSettings.maintenancerequestingagencies().fetchDataDropDown();
  
await storesSettings.departments().fetchDataDropDown();
await storesSettings.semesters().fetchDataDropDown(); 

this.dropdownState.semesters = storesSettings.semesters().dropdownList;
        // Fetch all dropdown data and update the state
        this.dropdownState.areas =  storesSettings.areas().dropdownList;
        this.dropdownState.establishments =  storesSettings.establishments().dropdownList;
        this.dropdownState.reporttypes =  storesSettings.reporttypes().dropdownList;
        this.dropdownState.trainingclasses =  storesSettings.trainingclasses().dropdownList;
        this.dropdownState.executingagencies =  storesSettings.executingagencies().dropdownList;
        this.dropdownState.resources =  storesSettings.resources().dropdownList;
        this.dropdownState.performanceindicators =  storesSettings.performanceindicators().dropdownList;
        this.dropdownState.maintenancetypes =  storesSettings.maintenancetypes().dropdownList;
        this.dropdownState.requesttypes =  storesSettings.requesttypes().dropdownList;
        this.dropdownState.maintenancerequestingagencies =  storesSettings.maintenancerequestingagencies().dropdownList;
        this.dropdownState.departments =  storesSettings.departments().dropdownList;
    
      } catch (err: any) {
        // error.value = true;
        console.error(t('chat.dataFetchError'), err.message);
      } finally {
        // loading.value = false;
      }
    },
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
        if (!this.reportProcessId) {
          throw new Error('Report process ID is missing.');
        }
        const formData = new FormData();
        
        // Add the UUID to formData
        formData.append('id', this.reportProcessId);
        
        // Add other form data
        Object.keys(this.model).forEach((key) => {
          const value = (this.model as Record<string, any>)[key];
          if (value && typeof value === 'object' && value.file) {
            formData.append(key, value.file);
          } else {
            formData.append(key, value);
          }
        });
    
        // Send the request to the backend
        const response = await axios.post(`${baseURL}/generatereport`, formData, {
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
    async submitFeedback() {
      try {
        this.reportProcessId = uuidv4();
      
        const response = await axios.post(`${baseURL}/report-feedbacks`, {
          is_liked: this.feedback.isLiked,
          reportType: this.model.reportType,
          report_process_id: this.reportProcessId,
        });

        if(response.status) {
          // Increment the appropriate statistic based on feedback
          if (this.feedback.isLiked) {
            this.statistics.happy++;
          } else {
            this.statistics.sad++;
          }
          
          this.showFeedbackForm = false; 
          this.showProcessCompletion = false;
        }
      
      } catch (error: any) {
        console.error('Error submitting feedback:', error.message);
      }
    },
    nextStep() {
      if (this.currentStep < this.steps.length - 1) {
        this.steps[this.currentStep].status = 'process';
        this.currentStep++;
        this.steps[this.currentStep].status = 'process';
      }
    },
    prevStep() {
      if (this.currentStep > 0) {
        this.steps[this.currentStep].status = 'wait';
        this.currentStep--;
        // this.steps[this.currentStep].status = 'wait';
      }
    },
  },
});