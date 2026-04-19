<script setup>
import NavCard from "@/components/NavCard.vue";
import BackButton from "@/components/BackButton.vue";
</script>
<template>
  <div class="page-container">
    <BackButton to="/home" label="Retour à l'accueil" />

    <header class="page-header">
      <h1>Environnement du stage</h1>
    </header>

    <section class="content">
      <p>Au travers des pages accessibles ci-dessous, je vais vous présenter l'environnement global de mon stage, de
      l'Institut Curie aux moyens techniques. J'ai également rédigé une page centrée sur la recherche médicale et le
      rôle que joue la bio-informatique au sein de celle-ci, mon stage se déroulant dans un contexte de recherche médicale.
      </p>
    </section>

    <hr class="separator">

    <section class="nav-grid">
      <NavCard title="Présentation de l'Institut Curie" to="/institut-curie"/>
      <NavCard title="Unité 1331" to="/unit-1331"/>
      <NavCard title="Environnement technique" to="/moyens"/>
      <NavCard title="Recherche médicale et bio-informatique" to="/recherche-medicale"/>
    </section>
  </div>
</template>


