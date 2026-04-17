<script setup>
import {ref} from 'vue';
import BackButton from "@/components/BackButton.vue";
import InfoHover from "@/components/InfoHover.vue";

const showDetails = ref(false);
const showDetailspy = ref(false);
</script>

<template>
  <div class="page-container">
    <BackButton to="/contexte-sujet"/>
    <header class="page-header">
      <h1>Présentation de l'existant</h1>
    </header>

    <div class="styled-box">
      <div class="box-header-with-tab">
        <h2>MaBoSS</h2>
        <button @click="showDetails = !showDetails" class="details-tab" :class="{ active: showDetails }">
          {{ showDetails ? 'Cacher les détails' : 'Comment ça marche ?' }}
        </button>
      </div>

      <p>
        MaBoss signifie : <b>Markovian Boolean Stochastic Simulator</b>. C'est un outil de simulation
        <InfoHover id="stochastique">stochastique</InfoHover>
        qui permet de simuler l'influence de certaines molécules
        sur des cellules.
      </p>

      <Transition name="expand">
        <div v-if="showDetails" class="details-content">
          <div class="inner-details">
            <h3>Principe de fonctionnement</h3>
            <p>
              MaBoSS utilise des modèles booléens pour représenter les interactions entre gènes et protéines.
              Chaque "nœud" du système représente un vecteur composé de diverses protéines/hormones... dont chaque élément
              est soit actif (1) soit inactif (0). Ce vecteur booléen représente alors en soi un état qui peut avoir un
              nom s'il est caractérisé, soit est défini par les éléments actifs de son vecteur les uns à la suite des autres.
            </p>
            <p class="exemple">
              <b>Exemple</b> : un vecteur qui a trois composant A, B et C mais seulement A et B d'actif sera
              représenté : A -- B.
            </p>
            <ul>
              <li><strong>Modèle de Markov</strong> : L'état futur du système ne dépend que de son état présent.</li>
              <li><strong>Simulation de Gillespie</strong> : Un algorithme utilisé pour simuler l'évolution temporelle
                des réactions chimiques.
              </li>
              <li><strong>Probabilités</strong> : MaBoSS calcule les probabilités d'atteindre tel ou tel état
                Phénotypique (ex: survie, mort cellulaire).
              </li>
            </ul>
          </div>
        </div>
      </Transition>

      <h3>L'existant</h3>
      <p>
        MaBoSS est un logiciel déjà fonctionnel et déjà utilisé depuis plusieurs années par de nombreux chercheurs et
        chercheuses.
        On peut constater sa mention dans certains papiers scientifiques comme ceux-ci :
        <a href="https://pubmed.ncbi.nlm.nih.gov/22932419/" target="_blank">Continuous time Boolean modeling for
          biological signaling</a> ou encore
        <a href="https://pubmed.ncbi.nlm.nih.gov/28881959/" target="_blank">MaBoSS 2.0: an environment for stochastic
          Boolean modeling</a>.
      </p>
      <h3>Ce qu'il manque</h3>
      <p>
        Malheureusement, MaBoSS n'a pas un code très documenté. Il y a des milliers lignes, réparties dans plein de
        classe et de fichiers
        mais aucunes n'est commenté pour expliquer son rôle ou son fonctionnement. Également, il n'y a pas non plus de
        <InfoHover id="uml">diagramme UML</InfoHover>
        de l'application ce qui rend difficile la compréhension de son architecture.
      </p>
    </div>

    <div class="styled-box">
      <div class="box-header-with-tab">
        <h2>pyMaboss</h2>
        <button @click="showDetailspy = !showDetailspy" class="details-tab" :class="{ active: showDetailspy }">
          {{ showDetailspy ? 'Cacher les détails' : 'Comment ça marche ?' }}
        </button>
      </div>

      <p>
        pyMaboss est un outil open-source de simulation de cellules qui utilise les résultats de simulation via une
        interface Python pour pouvoir exploiter graphiquement les résultats via un Notebook Jupyter par exemple.
      </p>

      <Transition name="expand">
        <div v-if="showDetailspy" class="details-content">
          <div class="inner-details">
            <h3>Principe de fonctionnement</h3>

          </div>
        </div>
      </Transition>

      <h3>L'existant</h3>
      <p>
        pyMaboss est un outil largement utilisé, avec de nombreux exemples.
      </p>


      <h3>Ce qu'il manque</h3>
      Cependant, ses fonctionnalités actuelles font que les chercheurs doivent simuler, récupérer, lire et exploiter
      les résultats eux même, ce qui rend le travail très long.

    </div>

  </div>
</template>

<style scoped>
.box-header-with-tab {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.2rem;
}

.box-header-with-tab h2 {
  margin-bottom: 0;
}

.details-tab {
  background-color: var(--curie-box-border);
  border: none;
  padding: 6px 15px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--curie-brown-soft);
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: -5px;
}

.details-tab:hover {
  background-color: #ffd8b3;
  color: var(--curie-orange);
}

.details-tab.active {
  background-color: var(--curie-orange);
  color: white;
}

.details-content {
  overflow: hidden;
}

.inner-details {
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  padding: 15px;
  margin: 15px 0;
  border: 1px dashed var(--curie-box-border);
}

.inner-details h3 {
  font-size: 1rem;
  color: var(--curie-brown);
  margin-bottom: 10px;
}

.inner-details ul {
  padding-left: 20px;
  margin-top: 10px;
}

.inner-details li {
  margin-bottom: 8px;
  font-size: 0.95rem;
}

/* Transitions */
.expand-enter-active,
.expand-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  max-height: 500px;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  max-height: 0;
  transform: translateY(-10px);
}
</style>