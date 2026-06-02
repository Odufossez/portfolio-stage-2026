<template>
  <div class="trace-wrapper" v-if="finalTrace">
    <div class="trace-card" @click="openFullScreen">
      <div class="image-container">
        <img :src="finalTrace.image" :alt="finalTrace.caption" class="trace-image">
        <div class="zoom-overlay">
          <!-- Magnifying glass + icon -->
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            <line x1="11" y1="8" x2="11" y2="14"></line>
            <line x1="8" y1="11" x2="14" y2="11"></line>
          </svg>
        </div>
      </div>
      <div class="caption-container">
        <p class="caption-text">
          <template v-if="finalTrace.identification">
            <strong>Trace n°{{ finalTrace.identification }} :</strong>
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
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <!-- Zoom controls -->
          <div class="zoom-controls">
            <button class="zoom-btn" @click.stop="zoomIn" aria-label="Zoom avant" title="Zoom avant">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                <line x1="11" y1="8" x2="11" y2="14"></line>
                <line x1="8" y1="11" x2="14" y2="11"></line>
              </svg>
            </button>
            <span class="zoom-level">{{ Math.round(zoomScale * 100) }}%</span>
            <button class="zoom-btn" @click.stop="zoomOut" aria-label="Zoom arrière" title="Zoom arrière">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                <line x1="8" y1="11" x2="14" y2="11"></line>
              </svg>
            </button>
            <button class="zoom-btn zoom-reset" @click.stop="resetZoom" title="Réinitialiser" v-if="zoomScale !== 1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                <path d="M3 3v5h5"></path>
              </svg>
            </button>
          </div>

          <div class="fullscreen-content" :class="{ 'side-by-side': isSideBySide }">
            <!-- Zoomable image area -->
            <div
              class="image-zoom-area"
              @wheel.prevent="onWheel"
              @mousedown="onDragStart"
              :style="{ cursor: zoomScale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }"
            >
              <img
                ref="fullscreenImgEl"
                :src="finalTrace.image"
                :alt="finalTrace.caption"
                class="fullscreen-image"
                :style="zoomedImageStyle"
                @load="onFullscreenImageLoad"
                draggable="false"
              >
            </div>
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
  traceId: { type: String, required: false },
  image:   { type: String, required: false },
  caption: { type: String, required: false },
  identification: { type: [Number, String], required: false }
});

// ── State ──────────────────────────────────────────────
const isFullScreen  = ref(false);
const isSideBySide  = ref(false);
const fullscreenImgEl = ref(null);

// Zoom
const zoomScale = ref(1);
const zoomMin   = 0.5;
const zoomMax   = 4;
const zoomStep  = 0.25;
const translateX = ref(0);
const translateY = ref(0);

// Drag
const isDragging  = ref(false);
const dragStart   = ref({ x: 0, y: 0 });

// ── Data ───────────────────────────────────────────────
const finalTrace = computed(() => {
  if (props.traceId) return getTrace(props.traceId);
  return { image: props.image, caption: props.caption, identification: props.identification };
});

// ── Side-by-side logic ────────────────────────────────
// Active si : (image portrait OU légende longue ≥ 30 mots) ET largeur écran > 700px
const onFullscreenImageLoad = () => {
  if (!fullscreenImgEl.value) return;
  const img = fullscreenImgEl.value;

  // Side-by-side uniquement pour les images portrait (plus hautes que larges)
  // Les images paysage (larges) restent en colonne pour occuper toute la largeur
  const isPortrait   = img.naturalHeight / img.naturalWidth > 1.1;
  const isWideScreen = window.innerWidth > 700;

  isSideBySide.value = isWideScreen && isPortrait;
};

// ── Zoom ──────────────────────────────────────────────
const zoomedImageStyle = computed(() => ({
  transform: `scale(${zoomScale.value}) translate(${translateX.value / zoomScale.value}px, ${translateY.value / zoomScale.value}px)`,
  transformOrigin: 'center center',
  transition: isDragging.value ? 'none' : 'transform 0.2s ease',
}));

const clampZoom = (val) => Math.min(zoomMax, Math.max(zoomMin, val));

const zoomIn  = () => { zoomScale.value = clampZoom(zoomScale.value + zoomStep); };
const zoomOut = () => {
  zoomScale.value = clampZoom(zoomScale.value - zoomStep);
  if (zoomScale.value <= 1) resetTranslate();
};
const resetZoom      = () => { zoomScale.value = 1; resetTranslate(); };
const resetTranslate = () => { translateX.value = 0; translateY.value = 0; };

const onWheel = (e) => {
  const delta = e.deltaY < 0 ? zoomStep : -zoomStep;
  zoomScale.value = clampZoom(zoomScale.value + delta);
  if (zoomScale.value <= 1) resetTranslate();
};

// ── Drag ──────────────────────────────────────────────
const onDragStart = (e) => {
  if (zoomScale.value <= 1) return;
  isDragging.value = true;
  dragStart.value = { x: e.clientX - translateX.value, y: e.clientY - translateY.value };
  window.addEventListener('mousemove', onDragMove);
  window.addEventListener('mouseup', onDragEnd);
};

const onDragMove = (e) => {
  if (!isDragging.value) return;
  translateX.value = e.clientX - dragStart.value.x;
  translateY.value = e.clientY - dragStart.value.y;
};

const onDragEnd = () => {
  isDragging.value = false;
  window.removeEventListener('mousemove', onDragMove);
  window.removeEventListener('mouseup', onDragEnd);
};

// ── Modal open/close ──────────────────────────────────
const openFullScreen = () => {
  isFullScreen.value = true;
  isSideBySide.value = false;
  resetZoom();
  document.body.style.overflow = 'hidden';
};

const closeFullScreen = () => {
  isFullScreen.value = false;
  document.body.style.overflow = '';
  resetZoom();
};

const handleKeyDown = (e) => {
  if (!isFullScreen.value) return;
  if (e.key === 'Escape') closeFullScreen();
  if (e.key === '+' || e.key === '=') zoomIn();
  if (e.key === '-') zoomOut();
  if (e.key === '0') resetZoom();
};

onMounted(() => window.addEventListener('keydown', handleKeyDown));
onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
  window.removeEventListener('mousemove', onDragMove);
  window.removeEventListener('mouseup', onDragEnd);
  document.body.style.overflow = '';
});
</script>

<style scoped>
.trace-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10px 0;
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
  background-color: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: white;
  gap: 8px;
  flex-direction: column;
}

.zoom-overlay::after {
  content: 'Agrandir';
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  opacity: 0.9;
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

/* ── Fullscreen overlay ── */
.fullscreen-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.92);
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 50%;
  color: white;
  cursor: pointer;
  padding: 10px;
  z-index: 10001;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-btn:hover {
  background: rgba(232, 128, 61, 0.3);
  border-color: #e8803d;
  transform: scale(1.1);
  color: #e8803d;
}

/* ── Zoom controls ── */
.zoom-controls {
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 30px;
  padding: 6px 14px;
  z-index: 10001;
}

.zoom-btn {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 4px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.zoom-btn:hover {
  background: rgba(232, 128, 61, 0.3);
  color: #e8803d;
}

.zoom-reset {
  margin-left: 4px;
  padding-left: 8px;
  border-left: 1px solid rgba(255,255,255,0.2);
}

.zoom-level {
  color: white;
  font-size: 0.8rem;
  font-weight: 600;
  min-width: 42px;
  text-align: center;
  letter-spacing: 0.03em;
}

/* ── Content layout ── */
.fullscreen-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 95vw;
  max-width: 1400px;
  max-height: 90vh;
}

.fullscreen-content.side-by-side {
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 40px;
  max-width: 1400px;
  height: auto;
  max-height: 90vh;
}

/* ── Zoomable image area ── */
.image-zoom-area {
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-height: 88vh;
  border-radius: 6px;
}

.fullscreen-content.side-by-side .image-zoom-area {
  max-width: 68%;
  flex-shrink: 0;
}

.fullscreen-image {
  max-width: 100%;
  max-height: 85vh;
  object-fit: contain;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  user-select: none;
  will-change: transform;
}

.fullscreen-content.side-by-side .fullscreen-image {
  max-height: 86vh;
}

/* ── Caption ── */
.fullscreen-caption {
  margin-top: 16px;
  color: rgba(255,255,255,0.9);
  text-align: center;
  max-width: 800px;
  font-size: 1rem;
  line-height: 1.6;
  padding: 0 20px;
}

.fullscreen-content.side-by-side .fullscreen-caption {
  margin-top: 0;
  text-align: left;
  max-width: 340px;
  min-width: 180px;
  flex-shrink: 0;
  font-size: 0.95rem;
}

/* ── Transitions ── */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
