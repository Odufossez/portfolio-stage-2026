<script setup>
import ColleagueHover from '@/components/ColleagueHover.vue';
</script>

<template>
  <div class="page-container">
    <router-link to="/contexte-stage" class="back-link">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
      </svg>
      Retour au contexte
    </router-link>

    <header class="page-header">
      <h1>Environnement technique</h1>
    </header>

    <div class="styled-box">
      <h2>Environnement de travail</h2>
      <p>Dans l'unité et l'équipe, le télétravail est courant et de nombreuses personnes travaillent sur un site
        différent (Orsay ou Saint-Cloud) certains jours de la semaine.
        Je partage le bureau avec <ColleagueHover name="laurence">Laurence</ColleagueHover>, une de ses collègues et <ColleagueHover name="gautier">Gautier</ColleagueHover> le jeudi. Le mercredi, personne d'autre que
        moi n'est là donc je vais dans le bureau de <ColleagueHover name="lucie">Lucie</ColleagueHover> et <ColleagueHover name="saran">Saran</ColleagueHover>, qui m'ont invité afin que je ne sois pas seul. Dans ce
        cas nous sommes plus nombreux car d'autres doctorants ou post-doctorants y travaillent également.
        Quelque soit l'endroit où je travaille, j'ai à ma disposition des écrans, des claviers et des souris pour
        travailler le plus confortablement possible.
      </p>
      <p>
        En termes de connexion, un spot Eduroam est disponible et j'ai pu m'y connecter avec le certificat de l'Université
        Marie et Louis Pasteur sans difficulté.
      </p>
    </div>

    <div class="styled-box">
      <h2>Communication avec les collègues</h2>
      <p>
        Pour communiquer entre collègues, l'utilisation de Microsoft Teams est largement adoptée. Me concernant, j'ai
        une discussion à trois avec <ColleagueHover name="laurence">Laurence</ColleagueHover> et <ColleagueHover name="gautier">Gautier</ColleagueHover> afin de pouvoir poser mes questions et faire suivre mon avancement
        facilement.
      </p>
      <p>
        Les emails sont toujours utilisés bien sûr, mais surtout dans des cadres plus larges comme des listes de diffusions
        ou si les discussions sont plus formelles. Par exemple, j'ai communiqué avec <ColleagueHover name="vincent">Vincent</ColleagueHover> plutôt par email au début.
      </p>
    </div>

    <div class="styled-box">
      <h2>Utilisation de GitHub</h2>
      <p>
        Présentation github de sys-bio
      </p>
    </div>

    <div class="styled-box">
      <h2>Langages du projet</h2>
      <p>bla bla langages de maboss blabla</p>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  padding: 100px 20px 40px;
  max-width: 900px;
  margin: 0 auto;
}

.page-header h1 {
  font-size: 2.5rem;
  color: #412817;
  margin-bottom: 40px;
  border-left: 5px solid #e8803d;
  padding-left: 20px;
}
</style>