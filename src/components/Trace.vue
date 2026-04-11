<template>
  <div class="trace-card">
    <div class="image-container">
      <img :src="image" :alt="caption" class="trace-image">
    </div>
    <div class="caption-container">
      <p class="caption-text">{{ caption }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    required: true
  },
  caption: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.trace-card {
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #f0f0f0;
  max-width: 100%;
  margin: 10px;
}

.trace-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(232, 128, 61, 0.15); /* Suble hint of your orange theme */
}

.image-container {
  width: 100%;
  height: auto;
  min-height: 200px;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
}

.trace-image {
  max-width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.caption-container {
  padding: 15px;
  background-color: #fffaf5; /* Very light orange tint */
  border-top: 1px solid #fff5e6;
}

.caption-text {
  margin: 0;
  font-size: 0.95rem;
  color: #5c4033;
  line-height: 1.4;
  font-weight: 500;
  text-align: center;
}
</style>
