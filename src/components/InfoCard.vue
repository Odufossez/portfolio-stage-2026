<template>
  <div class="info-card">
    <div class="info-header">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="info-icon">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
      </svg>
      <h3 class="info-title">{{ title }}</h3>
    </div>
    <p class="info-content">{{ content }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
.info-card {
  background-color: #2c363f;
  border: 2px solid var(--curie-green);
  border-radius: 10px;
  padding: 15px;
  color: #fff;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  max-width: 300px;
}

.info-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
  color: var(--curie-green);
}

.info-icon {
  flex-shrink: 0;
}

.info-title {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: 0.5px;
}

.info-content {
  font-size: 0.95rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  text-align: left; /* Tooltips usually look better left-aligned */
}
</style>
