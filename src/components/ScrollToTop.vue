<template>
  <Transition name="fade">
    <button 
      v-if="isVisible" 
      class="scroll-to-top" 
      @click="scrollToTop"
      aria-label="Retour en haut"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
           stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </button>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);

const checkScroll = () => {
  isVisible.value = window.scrollY > 400;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 45px;
  height: 45px;
  background-color: var(--curie-orange);
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(232, 128, 61, 0.4);
  z-index: 1000;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.scroll-to-top:hover {
  background-color: var(--curie-brown);
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(65, 40, 23, 0.4);
}

/* Transition fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
