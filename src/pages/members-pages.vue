<script setup>
import { teamData } from "@/data/team";
import BackButton from "@/components/BackButton.vue";
import TeamCard from "@/components/TeamCard.vue";
</script>

<template>
<div class="page-container">
  <BackButton to="/unit-1331" label="Retour à la page de l'unité" />
  <header class="page-header">
    <h1>Le personnel de l'unité</h1>
  </header>
  <section class="styled-box">

    <p style="margin-bottom: 25px; color: #5c4033;">Une liste non exhaustive du personnel de cette unité, notamment
      celles et ceux avec qui j'ai interagi assez régulièrement :</p>

    <TeamCard
        v-for="member in teamData"
        :key="member.id"
        :name="member.name"
        :description="member.description"
        :photo="member.photo"
        :relationship="member.relationship"
    />
  </section>
</div>
</template>

<style scoped>

</style>