<script setup>
import NavCard from "@/components/NavCard.vue";
</script>
<template>
  <div class="page-container">
    <router-link to="/home" class="back-link">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
      </svg>
      Retour à l'accueil
    </router-link>

    <header class="page-header">
      <h1>Contexte du sujet</h1>
    </header>

    <section class="content">
      <p>Cette page est dédiée à la présentation du sujet de mon stage.</p>
      <p>J'y présenterai la problématique, les objectifs techniques et scientifiques, ainsi que les outils utilisés.</p>
    </section>

    <hr class="separator">

    <section class="nav-grid">
      <NavCard title="Présentation de l'existant" to=""/>
      <NavCard title="Présentation des attendus" to=""/>
      <NavCard title="Présentation des enjeux" to=""/>
    </section>
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

.content {
  line-height: 1.8;
  font-size: 1.1rem;
  color: #5c4033;
}

.content p, .content li {
  margin-bottom: 20px;
}
</style>
