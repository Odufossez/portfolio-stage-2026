<script setup>
import BackButton from "@/components/BackButton.vue";
import { ref } from "vue";
import InfoHover from "@/components/InfoHover.vue";
import SourcesSection from "@/components/SourcesSection.vue";
import Trace from "@/components/Trace.vue";
import DetailsButton from "../../components/DetailsButton.vue";

const activeRoot = ref('looking-for-existant');
const showDetails = ref(false);
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
          <div class="box-header-with-tab">
            <h2>Rechercher un projet existant</h2>
            <DetailsButton v-model="showDetails" />
          </div>
          <div class="inner-details" v-if="showDetails">
            <h3>Quelles différences avec l'école ?</h3>
            <p>
              Durant mon cursus, de manière assez générale, les petits projets n'avaient pas de lien entre eux. Cependant,
              les projets plus conséquents, eux, demandaient souvent l'intégration de code existant que nous avions
              développés pendant les petits projets. Il n'était donc pas nécessaire de "réinventer la roue" à chaque projet.
            </p>
            <p>
              Dans le contexte de mon stage, je suis face à une situation similaire sauf que je dois m'inspirer de code trouver
              sur Internet, d'autres projets, parfois sans lien et adapter du code pour ne pas réinventer des algorithmes qui
              existent déjà mais plutôt les adapter à ma situation.
            </p>
          </div>
          <p>
            Avant de coder une nouvelle fonctionnalité, il est crucial de vérifier si elle n'existe pas déjà ou si un projet similaire peut servir de base.
          </p>
          <h3>Étude du dépôt MaBoSS_test</h3>
          <p>
            Dans le cadre de mon stage, j'ai exploré le dépôt GitHub <strong>MaBoSS_test</strong>.
            Cette recherche a été déterminante pour :
          </p>
          <ul>
            <li>Comprendre les problématiques réelles rencontrées par les utilisateurs lors des simulations.</li>
            <li>Identifier quel genre de questions techniques et biologiques étaient posées sur les modèles.</li>
            <li>Définir les besoins prioritaires pour mon propre module en m'appuyant sur ces cas de tests existants.</li>
          </ul>
        </div>

        <div v-if="activeRoot === 'browse-sources'">
          <div class="box-header-with-tab">
            <h2>Parcourir les sources</h2>
            <DetailsButton v-model="showDetails" />
          </div>
         <div class="inner-details" v-if="showDetails">
           <h3>Quelles différences avec l'école ?</h3>
           <p>
             Durant mon cursus, de manière assez générale, les petits projets n'avaient pas de lien entre eux. Cependant,
             les projets plus conséquents, eux, demandaient souvent l'intégration de code existant que nous avions
             développés pendant les petits projets. Il n'était donc pas nécessaire de "réinventer la roue" à chaque projet.
           </p>
           <p>
             Dans le contexte de mon stage, je suis face à une situation similaire sauf que je dois m'inspirer de code trouver
             sur Internet, d'autres projets, parfois sans lien et adapter du code pour ne pas réinventer des algorithmes qui
             existent déjà mais plutôt les adapter à ma situation.
           </p>
         </div>
          <p>
            Savoir lire et comprendre le code source d'un projet existant est une compétence clé pour l'intégration et la maintenance.
          </p>
          <h3>Analyse technique et fonctionnelle</h3>
          <p>
            L'analyse des sources de <strong>MaBoSS_test</strong> m'a permis d'appréhender la structure des données de simulation avant de concevoir mon parser. Cela a facilité :
          </p>
          <ul>
            <li>L'immersion dans la logique interne de MaBoSS.</li>
            <li>La compréhension de la manière dont les résultats sont formatés pour être ensuite traités par Pandas.</li>
            <li>L'assurance que mon développement resterait compatible avec les standards utilisés par la communauté.</li>
          </ul>
        </div>
      </div>
    </section>
    <SourcesSection :ids="['github-maboss-test']"/>
  </div>
</template>

<style scoped>
</style>
