<script setup>

import BackButton from "@/components/BackButton.vue";
import {ref} from "vue";
const showDetails = ref(false);
</script>

<template>
  <div class="page-container">
    <BackButton to="/savoir-faire" label="Retour aux savoir-faire" />
    <header class="page-header">
      <h1>Respect des normes de code Python</h1>
    </header>

    <section class="content">
      <div class="box-header-with-tab">
        <h2>Les normes de code en Python</h2>
        <button @click="showDetails = !showDetails" class="details-tab"
                :class="{ active: showDetails }">
          {{ showDetails ? 'Cacher les détails' : 'Et par rapport à l\'école ?' }}
          </button>
      </div>

      <div class="inner-details" v-if="showDetails">
        <h3>Quelles différences avec l'école ?</h3>
        <p>
          Bien que l'on nous ait appris les normes de codage dans tous les langages que nous avons étudié, je n'ai pas
          utilisé énormément Python donc ces normes n'étaient pas naturelles pour moi et j'ai dû les revoir avant de coder
          pour ne pas implémenter mon code un peu "java-style". Le code sera plus souvent lu que réécrit, il est important
          que la syntaxe soit la même pour tout le monde.
        </p>
      </div>

      <p>
        Produire un code fonctionnel est une chose, mais rendre ce code lisible et maintenable
        par d'autres développeurs en est une autre. C'est l'objectif des normes de codage.
      </p>

      <div class="styled-box">
        <h3>La PEP 8 : Le guide de style officiel</h3>
        <p>
          La <strong>PEP 8</strong> est la convention de référence pour l'écriture du code Python.
          Pendant mon stage, j'ai veillé à respecter ces règles essentielles :
        </p>
        <ul>
          <li><strong>Nommage explicite :</strong> Utilisation du <code>snake_case</code> pour les fonctions/variables et du <code>PascalCase</code> pour les classes.</li>
          <li><strong>Indentation :</strong> Utilisation stricte de 4 espaces pour garantir la clarté des blocs de code.</li>
          <li><strong>Espacement :</strong> Aération du code autour des opérateurs et entre les définitions de fonctions pour une lecture fluide.</li>
        </ul>
      </div>

      <div class="styled-box">
        <h3>Documentation et Type Hinting</h3>
        <p>
          Pour faciliter l'utilisation de mes modules par l'équipe, j'ai intégré :
        </p>
        <ul>
          <li><strong>Les Docstrings :</strong> Chaque fonction et classe est documentée pour expliquer son rôle, ses paramètres et ses retours.</li>
          <li><strong>Le Type Hinting :</strong> L'annotation des types <span class="exemple">(ex: <code>def calcul(x: int) -> float</code>)</span> pour sécuriser le développement et améliorer l'autocomplétion.</li>
        </ul>
      </div>

      <div class="styled-box">
        <h3>Pourquoi est-ce important pour mon stage ?</h3>
        <p>
          Mon travail s'inscrit dans le développement de <strong>pyMaBoSS</strong>, un projet open source.
          Le respect de ces normes assure que mes contributions peuvent être relues, testées et
          maintenues par n'est n'importe quel contributeur actuel ou futur, garantissant ainsi la pérennité du module créé.
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>

</style>