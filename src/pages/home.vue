<script setup>
import NavCard from "../components/NavCard.vue";
</script>

<template>
  <div class="home">
    <section class="intro-section">
      <h1>Introduction</h1>
      <div class="styled-box">
        <p>
          Bienvenue sur mon portfolio de stage de deuxième année de BUT Informatique. Ce site retrace mon expérience de
          10 semaines au sein de l'Institut Curie. Vous y trouverez une analyse détaillée des compétences et des
          savoir-faire que j'ai pu mobiliser et développer au cours de cette immersion professionnelle.
          Ce site se divise en trois sections principales :
        </p>
        <ul>
          <li><b>L'environnement du stage</b>: une présentation de l'Institut Curie et de l'équipe qui m'a accueilli.
          </li>
          <li><strong>Le projet</strong>: une explication détaillée de mon sujet d'étude et des objectifs fixés.</li>
          <li><strong>La description des savoir-faire généraux</strong>: un inventaire des savoir-faire techniques et transversaux acquis
            durant cette période.
          </li>
        </ul>
        <p>
          Ce portfolio témoigne de mon évolution en tant que futur développeur et m'a fait découvrir la bio-informatique
          et l'application du développement, des graphes et des probabilités dans la recherche médicale.
        </p>
      </div>
    </section>

    <hr class="separator">

    <section class="nav-grid">
      <NavCard title="L'environnement du stage" to="/contexte-stage"/>
      <NavCard title="Le projet" to="/contexte-sujet"/>
      <NavCard title="La description des savoirs-faire généraux" to="/savoir-faire"/>
    </section>
  </div>
</template>

<style scoped>
.home {
  padding: 100px 20px 40px;
  max-width: 1100px;
  margin: 0 auto;
}

.intro-section h1 {
  font-size: 2rem;
  color: #412817;
  margin-bottom: 25px;
  font-weight: 800;
}

.intro-section p, .intro-section li {
  font-size: 1.1rem;
  color: #5c4033;
  line-height: 1.7;
}

.intro-section ul {
  padding-left: 20px;
}

.intro-section li {
  margin-top: 10px;
}


</style>