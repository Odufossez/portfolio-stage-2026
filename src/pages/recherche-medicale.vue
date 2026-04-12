<script setup>
import BackButton from "@/components/BackButton.vue";
import InfoHover from "@/components/InfoHover.vue";
</script>

<template>
  <div class="page-container">
    <BackButton to="/contexte-stage" />

    <header class="page-header">
      <h1>Recherche médicale et bio-informatique</h1>
    </header>

    <div class="styled-box">
      <h2>Qu'est-ce que la bio-informatique ?</h2>
      <p>
        La bio-informatique ou bioinformatique est un champ scientifique multi-disciplinaire auquel collaborent notamment
        des biologistes, mathématiciens, physiciens, médecins, agronomes et bioinformaticiens dans le but de résoudre un
        problème scientifique posé par la biologie. De manière plus générale, la bioinformatique est l'application de l'informatique,
        des mathématiques et de la statistique à science biologique.
      </p>
      <p>
        Ce domaine s'étend de l'analyse du génome à la modélisation de l'évolution d'une population animale dans un environnement
        donné, en passant par la modélisation moléculaire, l'analyse d'image, l'assemblage de génome et la reconstruction
        d'arbres phylogénétiques (phylogénie). Cette discipline constitue la "biologie in silico", par analogie avec in vitro
        ou in vivo.
      </p>
      <br>
    </div>

    <div class="styled-box">
      <h2>Application dans la recherche médicale</h2>
      <p>
        Un bioinformaticien va coder des logiciels permettant les simulations ou simuler lui-même selon son domaine.
      </p>
      <p>
        La bioinformatique dans la recherche médicale permet de simuler des réactions de systèmes entiers en prenant en compte
        de nombreux paramètres externes et ainsi de potentiellement prévoir la réaction à un traitement.
      </p>
    </div>

    <div class="styled-box">
      <h2>Application dans le cadre de mon stage</h2>
      <p>
        Dans le cadre de mon stage, je fais de la bio-informatique structurale. C'est à dire, le pan de la bioinformatique qui traite
        de la reconstruction, de la prédiction ou de l'analyse de la structure 3D ou du repliement des macromolécules biologiques
        (protéines, acides nucléiques), au moyen d'outils informatiques.
      </p>
      <p>
        En effet, <InfoHover id="maboss">MaBoSS</InfoHover> est un outil de modélisation booléenne basé sur des simulations 
        <InfoHover id="stochastique">stochastiques</InfoHover>. Il permet de modéliser
        des réseaux de voies de signalisation qui sont dérégulées dans le cancer et de comprendre pourquoi une cellule devient
        cancéreuse.
      </p>
    </div>

    <div class="sources-box">
      <p>
        Sources : <a href="https://fr.wikipedia.org/wiki/Bio-informatique">Wikipédia de la bioinformatique</a>
      </p>
    </div>

  </div>
</template>

<style scoped>
</style>