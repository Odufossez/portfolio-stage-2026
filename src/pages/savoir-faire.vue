<script setup>
import {ref, computed, watch} from 'vue';
import BackButton from "@/components/BackButton.vue";
import {savoirFaire} from '@/data/savoir-faire.js';

const themes = computed(() => savoirFaire.filter(item => item.classification === 'theme'));

// On initialise avec la valeur en session ou le premier thème par défaut
const savedTheme = sessionStorage.getItem('activeSavoirFaireTheme');
const activeThemeId = ref(savedTheme || themes.value[0]?.id);

// Mise à jour de la session lors du changement d'onglet
watch(activeThemeId, (newId) => {
  sessionStorage.setItem('activeSavoirFaireTheme', newId);
});

const activeTheme = computed(() => savoirFaire.find(item => item.id === activeThemeId.value));

function getById(id) {
  return savoirFaire.find(item => item.id === id);
}
</script>

<template>
  <div class="page-container">
    <BackButton to="/home" label="Retour à l'accueil"/>

    <header class="page-header">
      <h1>Savoir-faire généraux</h1>
    </header>

    <section class="content">
      <p>Cette page présente mes savoir-faire généraux acquis et mobilisés durant mon cursus et mon stage. Chaque
        section présente le thème général des savoir-faire présentés dans les sous-pages. Ils sont organisés tel que
        l'on puisse se rendre compte de leur hiérarchie mais seul le dernier niveau de savoir-faire est décrit.
      </p>
      <p>Pour avoir une description de chacun d'entre eux, cliquez sur le titre de la sous rubrique ! </p>
    </section>

    <section class="missions-section">
      <div class="tabs-list">
        <button
            v-for="theme in themes"
            :key="theme.id"
            class="tab-item"
            :class="{ active: activeThemeId === theme.id }"
            @click="activeThemeId = theme.id"
            :style="{
            borderColor: activeThemeId === theme.id ? theme.color : '#e2e8f0',
            color: activeThemeId === theme.id ? theme.color : '#333'
          }"
        >
          {{ theme.title }}
        </button>
      </div>

      <div v-if="activeTheme" class="styled-box theme-content" :style="{ borderColor: activeTheme.color }">
        <h2 :style="{ color: activeTheme.color }">{{ activeTheme.title }}</h2>

        <div class="subs-container" v-if="activeTheme.subs && activeTheme.subs.length">
          <div v-for="subId in activeTheme.subs" :key="subId" class="sub-item">

            <!-- SUB-THEME -->
            <template v-if="getById(subId)?.classification === 'sub-theme'">
              <div class="sub-theme-block">
                <router-link :to="`/savoirfaire-pages/${subId}`" class="sub-theme-link">
                  <h3 class="sub-theme-title">
                    <span
                        v-for="(char, index) in getById(subId).title.split('')"
                        :key="index"
                        class="wave-char"
                        :style="{ animationDelay: `${(subId.length * 0.2) + (index * 0.03)}s` }"
                    >{{ char === ' ' ? '\xa0' : char }}</span>
                  </h3>
                </router-link>
                <div class="roots-list" v-if="getById(subId).subs">
                  <div v-for="rootId in getById(subId).subs" :key="rootId" class="root-item">
                    <span class="root-title">{{ getById(rootId).title }}</span>
                  </div>
                </div>
              </div>
            </template>

            <!-- ROOT (direct child of theme) -->
            <template v-else-if="getById(subId)?.classification === 'root'">
              <div class="root-item direct-root">
                <span class="root-title">{{ getById(subId).title }}</span>
              </div>
            </template>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.missions-section {
  margin-top: 2rem;
}

/* Redefine tab-item specifically for this page to look like encards */
.tabs-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 1rem;
}

.tab-item {
  border-width: 2px;
  border-style: solid;
  border-radius: 8px;
  padding: 10px 16px;
  background-color: var(--surface-card, #ffffff);
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  font-weight: 500;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.tab-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fcfcfc;
}

.tab-item.active {
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  transform: translateY(-1px);
}

.theme-content {
  margin-top: 1rem;
  border-width: 2px;
  border-style: solid;
  border-radius: 8px;
  padding: 20px;
  background-color: var(--surface-card, #ffffff);
}

.subs-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.sub-theme-block {
  background-color: var(--surface-ground, #f8f9fa);
  border-radius: 6px;
  padding: 15px;
  border-left: 4px solid #ccc;
}

.sub-theme-link {
  text-decoration: none;
  color: inherit;
  display: inline-block;
  margin-bottom: 10px;
  padding: 4px 8px;
  margin-left: -8px; /* Align text despite padding */
  border-radius: 6px;
  transition: background-color 0.2s ease;
}

.sub-theme-link:hover {
  background-color: rgba(0, 85, 164, 0.08);
}

.sub-theme-link:hover .sub-theme-title {
  color: #0055A4;
}

.sub-theme-title {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.2rem;
  color: #333;
  transition: color 0.2s ease;
}

.roots-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}

.root-item {
  background-color: #e9ecef;
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 0.95rem;
  color: #495057;
  display: inline-block;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.direct-root {
  background-color: #e2e8f0;
}

.wave-char {
  display: inline-block;
  animation: wave 5s infinite;
  transform-origin: bottom center;
}

@keyframes wave {
  0%, 15%, 100% {
    transform: translateY(0);
  }
  7.5% {
    transform: translateY(-4px) scale(1.05);
  }
}
</style>
