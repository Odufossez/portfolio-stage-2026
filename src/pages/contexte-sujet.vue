<script setup>
import NavCard from "@/components/NavCard.vue";
import BackButton from "@/components/BackButton.vue";
</script>
<template>
  <div class="page-container">
    <BackButton to="/home"/>

    <header class="page-header">
      <h1>Contexte du sujet</h1>
    </header>

    <section class="content">
      <p>Cette page est dédiée à la présentation du sujet de mon stage.</p>
      <p>J'y présenterai la problématique, les objectifs techniques et scientifiques, ainsi que les outils utilisés.</p>
    </section>

    <hr class="separator">

    <section class="nav-grid">
      <NavCard title="Présentation de l'existant" to="/stage-existant"/>
      <NavCard title="Présentation des attendus" to="/stage-sujet"/>
      <NavCard title="Présentation des enjeux" to="/stage-enjeux"/>
    </section>
  </div>
</template>


