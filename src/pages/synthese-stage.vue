<script setup>

import BackButton from "@/components/BackButton.vue";
</script>

<template>
<div class="page-container">
  <BackButton to="/home" label="Retour à l'accueil"/>

  <header class="page-header">
    <h1>Synthèse du stage</h1>
  </header>

  <div class="styled-box">
    <p>
      Les savoir-faire mobilisés durant ce stage sont variés, tant dans le langage que dans leur application.
    </p>
    <ul>
      <li>J'ai dû produire de la documentation tant provenant de code en Python qu'en C++ mais aussi des diagrammes UML via Doxygen ou clang-uml.</li>
      <li>Bien que MaBoSS soit en C++, les modules d'exploitation des données de simulation se font via des Jupyter Notebooks et sont donc codés en Python.</li>
      <li>Développer ce module supplémentaire en Python m'a permis de faire de la programmation orientée objet en Python mais aussi de mobiliser mes connaissances sur les tests unitaires.</li>
      <li>Le coeur de ce module relevant du traitement de données, j'ai pu approfondir mes connaissances et compétences des outils Pandas et Numpy.</li>
      <li>J'ai fait mon suivi de projet en suivant une méthode agile.</li>
    </ul>
    <p>
      De manière générale, j'ai beaucoup pris en aisance dans la programmation Python. Bien que je ne sois pas parti de rien, j'ai
      fortement progressé. De même concernant le traitement de données, je n'avais eu qu'une introduction à Pandas et avoir
      pu l'utiliser dans un contexte extérieur à l'école et avec beaucoup des tableaux très grands m'ont permis de mieux saisir son intérêt
      et ses subtilités.
    </p>
    <p>
      De part mon passé en tant qu'apprenti dans l'informatique industrielle, j'avais déjà eu à mener un projet qui demandait
      à ce que je m'organise de manière autonome pour le réaliser, j'ai donc repris ma méthodologie qui avait bien fonctionnée
      déjà à l'époque et qui rappelle une logique de méthode agile.
    </p>
    <p>
      J'ai réalisé ce stage entouré de personnes en master ou en doctorat et il a été très plaisant de réalisé que malgré notre
      différence de niveau d'étude, j'avais beaucoup à leur apporter car même en étant bio-informaticiennes, elles n'avaient pas
      les connaissances et les compétences que ma formation m'a amené à développer. Ainsi, j'avais autant à leur apporter qu'elles
      à me montrer en quoi mes compétences allaient les aider.
    </p>
    <p><b>
      Pour conclure, ce stage m'a fait découvrir une nouvelle manière de faire de l'informatique qui m'était jusqu'à lors
      inconnue. Je trouve la bio-informatique passionnante et ce stage m'a ouvert une nouvelle voie d'orientation que je
      n'aurais pas envisagé sans.
    </b></p>
  </div>


</div>
</template>

<style scoped>

</style>