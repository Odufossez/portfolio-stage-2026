<template>
  <div class="team-card">
    <div class="photo-container">
      <img :src="photo" :alt="name" class="member-photo" v-if="photo">
      <div class="photo-placeholder" v-else>
        <span>{{ name.charAt(0) }}</span>
      </div>
    </div>
    
    <div class="info-container">
      <div class="header-row">
        <h3 class="member-name">{{ name }}</h3>
        
        <!-- Icône de relation avec infobulle -->
        <div class="relationship-status" :class="relationship">
          <div class="icon-wrapper">
            <template v-if="relationship === 'tutor'">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
            </template>
            <template v-else-if="relationship === 'close'">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"></path><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"></path><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"></path><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"></path></svg>
            </template>
            <template v-else>
              <span class="none-icon">aA</span>
            </template>
          </div>
          <span class="tooltip">{{ tooltipText }}</span>
        </div>
      </div>
      
      <p class="member-description">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  photo: {
    type: String,
    required: false,
    default: ''
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  relationship: {
    type: String,
    required: false,
    default: 'none',
    validator: (value) => ['none', 'tutor', 'close'].includes(value)
  }
});

const tooltipText = computed(() => {
  switch (props.relationship) {
    case 'tutor': return 'Mon tuteur ou co-tuteur';
    case 'close': return 'Interaction fréquente';
    default: return "Peu d'interaction";
  }
});
</script>

<style scoped>
.team-card {
  display: flex;
  background-color: #333f48; /* Gris sombre type Curie */
  border: 2px solid #e8803d; /* Orange Curie */
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  align-items: center;
  gap: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  position: relative;
}

.team-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.photo-container {
  flex-shrink: 0;
}

.member-photo {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.photo-placeholder {
  width: 120px;
  height: 120px;
  background-color: #4a5a67;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  font-weight: bold;
}

.info-container {
  flex-grow: 1;
}

.header-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
}

.member-name {
  color: #fffaf5; /* Crème clair pour contraste */
  font-size: 1.8rem;
  font-weight: 800;
  margin: 0;
  line-height: 1.2;
}

.relationship-status {
  position: relative;
  cursor: help;
  color: #e8803d;
}

.icon-wrapper {
  background-color: rgba(255, 255, 255, 0.05);
  padding: 8px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;
}

.relationship-status:hover .icon-wrapper {
  background-color: rgba(255, 255, 255, 0.15);
}

.none-icon {
  font-size: 1rem;
  font-weight: 900;
  letter-spacing: -1px;
}

/* Style de l'infobulle */
.tooltip {
  position: absolute;
  bottom: 120%;
  right: 0;
  background-color: #1a1a1a;
  color: #fff;
  padding: 6px 12px;
  border-radius: 6px;
  white-space: nowrap;
  font-size: 0.85rem;
  font-weight: 600;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  z-index: 10;
}

/* Triangle de l'infobulle */
.tooltip::after {
  content: "";
  position: absolute;
  top: 100%;
  right: 12px;
  border-width: 6px;
  border-style: solid;
  border-color: #1a1a1a transparent transparent transparent;
}

.relationship-status:hover .tooltip {
  opacity: 1;
  visibility: visible;
  transform: translateY(-5px);
}

.member-description {
  color: #d1d9e0; /* Gris clair bleuté */
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;
  text-align: left;
}

@media (max-width: 600px) {
  .team-card {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }
  
  .header-row {
    flex-direction: column-reverse;
    align-items: center;
    gap: 10px;
  }
  
  .tooltip {
    right: 50%;
    transform: translateX(50%);
  }
  
  .tooltip::after {
    right: 50%;
    margin-right: -6px;
  }
}
</style>
