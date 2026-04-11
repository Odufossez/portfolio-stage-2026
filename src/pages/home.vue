<script setup>
import NavCard from "../components/NavCard.vue";
</script>

<template>
  <div class="home">
    <section class="intro-section">
      <h1>Introduction</h1>
      <div class="intro-box">
        <p>
          Bienvenue sur mon portfolio de stage de deuxième année de BUT informatique. Ce site fait office de portfolio dans lequel je retrace et analyse
          les compétences et les savoir-faire que j'ai utilisé et/ou développé durant mon stage de 10 semaines à l'institut Curie.
          Ce site se divise en trois sections principales :
        </p>
        <ul>
          <li><b>Contexte du stage</b>: dans laquelle je présente l'Institut Curie et l'équipe qui m'a accueilli,</li>
          <li><strong>Contexte du sujet</strong>: dans laquelle j'explique mon sujet et les objectifs de mon stage,</li>
          <li><strong>Description des savoir-faire généraux</strong>: dans laquelle je liste les savoir-faire et
            compétences que mon stage m'a permis d'acquérir et de mettre en oeuvre.
          </li>
        </ul>
      </div>
    </section>

    <hr class="separator">

    <section class="nav-grid">
      <NavCard title="Contexte stage" to="/contexte-stage"/>
      <NavCard title="Contexte sujet" to="/contexte-sujet"/>
      <NavCard title="Description des savoirs-faire généraux" to="/savoir-faire"/>
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

.intro-box {
  background-color: #fff5e6; /* Même couleur que le footer */
  border: 1px solid #ffe6cc;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
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

.separator {
  border: 0;
  height: 2px;
  background: linear-gradient(to right, #e8803d, transparent);
  margin: 50px 0;
  border-radius: 2px;
}

.nav-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}
</style>