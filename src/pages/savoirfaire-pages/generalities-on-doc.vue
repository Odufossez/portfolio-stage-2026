<script setup>
import BackButton from "@/components/BackButton.vue";
import {ref} from "vue";

const activeRoot = ref('standards');
const showDetails = ref(false);
</script>

<template>
  <div class="page-container">
    <BackButton to="/savoir-faire" label="Retour aux savoir-faire"/>

    <header class="page-header">
      <h1>Généralités sur la documentation</h1>
    </header>

    <section class="mission-section">
      <div class="tabs-list">
        <button class="tab-item" :class="{active: activeRoot === 'standards'}" @click="activeRoot='standards'">
          Généralités sur la documentation
        </button>
        <button class="tab-item" :class="{active: activeRoot === 'communication'}" @click="activeRoot='communication'">
          Communiquer avec les autres
        </button>
        <button class="tab-item" :class="{active: activeRoot === 'tools-doc'}" @click="activeRoot='tools-doc'">
          Outils de documentation
        </button>

      </div>

      <div class="styled-box mission-content">
        <div v-if="activeRoot === 'standards'">
          <div class="box-header-with-tab">
            <h2>Généralités sur la documentation</h2>
            <button @click="showDetails = !showDetails" class="details-tab"
                    :class="{ active: showDetails }">
              {{ showDetails ? 'Cacher les détails' : 'Et par rapport à l\'école ?' }}
            </button>
          </div>

          <div v-if="showDetails" class="details-content">
            <div class="inner-details">
              <h3>Quelles différences par rapport à l'école ?</h3>
              <p>
                  Au cours de mon BUT, l'aspect documentation n'a été abordé que de manière superficiel. Il nous a été
                transmis à quoi elle sert, quelques nomenclatures, Java notamment, mais il n'a jamais été attendu de notre
                part que nous documentions de manière extensive nos productions.
              </p>
              <p>
                Il y a une bonne raison à cela, les projets sont courts, simples et très nombreux. Les documenter tous aurait
                pour conséquence de rallonger énormément les durées de ceux-ci et il y a beaucoup de sujets à couvrir donc
                l'impasse est faite sur cette partie. De plus, nos projets ne sont ni maintenus ni repris, ce qui ne rend
                pas nécessaire la transmission des idées derrière les implémentations. Pour l'exercice cela nous a été
                parfois demandé mais sans que cela soit devenue une pratique systématique.
              </p>
              <p>
                Dans un contexte professionnel, les productions informatiques seront maintenus par d'autres personnes, et
                pas seulement dans le cas de projets opensources. Le turnover, les promotions, les aléas de la vie sont
                autant de raisons qu'une équipe peut changer et il est important de pouvoir passer le flambeau à une
                autre personne.
              </p>
            </div>
          </div>

          <h3>Qu'est ce qui est documenté ?</h3>
          <p>
            Une réponse courte : tout ou presque. Une réponse plus précise : ce qui a besoin de l'être. En clair, tout ce
            qui peut amener une personne extérieur à un projet à se dire "Mais qu'est ce que ça fait là ?", "Pourquoi
            ça existe ?". Que ce soit une classe, une fonction, un paramètre ou même une ligne. Tous les cerveaux ne
            fonctionnent pas pareil et ce qui est évident pour soi ne le sera pas pour le suivant.
          </p>
          <p>
            Il n'est cependant pas (toujours) nécessaire de décrire la moindre ligne du moindre algorithme. En effet, la
            documentation se fait directement dans le code et il n'est pas judicieux de chargé un code complexe de 50 lignes
            de commentaires supplémentaires, rassurez-vous, c'est déjà suffisamment illisible. Expliciter en quelques
            lignes une fonction peut néanmoins faire gagner une après-midi, les algorithmes plus complexe peuvent avoir
            une description et si elle est trop longue il est tout a fait possible de créer un document d'explication
            à part du code.
          </p>

        </div>

        <div v-if="activeRoot === 'communication'">
          <div class="box-header-with-tab">
            <h2>Communiquer avec les autres</h2>
            <button @click="showDetails = !showDetails" class="details-tab"
                    :class="{ active: showDetails }">
              {{ showDetails ? 'Cacher les détails' : 'Et par rapport à l\'école ?' }}
            </button>
          </div>

          <div class="inner-details" v-if="showDetails">
            <h3>Quelles différence par rapport à l'école ?</h3>
            <p>
              Au cours de mon BUT, je n'avais pas vraiment le réflexe, surtout en première année, de documenter mon code.
              Je l'ai un peu plus fait en deuxième année mais pas autant que ce que j'ai eu à faire pendant mon stage et,
              quand je le faisais, c'était généralement en Français.
            </p>
            <p>
              La documentation du code est très clairement une compétence que j'ai développé pendant mon stage.
            </p>
          </div>

          <h3>Quel est le but de la documentation ?</h3>
          <p>
            La documentation sert à expliquer aux autres les fonctionnalités qui ont été implémentée
            dans le programme. Il ne s'agit pas seulement de décrire ce que le programme fait mais surtout de
            comment il le fait.
          </p>
          <p>
            Dans le cadre d'un développement opensource, le programme sera amené à être maintenu par quelqu'un d'autre
            qui n'aura pas travailler sur le code source. Il est important de documenter son code pour faciliter le
            futur travail de développement.
          </p>
          <p>
            Il n'est pas forcément nécessaire de tout décrire en détail. Il vaut mieux préférer des descriptions
            synthétique pour des fonctions peu complexes mais pour les algorithmes plus complexes, il est parfois
            nécessaire de s'étendre un peu plus.
          </p>

          <h3>En quelle langue ?</h3>
          <p>
            Sur GitHub, ou les plateformes de partage de ressources en général, il est courant de documenter
            en Anglais. Cette langue est la norme dans ce domaine, il faut que la documentation soit compréhensible
            par le plus grand nombre de personne possible.
          </p>
          <p>
            En conséquence, j'ai énormément rédigé et lu en Anglais pendant ma période de stage. Cela a renforcé mes
            compétences linguistiques très fortement.
          </p>

        </div>

        <div v-if="activeRoot === 'tools-doc'">
          <div class="box-header-with-tab">
            <h2>Outils de documentation</h2>
            <button @click="showDetails = !showDetails" class="details-tab"
                    :class="{ active: showDetails }">
              {{ showDetails ? 'Cacher les détails' : 'Et par rapport à l\'école ?' }}
            </button>
          </div>
          <div class="inner-details" v-if="showDetails">
            <h3>Quelles différences par rapport à l'école ?</h3>
            <p>
              Au cours de mon cursus, je n'ai pas appris à utiliser des outils de documentation donc j'ai découvert
              comment les outils cités ci-après fonctionnaient par moi même.
            </p>
          </div>

          <h3>Doxygen</h3>
          <p>
            Il existe divers outils pour documenter un code. L'un des plus utilisé est Doxygen. Cet outil automatise
            la génération de la documentation à partir des commentaires présents directement dans le code source pour
            produire des fichiers dans des formats comme HTML ou PDF. Il génère aussi des diagrammes UML à partir
            des fichiers codes sources.
          </p>
          <p>
            Doxygen supportant de nombreux langages de programmation (Python, C++, Java, PHP...), il est un outil très
            apprécié et utilisé à travers les communautés de programmations, il est aisé de trouver des explications
            et des tutos sur comment configurer le fichier de paramètres de la génération de la documentation.
          </p>

          <h3>Clang-uml</h3>
          <p>
            Un second outil qui permet de générer des diagrammes UML depuis les fichiers codes sources est Clang-UML.
            Clang-UML génère le diagramme UML des classes du projet et permet même de choisir quelles classes sont
            représentées.
          </p>

        </div>

      </div>


    </section>
  </div>
</template>

<style scoped>

</style>
