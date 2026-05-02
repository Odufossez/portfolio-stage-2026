<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { getTeamMember } from '@/data/team';
import TeamCard from '@/components/TeamCard.vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  }
});

const isHovered = ref(false);
const triggerRef = ref(null);
const cardPosition = ref({ top: 0, left: 0 });

const member = computed(() => getTeamMember(props.name));

const isTouchDevice = () => {
  return ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
};

const handleMouseEnter = (event) => {
  if (!member.value || isTouchDevice()) return;
  
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
  if (!member.value) return;
  
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
    class="colleague-trigger"
    ref="triggerRef"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @click="handleClick"
  >
    <slot></slot>
    
    <Teleport to="body">
      <Transition name="fade-scale">
        <div 
          v-if="isHovered && member" 
          class="hover-card-container"
          :style="{ 
            top: `${cardPosition.top}px`, 
            left: `${cardPosition.left}px` 
          }"
        >
          <TeamCard
            :name="member.name"
            :description="member.description"
            :photo="member.photo"
            :relationship="member.relationship"
            class="mini-card"
          />
        </div>
      </Transition>
    </Teleport>
  </span>
</template>

<style scoped>
.colleague-trigger {
  color: #e8803d;
  font-weight: 600;
  cursor: help;
  border-bottom: 2px dotted rgba(232, 128, 61, 0.4);
  transition: all 0.2s ease;
  display: inline-block;
}

.colleague-trigger:hover {
  color: #d16b2d;
  border-bottom-color: #d16b2d;
  background-color: rgba(232, 128, 61, 0.05);
}

.hover-card-container {
  position: absolute;
  z-index: 9999;
  transform: translate(-50%, -100%);
  pointer-events: none; /* Avoid flickering if mouse moves over the card */
  width: 400px; /* Adjust width for the mini-card */
  max-width: 90vw;
}

.mini-card {
  margin-bottom: 0 !important;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3) !important;
  background-color: #2c363f !important; /* Slightly darker than default TeamCard */
  border-width: 3px !important;
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
