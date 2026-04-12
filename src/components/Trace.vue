<template>
  <div class="trace-wrapper" v-if="finalTrace">
    <div class="trace-card" @click="openFullScreen">
      <div class="image-container">
        <img :src="finalTrace.image" :alt="finalTrace.caption" class="trace-image">
        <div class="zoom-overlay">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
        </div>
      </div>
      <div class="caption-container">
        <p class="caption-text">
          <template v-if="finalTrace.identification">
            <strong>Trace n {{ finalTrace.identification }} :</strong>
          </template>
          {{ finalTrace.caption }}
        </p>
      </div>
    </div>

    <!-- Full-screen Modal -->
    <Teleport to="body">
      <Transition name="fade">
        <div v-if="isFullScreen" class="fullscreen-overlay" @click.self="closeFullScreen">
          <button class="close-btn" @click="closeFullScreen" aria-label="Fermer">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
          
          <div class="fullscreen-content">
            <img :src="finalTrace.image" :alt="finalTrace.caption" class="fullscreen-image">
            <div class="fullscreen-caption">
              <p>
                <template v-if="finalTrace.identification">
                  <strong>Trace {{ finalTrace.identification }} :</strong>
                </template>
                {{ finalTrace.caption }}
              </p>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { getTrace } from '@/data/traces';

const props = defineProps({
  traceId: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: false
  },
  caption: {
    type: String,
    required: false
  },
  identification: {
    type: [Number, String],
    required: false
  }
});

const isFullScreen = ref(false);

const finalTrace = computed(() => {
  if (props.traceId) {
    return getTrace(props.traceId);
  }
  return {
    image: props.image,
    caption: props.caption,
    identification: props.identification
  };
});

const openFullScreen = () => {
  isFullScreen.value = true;
  document.body.style.overflow = 'hidden';
};

const closeFullScreen = () => {
  isFullScreen.value = false;
  document.body.style.overflow = '';
};

const handleKeyDown = (e) => {
  if (e.key === 'Escape' && isFullScreen.value) {
    closeFullScreen();
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
  document.body.style.overflow = ''; // Ensure overflow is reset
});
</script>

<style scoped>
.trace-wrapper {
  display: inline-block;
  max-width: 100%;
}

.trace-card {
  display: inline-block;
  background-color: transparent;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;
  max-width: 100%;
  margin: 20px 0;
  cursor: pointer;
  position: relative;
}

.trace-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(232, 128, 61, 0.15);
}

.image-container {
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.trace-image {
  max-width: 100%;
  height: auto;
  display: block;
}

.zoom-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: white;
}

.trace-card:hover .zoom-overlay {
  opacity: 1;
}

.caption-container {
  padding: 12px 15px;
  background-color: #fffaf5;
  border-top: 1px solid #fff5e6;
}

.caption-text {
  margin: 0;
  font-size: 0.95rem;
  color: #5c4033;
  line-height: 1.4;
  font-weight: 500;
  text-align: left;
}

/* Fullscreen Styles */
.fullscreen-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
}

.close-btn {
  position: absolute;
  top: 30px;
  right: 30px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 10px;
  z-index: 10001;
  transition: transform 0.2s ease;
}

.close-btn:hover {
  transform: scale(1.1);
  color: #e8803d;
}

.fullscreen-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 90%;
  max-width: 1200px;
}

.fullscreen-image {
  max-width: 100%;
  max-height: calc(100% - 80px);
  object-fit: contain;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
}

.fullscreen-caption {
  margin-top: 20px;
  color: white;
  text-align: center;
  max-width: 800px;
  font-size: 1.1rem;
  line-height: 1.6;
  padding: 0 20px;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
