<template>
  <nav class="section-nav">
    <div class="nav-container">
      <button 
        v-for="section in sections" 
        :key="section.id" 
        @click="scrollToSection(section.id)"
        class="nav-btn"
        :class="{ 'is-active': activeSectionId === section.id }"
      >
        <span class="btn-text">{{ section.label }}</span>
        <div class="active-indicator"></div>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  sections: {
    type: Array,
    required: true,
  }
});

const activeSectionId = ref(props.sections[0]?.id || '');
const offset = 120; // Scroll offset to account for navbar
let observer = null;

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - (offset - 10);

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

const setupObserver = () => {
  const options = {
    root: null,
    rootMargin: '-15% 0px -75% 0px', // Detects when section is in the upper part of the viewport
    threshold: 0
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeSectionId.value = entry.target.id;
      }
    });
  }, options);

  props.sections.forEach((section) => {
    const el = document.getElementById(section.id);
    if (el) observer.observe(el);
  });
};

onMounted(() => {
  setupObserver();
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<style scoped>
.section-nav {
  position: sticky;
  top: 70px; /* Sits below the main NavBar (60px + buffer) */
  z-index: 100;
  margin-bottom: 30px;
  background-color: rgba(255, 250, 245, 0.95);
  backdrop-filter: blur(8px);
  padding: 10px 0;
  border-bottom: 1px solid rgba(232, 128, 61, 0.2);
  transition: all 0.3s ease;
}

.nav-container {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
  max-width: 900px;
  margin: 0 auto;
}

.nav-btn {
  background: none;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;
  color: #5c4033;
  font-weight: 600;
  font-size: 0.95rem;
  border-radius: 8px;
}

.nav-btn:hover, .nav-btn.is-active {
  background-color: rgba(232, 128, 61, 0.1);
  color: #e8803d;
}

.active-indicator {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 3px;
  background-color: #e8803d;
  transition: width 0.3s ease;
  border-radius: 2px;
}

.nav-btn:hover .active-indicator, 
.nav-btn.is-active .active-indicator {
  width: 70%;
}

@media (max-width: 600px) {
  .nav-container {
    gap: 5px;
  }
  
  .nav-btn {
    padding: 6px 10px;
    font-size: 0.85rem;
  }
  
  .section-nav {
    top: 60px;
  }
}
</style>
