<script setup>
import BackButton from "@/components/BackButton.vue";
import {ref} from "vue";
import InfoHover from "@/components/InfoHover.vue";
import SourcesSection from "@/components/SourcesSection.vue";
import Trace from "@/components/Trace.vue";

const activeRoot = ref('branches');
const showEcoleDetails = ref(false);
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
                :class="{active: activeRoot === 'fork'}"
                @click="activeRoot='fork'">Fork
        </button>
        <button class="tab-item"
                :class="{active: activeRoot === 'pull-requests'}"
                @click="activeRoot='pull-requests'">Pull Requests
        </button>
        <button class="tab-item" :class="{active: activeRoot === 'commits'}"
                @click="activeRoot='commits'">Commits de qualité
        </button>
      </div>

      <div class="styled-box mission-content">
        <div v-if="activeRoot === 'branches'">
          <div class="box-header-with-tab">
            <h2>Création et gestion de branches git</h2>
            <button @click="showEcoleDetails = !showEcoleDetails" class="details-tab"
                    :class="{ active: showEcoleDetails }">
              {{ showEcoleDetails ? 'Cacher les détails' : 'Et par rapport à l\'école ?' }}
            </button>
          </div>
          <div v-if="showEcoleDetails" class="details-content">
            <div class="inner-details">
              <h3>Quelles sont les différences d'utilisation des branches entre l'école et le stage ?</h3>
              <p>
                Durant mon cursus de BUT 1 et 2, j'ai eu de nombreuses occasions d'utiliser Github mais étant sur des
                projets de taille assez petite, et en petit groupe, l'utilisation de branches n'était pas un réflexe.
                Avec
                le recul il aurait très certainement pu éviter bien des difficultés.
              </p>
              <p>
                De fait, je n'avais jamais fait de branche sur un projet Github, j'en connaissais l'existence
                tout au plus. Avoir pu pratiquer pendant mon stage avec cette commande m'a permis de consolider ce
                savoir
                et je sais maintenant
                <InfoHover id="push">pousser</InfoHover>
                sur une branche, en créer etc... Ce n'était
                pas nécessairement difficile à apprendre, mais c'était stressant au début de ne pas faire la bonne
                manipulation
                et de faire des erreurs.
              </p>
            </div>
          </div>

          <h3>Qu'est ce qu'une branche ?</h3>
          <p>Une branche d'un
            <InfoHover id="repo">repository Github</InfoHover>
            est une copie isolée du contenu général permettant d'isoler le travail de développement afin de ne pas
            affecter
            du contenu stable et validé avec des nouveaux ajouts. Ces branches peuvent par la suite être fusionnées avec
            la branche principale afin de mettre en commun les travaux.
          </p>
          <div>
            <SourcesSection :ids="['branches-github-doc']"/>
          </div>
          <h3>Quel intérêt dans le cadre de mon stage ?</h3>
          <p>
            Dans le cadre de ce stage, je contribue à des projets Github qui sont open-source, c'est à dire qu'ils sont
            alimentés par une communauté. Si tout le monde poussait ses modifications sans faire de branches, il serait
            impossible
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
                Un
                <InfoHover id="repo">repository Github</InfoHover>
                est composé d'une branche principale (la branche
                centrale "main" de la <b>trace 7</b>). Il est possible de créer une ou plusieurs branche (<span
                  class="blue">branche A</span> et <span class="purple">branche B</span>)
                et de fusionner cette branche avec le contenu de la branche principale (<span class="red">merge</span>
                en rouge).
                A partir de ce point, le contenu de la branche <b>main</b> contient les modifications de la <span
                  class="purple">branche B </span>et
                les modifications de la branche <b>main</b> antérieures à la fusion.
              </p>
            </div>
          </div>
          <div class="side-by-side">
            <div class="text-content">
              <p>
                Sur GitHub il est possible de voir toutes les branches d'un
                <InfoHover id="repo">repository</InfoHover>
                en
                cliquant sur le bouton "master" ou "main" depuis la page principale. Cela fait apparaitre une liste
                comme
                celle qu'on peut voir sur la <b>trace 8</b> ci-contre qui montre toutes les branches de MaBoSS.
              </p>
              <p>
                Il n'y a pas de limite à la création de branches, il est même possible de créer une branche de branche,
                ce
                qui est très utile si plusieurs membres travaillent sur une implémentation commune.
              </p>
            </div>
            <div class="trace-content">
              <Trace trace-id="branches-maboss"/>
            </div>
          </div>

          <h3>Et si la branche principale change ? </h3>
          <p>
            Si la branche principale change drastiquement, et qu'il est nécessaire de prendre en compte ces changements
            sur sa propre branche, il est possible d'appliquer la commande
            <InfoHover id="rebase">rebase</InfoHover>
            qui
            va fusionner les deux branches en appliquant les commits dans l'ordre chronologique.
          </p>
          <p>
            Pour que cela puisse se faire, Git exige que la branche courante soit "propre", c'est à dire qu'il n'y est
            pas de modifications en attente d'être
            <InfoHover id="push">poussée</InfoHover>
            ou
            <InfoHover id="commit">commitée</InfoHover>
            .
          </p>
        </div>
        <div v-if="activeRoot === 'fork'">
          <div class="box-header-with-tab">
            <h2>Fork</h2>
            <button @click="showEcoleDetails = !showEcoleDetails" class="details-tab"
                    :class="{ active: showEcoleDetails }">
              {{ showEcoleDetails ? 'Cacher les détails' : 'Et par rapport à l\'école ?' }}
            </button>
          </div>

          <div v-if="showEcoleDetails" class="details-content">
            <div class="inner-details">
              <h3>Quelles différences par rapport à l'école ?</h3>
              <p>
                Durant mon cursus je n'ai pas rencontré la nécessité de créer de fork pour contribuer à un projet. Donc
                je connaissais le terme sans savoir ce que cela faisait.
              </p>
              <p>
                Depuis mon expérience au sein de l'Institut Curie, je sais maintenant comment s'utilise les forks et je
                comprends leur intérêt dans le développement open-source. L'avantage de git c'est qu'il y a énormément de
                tutoriels donc ce n'était pas difficile d'apprendre à utiliser les forks.
              </p>
            </div>
          </div>
          <h3>Qu'est ce qu'un fork ?</h3>
          <p>
            Dans le cadre de projet open-source, les contributeurs n'ont pas les droits de modification sur les
            repository
            sur lesquels iels souhaitent contribuer. Faire un fork permet de créer une copie qui nous est propre. La
            <b>trace 9</b> ci-dessous montre, <span class="red">en rouge</span>, que le repository <b>pyMaBoSS</b> est un fork.
            Il va apparaître comme étant un repository dont je suis le propriétaire mais il n'est qu'une copie du repository
            de l'utilisateur "colomoto".
          </p>

          <Trace trace-id="screen-fork-pymaboss"/>

          <h3>Quelles sont les différences dans la gestion de version ?</h3>
          <p>
            Dans le quotidien de développement, il n'y a pas de grandes différences. Le seul changement principal c'est la
            commande de <InfoHover id="commit">commit</InfoHover>. En effet, une commande de <InfoHover id="commit">commit</InfoHover>
            et de <InfoHover id="push">push</InfoHover>
            classiques, comme j'ai pu beaucoup faire durant mon cursus à la forme : <code class="code-inline">git commit -m "message"</code>
            puis <code class="code-inline">git push origin nom_branche</code>. "Origin" fait référence au repository originel du
            projet et "main" à sa branche principale.
          </p>
          <p>
            Dans le cas où on <InfoHover id="push">pousse</InfoHover> des modifications sur un fork, il faut indiquer à
            git que l'on souhaite pousser non pas sur <code class="code-inline">origin</code> mais sur le fork. On va donc
            écrire : <code class="code-inline">git push my-fork nom_branche</code>. La commande de <InfoHover id="commit">commit</InfoHover>,
            elle, ne change pas.
          </p>
        </div>
        <div v-if="activeRoot === 'pull-requests'">
          <div class="box-header-with-tab">
            <h2>Pull Requests</h2>
            <button @click="showEcoleDetails = !showEcoleDetails" class="details-tab"
                    :class="{ active: showEcoleDetails }">
              {{ showEcoleDetails ? 'Cacher les détails' : 'Et par rapport à l\'école ?' }}
            </button>
          </div>
          <div v-if="showEcoleDetails" class="details-content">
            <div class="inner-details">
              <h3>Quelles différences par rapport à l'école ?</h3>
              <p>
                Durant mon cursus de BUT 1 et 2 je n'ai jamais eu l'occasion de faire de pull request. Je ne savais même
                pas à quoi cela servait. J'avais bien vu le bouton sur certains
                <InfoHover id="repo">repository</InfoHover>
                donc je connaissais l'existence de ce terme mais je ne savais pas ce que ça cachait.
              </p>
              <p>
                Maintenant que j'ai eu à en faire une, je comprends mieux comment cela marche et il existe beaucoup de
                tuto pour expliquer les démarches à effectuer, ce n'était pas très difficile d'apprendre.
              </p>
            </div>
          </div>
          <h3>Qu'est ce qu'une pull request ?</h3>
          <p>
            Une pull request, que l'on pourrait traduire par "demande de
            <InfoHover id="pull">pull</InfoHover>
            ", est une
            commande qui se fait lorsque l'on souhaite intégrer les modifications que l'on a fait dans un
            <InfoHover id="fork">fork</InfoHover>
            dans une branche du dépôt github principal (ou d'origine).
          </p>
          <p>
            Sur la <b>trace 9</b> ci-dessous, on peut voir entouré <span class="red">en rouge l'indication que ce repository est un <InfoHover
              id="fork">fork</InfoHover></span>. Le cercle jaune indique le bouton qui permet de lancr la procédure pour
            mettre à jour le
            repository originel avec mes modifications.
          </p>
          <Trace trace-id="screen-fork-pymaboss"/>
        </div>

        <div v-if="activeRoot === 'commits'">
          <div class="box-header-with-tab">
            <h2>Commits de qualité</h2>
            <button @click="showEcoleDetails = !showEcoleDetails" class="details-tab"
                    :class="{ active: showEcoleDetails }">
              {{ showEcoleDetails ? 'Cacher les détails' : 'Et par rapport à l\'école ?' }}
            </button>
          </div>

          <div v-if="showEcoleDetails" class="details-content">
            <div class="inner-details">
                <h3>Quelles différences par rapport à l'école ?</h3>
              <p>
                Les commits sont la base de la gestion de version et du travail de groupe. J'essaye depuis toujours de
                faire des commits avec un message cohérent, facile à comprendre, synthétique mais précis. C'est une
                habitude que j'ai gardée durant mon stage à la seule différence que je les faisais en anglais afin que tous
                les contributeurs des projets puissent comprendre ce que je fais.
              </p>
            </div>
          </div>

          <h3>Qu'est ce qu'un commit ?</h3>
          <p>
            Un commit est l'étape qui vient juste avant de <InfoHover id="push">pousser</InfoHover> des modifications
            sur le <InfoHover id="repo">repository</InfoHover>. Il est accompagné d'un message qui permet d'expliquer
            les modifications qui sont apportées.
          </p>
          <p>
            En lignes de commandes il s'écrit : <code class="code-inline">git commit -m "message du commit"</code>.
          </p>

          <h3>Quel est l'intérêt d'un bon commit ?</h3>
          <p>
            Avant tout, qu'est ce qu'un "bon commit"? De l'avis général de la communauté, il faut <b>pouvoir comprendre</b>
            ce qui a été fait dans le code <b>sans avoir</b> à lire le code. A bannir donc les <span class="exemple">modif fonction</span>
            et préférer : <span class="exemple">modifier fonction nom_fct dans nom_classe pour [effets]</span>.
          </p>
          <p>
            L'intérêt majeur de commits efficaces c'est de pouvoir :
          </p>
          <ul>
            <li>
              comprendre facilement des modifications apportées par un autre utilisateur (ou soi),
            </li>
            <li>
              suivre l'évolution d'implémentation,
            </li>
            <li>
              potentiellement avoir un endroit où retrouver comment certains bugs ont été résolus.
            </li>
          </ul>
          <br>
          <h3>Quels impacts dans le cadre de mon stage ?</h3>
          <p>
            Comme dit précédemment, je travaille sur des projets opensources. D'autres personnes viendront après moi pour
            améliorer, modifier, étendre les projets. Avoir cet historique avec la méthode d'implémentation peut être une
            précieuse ressource d'informations pour déboguer.
          </p>
          <p>
            Dans un contexte plus personnel, avoir des commits précis et régulier me permettent de reprendre mon travail
            là où je l'avais laissé la veille ou le vendredi donc je gagne en efficacité sans avoir à parcourir tout le code
            pour retrouver où je m'étais arrêté.
          </p>
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
