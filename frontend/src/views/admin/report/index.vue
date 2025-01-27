<script setup lang="ts">
import { storeToRefs } from 'pinia';
import Step0 from './steps/Step0.vue';
import Step1 from './steps/Step1.vue';
import Step2 from './steps/Step2.vue';
import Step3 from './steps/Step3.vue';
import Step4 from './steps/Step4.vue';
import Step5 from './steps/Step5.vue';
import Step32 from './steps/Step32.vue';
import { NSteps, NStep, NForm, NButton, } from 'naive-ui';
import { useBasicLayout } from '@/hooks/useBasicLayout';
import defaultLogo from '@/assets/logo.png'
const reportStore = useReportStore();
const { model, steps, showProcessCompletion, currentStep, rules, showFeedbackForm, feedback } = storeToRefs(reportStore);
const { generationReport, nextStep, prevStep, submitFeedback } = reportStore;
const message = useMessage();

const handleFeedback = (isLiked: boolean) => {
  feedback.value.isLiked = isLiked; 
 try{ 
  submitFeedback(); 
     message.success('Feedback submitted successfully!');
     
      } catch (error: any) {
        const message = useMessage();

        console.error('Error submitting feedback:', error.message);
        message.error('Failed to submit feedback. Please try again.');
      }
};
const { isMobile } = useBasicLayout();
</script>
<template>
  
  <div class="flex justify-center align-center" :class="isMobile ? 'py-4 ' : 'py-16'">
    <div class="p-4 relative min-h-[500px]    flex flex-col justify-between shadow-lg rounded-md" :class="isMobile ? 'w-full' : 'w-[50vw] mx-4'">
   <div class=" text-center mb-2">
    <NImage
    width="200"
    height="200"
    :src="defaultLogo"
  />
   </div>
      <template v-if="!showProcessCompletion">
        <div class=" text-center " >
          <NSteps class="w-full" :current="currentStep" style="margin-bottom: 20px; width: 100%;">
          <NStep v-for="(step, index) in steps" :key="index" :title="t(step.title)" :status="step.status" />
        </NSteps>
        </div>
      <div class="">
        <NForm :model="model" :rules="rules" size="large">
         
          <Step0 v-if="currentStep === 0" />
          <Step1 v-if="currentStep === 1" />
          <Step2 v-if="currentStep === 2" />
          <Step3 v-if="currentStep === 3 && (model.reportType === 'achievement' || model.reportType === 'maintenance') " />
          <Step32 v-if="currentStep === 3 && model.reportType === 'financial'" />
          <Step4 v-if="currentStep === 4 && model.reportType === 'achievement'" />
          <Step5 v-if="(currentStep === 5 &&  model.reportType === 'achievement') || (currentStep === 4 && model.reportType !== 'achievement') " />
        </NForm>

        <!-- Navigation Buttons -->
        <div style="display: flex; justify-content: space-between; margin-top: 20px;">
          <NButton v-if="currentStep > 0" @click="prevStep">
            {{ t('common.previous') }}
          </NButton>
          <div class="space-x-3">
            <NButton type="success" @click="generationReport" style="background-color: blue;" v-if="currentStep === steps.length - 1">
              {{ t('common.send_email') }}
            </NButton>
            <NButton v-if="currentStep === steps.length - 1" type="primary" style="background-color: blue;" @click="generationReport">
              {{ t('common.submit') }}
            </NButton>
            <NButton v-if="currentStep != steps.length - 1" type="primary" style="background-color: blue;" @click="nextStep">
              {{ t('common.next') }}
            </NButton>
          </div>
        </div>
        </div>
      </template>

      <template v-else>
        <div v-if="showFeedbackForm" class="feedback-form">
          <div class="success-message">
            <h1 class="text-3xl font-bold text-green-600">🎉 {{ t('common.congratulations') }} 🎉</h1>
            <p class="text-lg text-gray-700 mt-2">{{ t('common.process_completed') }}</p>
        
          </div>

          <div class="feedback-actions mt-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">{{ t('common.feedback_prompt') }}</h2>
            <div class="flex justify-center space-x-6">
              <!-- Like Button -->
              <button
                @click="handleFeedback(true)"
                class="flex flex-col items-center p-4 rounded-lg hover:bg-green-50 transition-colors"
              >
                <SvgIcon icon="entypo:emoji-happy" class="w-12 h-12 text-green-600" />
                <span class="mt-2 text-lg text-green-600">{{ t('common.like') }}</span>
              </button>

              <!-- Dislike Button -->
              <button
                @click="handleFeedback(false)"
                class="flex flex-col items-center p-4 rounded-lg hover:bg-red-50 transition-colors"
              >
                <SvgIcon icon="iconoir:emoji-sad" class="w-12 h-12 text-red-600" />
                <span class="mt-2 text-lg text-red-600">{{ t('common.dislike') }}</span>
              </button>
            </div>
          </div>

          <NButton type="primary" class="mt-8" style="background-color: blue;" @click="showFeedbackForm = false; showProcessCompletion = false; prevStep">
            {{ t('common.go_back') }}
          </NButton>
        </div>
      </template>

      <div class="pt-8 text-center text-gray-500">اعداد وكالة الجودة بالكلية التقنية بجدة - ٢٠٢٤</div>
    </div>
  </div>

</template>
<style scoped>
.feedback-form {
  text-align: center;
  padding: 2rem;
 
  border-radius: 12px;
 
}

.success-message {
  margin-bottom: 2rem;
}

.feedback-actions {
  margin-top: 2rem;
}

button {
  border: none;
  background: none;
  cursor: pointer;
}

button:hover {
  transform: scale(1.05);
  transition: transform 0.2s ease;
}
</style>