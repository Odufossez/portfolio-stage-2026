<script setup>
import BackButton from "@/components/BackButton.vue";
import { ref } from "vue";
import InfoHover from "@/components/InfoHover.vue";
import SourcesSection from "@/components/SourcesSection.vue";
import Trace from "@/components/Trace.vue";

const activeRoot = ref('being-communicant');
</script>

<template>
  <div class="page-container">
    <BackButton to="/savoir-faire" label="Retour aux savoir-faire"/>

    <header class="page-header">
      <h1>Cahier des charges</h1>
    </header>

    <section class="mission-section">
      <div class="tabs-list">
        <button class="tab-item"
                :class="{active: activeRoot === 'being-communicant'}"
                @click="activeRoot='being-communicant'">Communication
        </button>
        <button class="tab-item"
                :class="{active: activeRoot === 'ask-questions'}"
                @click="activeRoot='ask-questions'">Poser des questions
        </button>
        <button class="tab-item"
                :class="{active: activeRoot === 'know-to-synthetize'}"
                @click="activeRoot='know-to-synthetize'">Synthétiser
        </button>
      </div>

      <div class="styled-box mission-content">
        <div v-if="activeRoot === 'being-communicant'">
          <h2>Bien communiquer avec les autres</h2>
          <p>
            La communication est essentielle pour bien comprendre les besoins du projet. 
            Échanger régulièrement avec ses collègues permet de valider les directions prises.
          </p>
          <!-- Ajoutez vos traces ici -->
        </div>

        <div v-if="activeRoot === 'ask-questions'">
          <h2>Poser des questions et les bonnes</h2>
          <p>
            Savoir poser les bonnes questions permet de gagner du temps et d'éviter les malentendus sur les spécifications techniques.
          </p>
          <!-- Ajoutez vos traces ici -->
        </div>

        <div v-if="activeRoot === 'know-to-synthetize'">
          <h2>Savoir comment synthétiser</h2>
          <p>
            La synthèse des besoins permet de transformer des demandes parfois vagues en un cahier des charges précis et réalisable.
          </p>
          <!-- Ajoutez vos traces ici -->
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
</style>
