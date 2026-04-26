<script setup>
import BackButton from "@/components/BackButton.vue";
import { ref } from "vue";
import InfoHover from "@/components/InfoHover.vue";
import SourcesSection from "@/components/SourcesSection.vue";
import Trace from "@/components/Trace.vue";

const activeRoot = ref('looking-for-existant');
</script>

<template>
  <div class="page-container">
    <BackButton to="/savoir-faire" label="Retour aux savoir-faire"/>

    <header class="page-header">
      <h1>Se documenter</h1>
    </header>

    <section class="missions-section">
      <div class="tabs-list">
        <button class="tab-item"
                :class="{active: activeRoot === 'looking-for-existant'}"
                @click="activeRoot='looking-for-existant'">Projets existants
        </button>
        <button class="tab-item"
                :class="{active: activeRoot === 'browse-sources'}"
                @click="activeRoot='browse-sources'">Parcourir les sources
        </button>
      </div>

      <div class="styled-box mission-content">
        <div v-if="activeRoot === 'looking-for-existant'">
          <h2>Rechercher un projet existant</h2>
          <p>
            Avant de coder une nouvelle fonctionnalité, il est crucial de vérifier si elle n'existe pas déjà ou si un projet similaire peut servir de base.
          </p>
          <!-- Ajoutez vos traces ici -->
        </div>

        <div v-if="activeRoot === 'browse-sources'">
          <h2>Parcourir les sources</h2>
          <p>
            Savoir lire et comprendre le code source d'un projet existant est une compétence clé pour l'intégration et la maintenance.
          </p>
          <!-- Ajoutez vos traces ici -->
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
</style>
