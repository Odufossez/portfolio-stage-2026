<script setup>
import NavCard from "@/components/NavCard.vue";
import BackButton from "@/components/BackButton.vue";
import ColleagueHover from "../components/ColleagueHover.vue";
</script>
<template>
  <div class="page-container">
    <BackButton to="/home" label="Retour à l'accueil" />

    <header class="page-header">
      <h1>Environnement du stage</h1>
    </header>

    <section class="content">
      <p>
        L'Institut Curie est une fondation privée à but non lucratif et premier centre français de lutte contre le cancer.
        Dans le cadre de sa mission de recherche contre le cancer, l'Institut Curie cherche à comprendre les mécanismes de
        celui-ci pour mieux le soigner. Dans cette optique, l'unité 1331 d'Oncologie Computationnelle s'intéresse aux mécanismes
        moléculaires et cellulaires sous-jacents en combinant approches expérimentale et théorique, en réalisant une itération
        entre expérimentations cliniques et biologiques et modélisation mathématiques.
        C'est au sein de cette unité et dans l'équipe SYSBIO que j'ai effectué mon
        stage, encadré par <ColleagueHover name="stoll">Gautier Stoll</ColleagueHover> et
        <ColleagueHover name="calzone">Laurence Calzone</ColleagueHover>. Cette équipe se concentre sur le décryptage
        de ce qu'il se passe à l'intérieur et l'extérieur d'une cellule
        pour comprendre pourquoi une cellule se comporte comme elle le fait et évaluer le possible impact d'un traitement
        sur celle-ci.
      </p>
      <p>
        Pour ce stage, j'ai eu deux sujets distincts mais de durée et de charge de travail différentes. En premier, la
        documentation de MaBoSS, écrit en C++, ce qui m'a permis de saisir les grands principes de fonctionnement de ce
        logiciel. Ensuite, la conception d'un module en Python pour tester les modèles simulés par MaBoSS,
        sujet que je présente en détail
        <router-link to="/contexte-sujet">dans la rubrique <b>"Contexte du sujet"</b></router-link>.
      </p>
      <p>
        <i>Pour avoir plus de détails sur mon environnement de stage visitez les encards si dessous !</i>
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


