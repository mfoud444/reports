
<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { NButton } from 'naive-ui';

const router = useRouter();

const isSuccess = ref(true); 

const goBack = () => {
  router.push('/'); 
};
</script>


<template>
    <div class="congratulation-page">
      <div v-if="isSuccess" class="success-message">
        <h1>🎉 Congratulations! 🎉</h1>
        <p>Your process has been completed successfully!</p>
        <p>Thank you for your submission.</p>
      </div>
      <div v-else class="failure-message">
        <h1>😢 Oops! Something went wrong. 😢</h1>
        <p>Your process could not be completed.</p>
        <p>Please try again or contact support.</p>
      </div>
  
      <n-button type="primary" @click="goBack">Go Back</n-button>
    </div>
  </template>
  
  
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
  
  .n-button {
    margin-top: 2rem;
  }
  </style>