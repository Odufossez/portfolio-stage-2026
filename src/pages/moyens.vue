<script setup>
import ColleagueHover from '@/components/ColleagueHover.vue';
import Trace from "@/components/Trace.vue";
import TraceHover from "@/components/TraceHover.vue";
import BackButton from "@/components/BackButton.vue";
import SectionNav from "@/components/SectionNav.vue";
import { tracesData } from "@/data/traces.js";

const sections = [
  { id: 'work-env', label: 'Environnement de travail' },
  { id: 'communication', label: 'Communication' },
  { id: 'github', label: 'GitHub' },
  { id: 'languages', label: 'Langages' }
];
</script>

<template>
  <div class="page-container">
    <BackButton to="/contexte-stage" />

    <header class="page-header">
      <h1>Environnement technique</h1>
    </header>

    <SectionNav :sections="sections" />

    <div class="styled-box" id="work-env">
      <h2>Environnement de travail</h2>
      <p>Dans l'unité et l'équipe, le télétravail est courant et de nombreuses personnes travaillent sur un site
        différent (Orsay ou Saint-Cloud) certains jours de la semaine.
        Je partage le bureau avec
        <ColleagueHover name="calzone">Laurence</ColleagueHover>
        , une de ses collègues et
        <ColleagueHover name="stoll">Gautier</ColleagueHover>
        le jeudi. Le mercredi, personne d'autre que
        moi n'est là donc je vais dans le bureau de
        <ColleagueHover name="gaspard">Lucie</ColleagueHover>
        et
        <ColleagueHover name="pankaew">Saran</ColleagueHover>
        , qui m'ont invité afin que je ne sois pas seul. Dans ce
        cas nous sommes plus nombreux car d'autres doctorants ou post-doctorants y travaillent également.
        Quelque soit l'endroit où je travaille, j'ai à ma disposition des écrans, des claviers et des souris pour
        travailler le plus confortablement possible.
      </p>
      <p>
        En termes de connexion, un spot Eduroam est disponible et j'ai pu m'y connecter avec le certificat de
        l'Université
        Marie et Louis Pasteur sans difficulté.
      </p>
    </div>

    <div class="styled-box" id="communication">
      <h2>Communication avec les collègues</h2>
      <p>
        Pour communiquer entre collègues, l'utilisation de Microsoft Teams est largement adoptée. Me concernant, j'ai
        une discussion à trois avec
        <ColleagueHover name="calzone">Laurence</ColleagueHover>
        et
        <ColleagueHover name="stoll">Gautier</ColleagueHover>
        afin de pouvoir poser mes questions et faire suivre mon avancement
        facilement.
      </p>
      <p>
        Les emails sont toujours utilisés bien sûr, mais surtout dans des cadres plus formels comme des listes de
        diffusions
        ou pour présenter une personne. Par exemple, j'ai communiqué avec
        <ColleagueHover name="noel">Vincent</ColleagueHover>
        plutôt par email au début
        après que
        <ColleagueHover name="stoll">Gautier</ColleagueHover>
        m'ait mis en copie.
      </p>
    </div>


    <div class="styled-box" id="github">
      <h2>Utilisation de GitHub</h2>

      <Trace trace-id="maboss-branches"></Trace>

      <p>
        L'unité produisant des logiciels open-source disponible pour d'autres centres de recherche, l'utilisation de
        GitHub est standard.
        J'ai été rajouté comme contributeur par
        <ColleagueHover name="noel">Vincent</ColleagueHover>
        pour pouvoir pousser les modifications
        que je faisais dans une branche de MaBoSS.
      </p>
      <p>
        On peut voir sur la trace 1 ci-dessus toutes les branches du projet. Le repère A pointe la branche <b>master</b>,
        la branche principale du projet. Le repère B pointe "ma" branche, que j'ai crée pour ajouter la documentation au
        code
        afin de pouvoir modifier/effacer/valider mon travail sans qu'il n'y ait d'impact sur la branche principale.
      </p>
      <br>
      <p class="sources-box">
        Lien vers le Github : <a href="https://github.com/sysbio-curie"
                                 target="_blank">https://github.com/sysbio-curie</a>
      </p>
    </div>

    <div class="styled-box" id="languages">
      <h2>Langages du projet</h2>
      <div class="side-by-side">
        <div class="text-content">
          <p>
            MaBoSS est un logiciel écrit en C++ qui a quelques couches de Python. On peut voir sur la
            trace 2 ci-contre la répartition proportionnelle des langages utilisés par l'application MaBoSS.
            Plus de la moitié (52.1%) est en C++, les exemples d'applications sont sous Jupyter Notebook (24%) et le
            reste
            représentent les minces couches de Python, de configurations, etc...
          </p>
          <p>
            La majeure partie de mon travail se concentre sur la partie C++ de ce projet.
          </p>
        </div>
        <div class="trace-content">
          <Trace trace-id="maboss-langs"></Trace>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.side-by-side {
  display: flex;
  gap: 30px;
  align-items: center;
  margin-top: 15px;
}

.text-content {
  flex: 1;
}

.trace-content {
  flex-shrink: 0;
}

@media (max-width: 850px) {
  .side-by-side {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>