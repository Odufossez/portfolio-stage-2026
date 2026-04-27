<script setup>
import NavCard from "../components/NavCard.vue";
</script>

<template>
  <div class="page-container home-container">
    <section class="intro-section">
      <header class="page-header">
        <h1>Introduction</h1>
      </header>
      <div class="styled-box">
        <p>
          Bienvenue sur mon portfolio de stage de deuxième année de BUT Informatique. Ce site retrace mon expérience de
          10 semaines au sein de l'Institut Curie. Vous y trouverez une analyse détaillée des compétences et des
          savoir-faire que j'ai pu mobiliser et développer au cours de cette immersion professionnelle.
          Ce site se divise en quatre sections principales :
        </p>
        <ul>
          <li><b>Une introduction générale du stage</b>: une présentation de l'Institut Curie et de l'équipe qui m'a
            accueilli, une exposition du projet et une description des savoir-faire généraux mobilisés pendant cette période.
          </li>
          <li><strong>Un onglet technique</strong>: <span class="todo">[todo]</span>.</li>
          <li><strong>Une vue sur la gestion de projet</strong>: <span class="todo">[todo]</span>.</li>
          <li><strong>Un volet sur mon intégration en entreprise</strong>: <span class="todo">[todo]</span>.</li>
        </ul>
        <p>
          A ces quatre pages principales, s'ajoutent trois pages permettant de compiler les <b>traces</b>, le <b>lexique</b> et les
         <b>divers liens de sources</b> présentes sur ce site.
        </p>
        <p>
          Ce portfolio témoigne de mon évolution en tant que futur développeur et présente comment mon stage m'a fait
          découvrir la bio-informatique et l'application du développement, des graphes et des probabilités dans la recherche médicale.
        </p>
      </div>
    </section>

    <hr class="separator minimal">

    <section class="nav-grid">
      <NavCard title="L'environnement du stage" to="/contexte-stage"/>
      <NavCard title="Le projet" to="/contexte-sujet"/>
      <NavCard title="La description des savoirs-faire généraux" to="/savoir-faire"/>
    </section>
  </div>
</template>

<style scoped>
.home-container {
  max-width: 1100px;
}

.intro-section p, .intro-section li {
  font-size: 1.1rem;
  color: var(--curie-text);
  line-height: 1.7;
}

.intro-section ul {
  padding-left: 20px;
  margin-bottom: 1.5rem;
}

.intro-section li {
  margin-top: 10px;
}

.separator.minimal {
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(232, 128, 61, 0.4), rgba(0, 0, 0, 0));
  margin: 40px 0;
}

.nav-grid {
  display: grid;
  gap: 20px;
}
</style>