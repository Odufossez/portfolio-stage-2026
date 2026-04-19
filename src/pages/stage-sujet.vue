<script setup>

import BackButton from "@/components/BackButton.vue";
import {ref} from "vue";
import InfoHover from "../components/InfoHover.vue";

const activeSubject = ref('MaBoSS');
</script>

<template>
  <div class="page-container">
    <BackButton to="/contexte-sujet"/>
    <header class="page-header">
      <h1>Présentation des attendus</h1>
    </header>

    <section class="missions-section">
      <div class="tabs-list">
        <button class="tab-item"
                :class="{active: activeSubject === 'MaBoSS'}"
                @click="activeSubject = 'MaBoSS'">MaBoSS
        </button>
        <button class="tab-item"
                :class="{active: activeSubject === 'pyMaboss'}"
                @click="activeSubject = 'pyMaboss'">pyMaBoSS
        </button>

      </div>
      <div class="styled-box mission-content">
        <div v-if="activeSubject === 'MaBoSS'">
          <h2>MaBoSS</h2>
          <p>
            Concernant l'application opensource
            <InfoHover id="maboss">MaBoSSS</InfoHover>
            , l'objectif est d'avoir une
            documentation complète de l'application qui soit consultable par toustes. Pour cette partie du sujet il faut
            donc que je :
          </p>
          <ul>
            <li>
              comprenne l'application et le lien entre ses classes,
            </li>
            <li>
              rédige la documentation des fonctions, des classes et des membres de classes,
            </li>
            <li>
              conçoive les
              <InfoHover id="uml">diagrammes UML</InfoHover>
              qui permettront de faciliter la compréhension
              de l'architecture globale de l'application,
            </li>
            <li>
              trouve une solution d'hébergement la documentation.
            </li>
          </ul>
          <p>
            Je n'ai pas de contraintes sur les moyens que j'utilise pour réaliser ces tâches.
          </p>
        </div>
        <div v-if="activeSubject === 'pyMaboss'">
          <h2>pyMaBoSS</h2>
          <p>
            Concernant
            <InfoHover id="pymaboss">pyMaBoSS</InfoHover>
            , l'objectif est de coder un module permettant
            à l'utilisateur de poser une question sur les résultats d'une simulation voire même plusieurs à termes. Ces
            questions sont posées en langage formel, que je dois établir. Pour cette partie du sujet il faut donc que je :
          </p>
          <ul>
            <li>
              établisse le cahier des charges, c'est à dire l'ensemble des fonctionnalités désirées,
            </li>
            <li>
              implémente ces fonctionnalités,
            </li>
            <li>
              effectue les tests pour vérifier que le module fonctionne correctement,
            </li>
            <li>
              délivre les documentations utilisateur et codeur .
            </li>
          </ul>
          <p>
            Cette partie du sujet est réalisée en Python.
          </p>
        </div>

      </div>
    </section>

  </div>
</template>

<style scoped>

ul {
  padding-left: 20px;
}

li {
  margin-bottom: 15px;
  line-height: 1.6;
}

</style>