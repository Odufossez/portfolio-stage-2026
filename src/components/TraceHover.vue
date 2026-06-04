<template>
  <span 
    class="trace-trigger"
    ref="hoverTarget"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <slot></slot>
    
    <Teleport to="body">
      <Transition name="fade-scale">
        <div 
          v-if="isHovered" 
          class="hover-trace-container"
          :style="{ 
            top: `${cardPosition.top}px`, 
            left: `${cardPosition.left}px` 
          }"
        >
          <Trace :traceId="id" class="floating-trace" />
        </div>
      </Transition>
    </Teleport>
  </span>
</template>

<script setup>
import { ref } from 'vue';
import Trace from '@/components/Trace.vue';

const props = defineProps({
  id: {
    type: String,
    required: true
  }
});

const isHovered = ref(false);
const hoverTarget = ref(null);
const cardPosition = ref({ top: 0, left: 0 });

const handleMouseEnter = (event) => {
  const rect = event.target.getBoundingClientRect();
  
  // Position the card above the text
  cardPosition.value = {
    top: rect.top + window.scrollY - 10,
    left: rect.left + window.scrollX + (rect.width / 2)
  };
  
  isHovered.value = true;
};

const handleMouseLeave = () => {
  isHovered.value = false;
};
</script>

<style scoped>
.trace-trigger {
  color: #e8803d;
  font-weight: 600;
  cursor: help;
  border-bottom: 2px dotted rgba(232, 128, 61, 0.4);
  transition: all 0.2s ease;
  display: inline-block;
}

.trace-trigger:hover {
  color: #d16b2d;
  border-bottom-color: #d16b2d;
  background-color: rgba(232, 128, 61, 0.05);
}

.hover-trace-container {
  position: absolute;
  z-index: 9999;
  transform: translate(-50%, -100%);
  pointer-events: none;
  max-width: min(420px, 90vw);
  width: auto;
}

.floating-trace {
  margin: 0 !important;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4) !important;
  background-color: #fff !important;
  border: 1px solid #e8803d !important;
}

/* Contraint la taille de l'image dans le popup hover */
:deep(.floating-trace .trace-image) {
  max-height: 34vh;
  max-width: 100%;
  width: auto;
  object-fit: contain;
}

/* Empêche le zoom-overlay dans le hover (pas cliquable) */
:deep(.floating-trace .zoom-overlay) {
  display: none;
}

/* Réduit la légende dans le hover */
:deep(.floating-trace .caption-text) {
  font-size: 0.8rem;
}

/* Transitions */
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
