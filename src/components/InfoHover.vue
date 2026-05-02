<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { getInfobulle } from '@/data/infobulles';
import InfoCard from '@/components/InfoCard.vue';

const props = defineProps({
  id: {
    type: String,
    required: true
  }
});

const isHovered = ref(false);
const cardPosition = ref({ top: 0, left: 0 });
const triggerRef = ref(null);

const info = computed(() => getInfobulle(props.id));

const isTouchDevice = () => {
  return ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
};

const handleMouseEnter = (event) => {
  if (!info.value || isTouchDevice()) return;
  
  const rect = event.target.getBoundingClientRect();
  cardPosition.value = {
    top: rect.top + window.scrollY - 10,
    left: rect.left + window.scrollX + (rect.width / 2)
  };
  isHovered.value = true;
};

const handleMouseLeave = () => {
  if (isTouchDevice()) return;
  isHovered.value = false;
};

const handleClick = (event) => {
  if (!info.value) return;
  
  if (isHovered.value) {
    isHovered.value = false;
  } else {
    const rect = event.target.getBoundingClientRect();
    cardPosition.value = {
      top: rect.top + window.scrollY - 10,
      left: rect.left + window.scrollX + (rect.width / 2)
    };
    isHovered.value = true;
  }
};

const handleClickOutside = (event) => {
  if (isHovered.value && triggerRef.value && !triggerRef.value.contains(event.target)) {
    isHovered.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
  document.addEventListener('touchstart', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
  document.removeEventListener('touchstart', handleClickOutside);
});
</script>

<template>
  <span 
    class="info-trigger"
    ref="triggerRef"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @click="handleClick"
  >
    <slot></slot>
    
    <Teleport to="body">
      <Transition name="fade-scale">
        <div 
          v-if="isHovered && info" 
          class="hover-card-container"
          :style="{ 
            top: `${cardPosition.top}px`, 
            left: `${cardPosition.left}px` 
          }"
        >
          <InfoCard
            :title="info.title"
            :content="info.content"
          />
        </div>
      </Transition>
    </Teleport>
  </span>
</template>

<style scoped>
.info-trigger {
  color: var(--curie-green);
  font-weight: 600;
  cursor: help;
  border-bottom: 2px dotted var(--curie-green);
  transition: all 0.2s ease;
  display: inline-block;
}

.info-trigger:hover {
  color: #3d8b40;
  background-color: var(--curie-green-soft);
}

.hover-card-container {
  position: absolute;
  z-index: 9999;
  transform: translate(-50%, -100%);
  pointer-events: none;
  width: auto;
  min-width: 250px;
}

/* Transitions matching colleague hover for consistency */
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.25s cubic-bezier(0.2, 1, 0.3, 1);
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: translate(-50%, -90%) scale(0.95);
}
</style>
