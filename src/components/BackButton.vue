<template>
  <router-link :to="to" class="back-link">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
    {{ label }}
  </router-link>
</template>

<script setup>
defineProps({
  to: {
    type: String,
    required: true
  },
  label: {
    type: String,
    default: 'Retour au contexte'
  }
});
</script>

<style scoped>
/* Individual styles are already in base.css, 
   but we keep the class for consistent behavior */
</style>
