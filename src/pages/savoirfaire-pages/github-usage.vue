<script setup>
import BackButton from "@/components/BackButton.vue";
import {ref} from "vue";
import InfoHover from "@/components/InfoHover.vue";
import SourcesSection from "@/components/SourcesSection.vue";
import Trace from "@/components/Trace.vue";

const activeRoot = ref('branches');
</script>

<template>
  <div class="page-container">
    <BackButton to="/savoir-faire" label="Retour aux savoir-faire"/>

    <header class="page-header">
      <h1>Utilisation de GitHub</h1>
    </header>

    <section class="mission-section">
      <div class="tabs-list">
        <button class="tab-item"
                :class="{active: activeRoot === 'branches'}"
                @click="activeRoot='branches'">Branches
        </button>
        <button class="tab-item"
                :class="{active: activeRoot === 'pull-requests'}"
                @click="activeRoot='pull-requests'">Pull Requests
        </button>
        <button class="tab-item"
                :class="{active: activeRoot === 'fork'}"
                @click="activeRoot='fork'">Fork
        </button>
        <button class="tab-item" :class="{active: activeRoot === 'commits'}"
                @click="activeRoot='commits'">Commits de qualité
        </button>
      </div>

      <div class="styled-box mission-content">
        <div v-if="activeRoot === 'branches'">
          <h2>Branches</h2>
          <h3>Qu'est ce qu'une branche ?</h3>
          <p>Une branche d'un
            <InfoHover id="repo">repository Github</InfoHover>
            est une copie isolée du contenu général permettant d'isoler le travail de développement afin de ne pas affecter
            du contenu stable et validé avec des nouveaux ajouts. Ces branches peuvent par la suite être fusionnées avec
            la branche principale afin de mettre en commun les travaux.
          </p>
          <div><SourcesSection :ids="['branches-github-doc']"/></div>
          <h3>Quel intérêt dans le cadre de mon stage</h3>
          <p>
            Dans le cadre de ce stage, je contribue à des projets Github qui sont open-source, c'est à dire qu'ils sont
            alimentés par une communauté. Si tout le monde poussait ses modifications sans faire de branches, il serait impossible
            d'avoir un projet stable in fine ! Pour éviter cela, on crée des branches qui permettent de ne pas casser la
            branche principale et lorsque nos modifications sont validées, on peut les fusionner.
          </p>
          <h3>Comment cela se présente ?</h3>
          <div class="side-by-side">
            <div class="trace-content">
              <Trace trace-id="branches-github"/>
            </div>
            <div class="text-content">
              <p>
                Un <InfoHover id="repo">repository Github</InfoHover> est composé d'une branche principale (la branche
                centrale "main" de la <b>trace 7</b>). Il est possible de créer une ou plusieurs branche (<span class="blue">branche A</span> et <span class="purple">branche B</span>)
                et de fusionner cette branche avec le contenu de la branche principale (<span class="red">merge</span> en rouge).
                A partir de ce point, le contenu de la branche <b>main</b> contient les modifications de la <span class="purple">branche B </span>et
                les modifications de la branche <b>main</b> antérieures à la fusion.
              </p>
            </div>
          </div>
        </div>
        <div v-if="activeRoot === 'pull-requests'">
          <h2>Pull Requests</h2>
        </div>
        <div v-if="activeRoot === 'fork'">
          <h2>Fork</h2>
        </div>
        <div v-if="activeRoot === 'commits'">
          <h2>Commits de qualité</h2>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
.red {
  color: red;
  font-weight: bold;
}
.purple {
  color: purple;
  font-weight: bold;
}
.blue {
  color: blue;
  font-weight: bold;
}

</style>
