<script setup lang="ts">
import { ref } from 'vue';
import { NButton, NSpin } from 'naive-ui';
import { useMessage } from 'naive-ui';

const props = defineProps<{
  onSubmitFeedback: (feedback: { isLiked: boolean }) => void;
  onGoBack: () => void;
  loading?: boolean;
}>();

const message = useMessage();
const isEvaluated = ref(false);
const statistics = ref({
  happy: 0,
  sad: 0
});

const handleFeedback = async (isLiked: boolean) => {
  try {
    // Update statistics before making the network call
    statistics.value[isLiked ? 'happy' : 'sad']++;
    
    // Wait for the feedback submission to complete
    await props.onSubmitFeedback({ isLiked });
    
    // Only update UI state if submission was successful
    isEvaluated.value = true;
    message.success('Feedback submitted successfully!');
  } catch (error: any) {
    // Revert statistics if submission failed
    statistics.value[isLiked ? 'happy' : 'sad']--;
    console.error('Error submitting feedback:', error);
    message.error('Failed to submit feedback. Please try again.');
  }
};
</script>

<template>
  <div class="feedback-form relative">
    <NSpin :show="props.loading">
      <div :class="{ 'opacity-50': props.loading }">
        <div class="success-message">
          <h1 class="text-3xl font-bold text-blue-600">{{ t('common.feedback_required') }}</h1>
          <p class="text-lg text-gray-700 mt-2">{{ t('common.feedback_before_report') }}</p>
        </div>

        <div class="feedback-actions mt-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">{{ t('common.feedback_prompt') }}</h2>
          <div class="flex flex-col items-center">
            <div class="flex justify-center space-x-12 mb-4">
              <!-- Like Button -->
              <button
                @click="handleFeedback(true)"
                class="flex flex-col items-center p-4 rounded-lg hover:bg-green-50 transition-colors relative"
                :class="{ 'opacity-50 cursor-not-allowed': isEvaluated || props.loading }"
                :disabled="isEvaluated || props.loading"
              >
                <SvgIcon icon="entypo:emoji-happy" class="w-16 h-16 text-green-600" />
                <span class="mt-2 text-lg text-green-600">{{ t('common.like') }}</span>
              </button>

              <!-- Dislike Button -->
              <button
                @click="handleFeedback(false)"
                class="flex flex-col items-center p-4 rounded-lg hover:bg-red-50 transition-colors relative"
                :class="{ 'opacity-50 cursor-not-allowed': isEvaluated || props.loading }"
                :disabled="isEvaluated || props.loading"
              >
                <SvgIcon icon="iconoir:emoji-sad" class="w-16 h-16 text-red-600" />
                <span class="mt-2 text-lg text-red-600">{{ t('common.dislike') }}</span>
              </button>
            </div>
          </div>
        </div>

        <NButton 
          type="primary" 
          class="mt-8" 
          @click="onGoBack"
          :disabled="!isEvaluated || props.loading"
          :loading="props.loading"
        >
          {{ t('common.go_back') }}
        </NButton>
      </div>
    </NSpin>
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

.feedback-actions button {
  position: relative;
  transition: all 0.3s ease;
}

.feedback-actions button:not(:disabled):hover {
  transform: scale(1.05);
}

.feedback-actions button:disabled {
  cursor: not-allowed;
}

/* Add styles for loading state */
.n-spin-container {
  min-height: 200px; /* Adjust as needed */
}
</style> 