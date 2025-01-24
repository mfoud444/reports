<template>
  <div class="congratulation-page">
    <div v-if="isSuccess" class="success-message">
      <h1>{{ t('processCompletion.congratulations') }}</h1>
      <p>{{ t('processCompletion.successMessage') }}</p>
      <p>{{ t('processCompletion.thankYou') }}</p>
    </div>
    <div v-else class="failure-message">
      <h1>{{ t('processCompletion.oops') }}</h1>
      <p>{{ t('processCompletion.failureMessage') }}</p>
      <p>{{ t('processCompletion.tryAgain') }}</p>
    </div>

    <!-- Rating Section -->
    <div class="rating-section">
      <p>{{ t('processCompletion.rateExperience') }}</p>
      <div class="rating-buttons">
        <n-button
          type="primary"
          :class="{ active: rating === 'happy' }"
          @click="setRating('happy')"
        >
          {{ t('processCompletion.happy') }}
        </n-button>
        <n-button
          type="error"
          :class="{ active: rating === 'angry' }"
          @click="setRating('angry')"
        >
          {{ t('processCompletion.angry') }}
        </n-button>
      </div>
      <n-button
        type="primary"
        @click="submitRating"
        :disabled="!rating"
      >
        {{ t('processCompletion.submitRating') }}
      </n-button>
    </div>

    <!-- Pop-up Message -->
    <n-modal v-model:show="showPopup">
      <n-card
        style="width: 300px; text-align: center;"
        :title="t('processCompletion.rateYourExperience')"
        :bordered="false"
        size="small"
      >
        <p>{{ t('processCompletion.rateExperience') }}</p>
        <template #footer>
          <n-button type="primary" @click="showPopup = false">
            {{ t('processCompletion.cancel') }}
          </n-button>
        </template>
      </n-card>
    </n-modal>

    <n-button type="primary" @click="goBack">
      {{ t('processCompletion.goBack') }}
    </n-button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { NButton, NModal, NCard } from 'naive-ui';

const router = useRouter();
const route = useRoute();

const isSuccess = ref(true);
const showRatingModal = ref(false); 
const rating = ref<'happy' | 'angry' | null>(null); 

onMounted(() => {
  // Read the success query parameter
  isSuccess.value = route.query.success === 'true';
});

const setRating = (value: 'happy' | 'angry') => {
  rating.value = value;
};

const submitRating = () => {
  // Handle the rating submission (e.g., send to an API or store it)
  console.log('User rating:', rating.value);

  // Show a confirmation message (optional)
  if (rating.value === 'happy') {
    alert('Thank you for your positive feedback! 😊');
  } else {
    alert('We apologize for the inconvenience. We will improve! 😠');
  }

  // Close the modal
  showRatingModal.value = false;
  rating.value = null; // Reset the rating for future use
};

const goBack = () => {
  router.push('/'); // Redirect to the home page or the previous page
};
</script>

<style scoped>
.congratulation-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #f0f2f5;
  padding: 20px;
}

.success-message {
  color: #52c41a;
}

.failure-message {
  color: #ff4d4f;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.rating-buttons {
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
  justify-content: center;
}

.n-button.active {
  border: 2px solid #18a058; /* Green border for active happy button */
}

.n-button[type="error"].active {
  border: 2px solid #d03050; /* Red border for active angry button */
}

.n-button {
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
}

.n-button[type="primary"] {
  background-color: #18a058; /* Green for happy button */
}

.n-button[type="error"] {
  background-color: #d03050; /* Red for angry button */
}
</style>