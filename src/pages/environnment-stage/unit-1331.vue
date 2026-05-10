<script setup>

import BackButton from "@/components/BackButton.vue";
import SourcesSection from "@/components/SourcesSection.vue";
</script>

<template>
  <div class="page-container">
    <BackButton to="/contexte-stage" />

    <header class="page-header" style="display: flex; align-items: center; gap: 20px; margin-bottom: 40px;">
      <h1 style="margin-bottom: 0;">L'Unité 1331</h1>
      <router-link to="/members" class="btn btn-primary">Voir les membres</router-link>
    </header>

    <div class="styled-box">
      <h2>L'Unité d'Oncologie Computationnelle</h2>
      <p>
        Mon stage s'est déroulé au sein de l'Unité d'Oncologie Computationnelle (U1331) de l'Institut Curie.
        Cette unité étudie les différents aspects de la pathologie cancéreuse et de ses traitements en s'intéressant
        aux mécanismes moléculaires et cellulaires sous-jacents : l’initiation (estimation des risques de cancer, prise
        en compte des facteurs génétiques et non génétiques, optimisation des stratégies de suivi/dépistage et
        d’intervention), le développement et la progression tumorale (inférence et modélisation des réseaux de gènes et
        protéines impliqués, analyse des phénotypes par imagerie), et l’amélioration des stratégies thérapeutiques
        (diagnostic, pronostic, optimisation des stratégies pharmacologiques, conception et analyse d’essais cliniques,
        identification de cibles thérapeutiques, crible virtuel de molécules thérapeutiques).
      </p>
      <p>
        Les projets sont conduits par des équipes interdisciplinaires, alliant biologistes et cliniciens,
        épidémiologistes, mathématiciens, statisticiens, physiciens et informaticiens. Ils comprennent toujours une
        combinaison d’approches expérimentales et théoriques, qui s’enchaînent en des cycles itératifs de la biologie
        expérimentale et la clinique aux modèles mathématiques et inversement, menant in fine à des modèles validés,
        explicatifs et prédictifs. Ils s’appuient sur les nouvelles technologies à haut-débit aux niveaux moléculaire et
        cellulaire (séquençage de nouvelle génération, analyses cellule unique, cartographie spatiale, spectrométrie,
        phénotypage cellulaire, criblage de médicaments...) et utilisent des méthodes innovantes d’intégration de
        données, de biologie des systèmes, d‘analyse statistique, d’intelligence artificielle , d’étude de la
        complexité, de modélisation de réseau, de criblage virtuel et d’analyse d’images. Une des caractéristiques
        discriminantes de nos approches réside dans l’intégration de données en grande dimension (de dizaines de
        milliers à des millions de variables) et de nature multi-niveaux et multi-échelles, aussi bien en matière
        d’espace (de la molécule à la population, en passant par la cellule, le tissu, l’organe et l’individu) que de
        temps.
      </p>
    </div>

    <div class="styled-box">
      <h2>L'équipe SYSBIO</h2>
      <p>
      La recherche se concentre sur le décryptage des déterminants moléculaires du cancer, avec pour objectif de fournir
      les connaissances nécessaires pour améliorer la prise en charge des patients. Elle repose sur des analyses de
      données multi-omiques de haute dimension, caractérisant les tumeurs à différents niveaux, ainsi que sur des
      approches innovantes d'intelligence artificielle et de modélisation de réseaux biologiques. L'institut Curie offre
      un cadre idéal pour atteindre ces objectifs, grâce aux nombreuses collaborations possibles avec des biologistes et
      cliniciens, ainsi qu'à l'accès à un plateau technique de pointe. Nous sommes également engagés dans de nombreuses
      collaborations nationales et internationales, notamment avec des laboratories en Espagne, Allemagne, Italie,
      Norvège, Pays-Bas, États-Unis et Japon. De plus, nous développons des logiciels disponibles publiquement sur le
      répertoire GitHub de l'équipe : <a href="https://github.com/sysbio-curie">https://github.com/sysbio-curie</a>.
      </p>
    </div>

    <SourcesSection :ids="['u1331', 'sysbio']" />


  </div>
</template>

<style scoped>
</style>