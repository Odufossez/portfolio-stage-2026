<script setup>

import BackButton from "@/components/BackButton.vue";
import {ref} from "vue";
import ColleagueHover from "@/components/ColleagueHover.vue";
import Trace from "@/components/Trace.vue";
import InfoHover from "@/components/InfoHover.vue";
import SourcesSection from "@/components/SourcesSection.vue";
import TraceHover from "@/components/TraceHover.vue";

const activeRoot = ref('agile');
</script>

<template>
  <div class="page-container">
    <header class="page-header">
      <BackButton to="/home" label="Retour à l'accueil"/>
      <h1>Suivi de projet</h1>
      <p>
        Cette présente la manière dont j'ai géré mon projet et son évolution.
      </p>
    </header>
    <section class="missions-section">
      <div class="tabs-list">
        <button class="tab-item" :class="{active: activeRoot==='agile'}"
                @click="activeRoot='agile'">
          Gérer un projet en agile
        </button>
        <button class="tab-item" :class="{active: activeRoot==='github'}" @click="activeRoot='github'">
          Utiliser Github
        </button>
        <button class="tab-item" :class="{active: activeRoot==='chrono'}"
                @click="activeRoot='chrono'">
          Chronologie du projet
        </button>
        <button class="tab-item" :class="{active: activeRoot==='bilan'}" @click="activeRoot='bilan'">
          Bilan et évaluation
        </button>
      </div>

      <div class="styled-box mission-content">
        <div v-if="activeRoot==='agile'">
          <h2>Suivre une logique d'implémentation Agile</h2>
          <div class="encadre-gris">
            <h3>Savoir-faire mobilisés</h3>
            <span class="blue">Identifier les fonctions</span>,
            <span class="dark-green">décider de l'ordre d'implémentation</span>
          </div>
          <p>
            Étant le seul développeur sur l'outil, il n'était pas nécessaire de mettre en place une grande logique de
            gestion de projet (pas besoin de Trello par exemple). La manière de gérer le rythme et ce qui est
            implémenté, quand et comment, me revient entièrement.
          </p>
          <p>
            Étant donné que tous les jeudis
            <ColleagueHover name="stoll">mon tuteur</ColleagueHover>
            est présent sur le
            même site que moi, nous faisions toujours un point sur mon avancée. Je peux donc marquer ce jour comme un
            checkpoint hebdomadaire
            et utiliser une logique Agile pour suivre mon projet. La première étape pour cela, c'est de découper mon
            projet
            en fonction et en tâches. C'est ce découpage que présente la trace 20 ci-dessous.
          </p>
          <div class="side-by-side inner-details">
            <div class="text-content">
              <p>
                J'ai découpé mon outil,<span class="blue"> MaBoSS_CoherencyCheckerTool (MCCT) en 4 fonctions.</span>
                <span class="dark-green"> Dans ce schéma on retrouve l'ordre dans lequel j'ai implémenté chaque fonction bleue en partant du plus
                  haut de la colonne, vers le bas.</span>
              </p>
              <p>
                <span class="blue"> L'outil a donc 4 fonctions principales.</span> Les fonctions composantes (en vert),
                ne sont pas des fonctions à part
                entière mais regroupe tout un tas de fonction que je ne détaille pas ici.
              </p>
              <ul>
                <li><p><b>La gestion des simulations</b>: l'outil prend en charge la ou les simulations nécessaires pour
                  l'évaluation, cela implique donc de gérer les fichiers résultats et les options possibles.</p>
                </li>
                <li><p>
                  <b>La lecture de la question</b>: l'outil se basant sur une assertion ou une question pour faire son
                  évaluation,
                  il faut que celui-ci soit capable de différencier les cibles, les noms, qu'est ce qui est recherché...
                  cela
                  implique donc la mise en place d'une <b>formalisation de la question</b> (Format de la question),<b>
                  avec des membres
                </b>(Type, cible, nom). Enfin, il faut <b>la lire et la traiter</b>.</p>
                </li>
                <li><p>
                  <b>L'envoi de la réponse</b>: l'outil retourne une réponse, pour que l'utilisateur sache la réponse à
                  sa question ou si l'assertion est juste ou non. Il faut donc choisir un <b>format de réponse</b>, ici,
                  des dataframes (pandas). Plus tard j'ai fait une <b>fonction de visualisation de cette réponse </b>(Fonction
                  de
                  visualisation).</p>
                </li>
                <li>
                  <p>
                    <b>La gestion de l'aspect opensource</b>: l'outil faisant parti d'un programme opensource
                    (
                    <InfoHover id="pymaboss">pyMaBoSS</InfoHover>
                    ) il faut également que je prenne en compte le temps
                    que documenter ce module me prendra.
                  </p>
                </li>
              </ul>
            </div>
            <div class="trace-content">
              <Trace traceId="decoupage-mcct"/>
            </div>
          </div>
        </div>

        <div v-if="activeRoot==='github'">
          <h2>Utiliser Github</h2>
          <div class="encadre-gris">
            <h3>Savoir-faire mobilisés</h3>
            <span class="green">Créer et gérer des branches</span>,
            <span class="light-blue">créer un fork</span>
          </div>
          <p>
            Une grande partie de la gestion de projet que j'ai eu à faire reposait sur l'utilisation de GitHub. Dans un
            projet opensource, tout le monde ne contribue pas sur la <span
              class="green">sur la branche principale</span>
            du
            <InfoHover id="repo">repository</InfoHover>
            d'origine. Cela créerait énormément de conflits et le projet
            n'aurait jamais de version stable. Pour palier à cela, il est possible de créer une branche depuis la
            branche
            principale du
            <InfoHover id="repo">repository</InfoHover>
            dans laquelle on peut faire tous les ajouts que
            l'on souhaite, puis ouvrir une demande de
            <InfoHover id="merge">merge</InfoHover>
            à l'administrateur du
            <InfoHover id="repo">repository</InfoHover>
            pour que nos modifications deviennent une partie intégrante du projet
            d'origine. Une autre utilité des branches, c'est de pouvoir garder une version qui marche et qui est stable
            lorsque l'on veut rajouter des fonctions qui pourraient affecter le fonctionnement déjà implémenté.
          </p>
          <div class="side-by-side inner-details">
            <div class="text-content">
              <h3>Comment cela se présente ?</h3>
              <p>
                Un
                <InfoHover id="repo">repository Github</InfoHover>
                est composé d'une branche principale (la branche
                centrale "main" de la <b>trace 7</b>). Il est possible de créer une ou plusieurs branche (<span
                  class="blue">branche A</span> et <span class="purple">branche B</span>)
                et de fusionner cette branche avec le contenu de la branche principale (<span class="red">merge</span>
                en rouge).
                A partir de ce point, le contenu de la branche <b>main</b> contient les modifications de la <span
                  class="purple">branche B </span>et
                les modifications de la branche <b>main</b> antérieures à la fusion.
              </p>
            </div>
            <div class="trace-content">
              <Trace traceId="branches-github"/>
            </div>
          </div>
          <div class="side-by-side inner-details">
            <div class="trace-content">
              <Trace traceId="branches-pymaboss"/>
            </div>
            <div class="text-content">
              <p>
                Dans le cas de mon stage, j'ai choisi de <span class="green">créer une branche</span> pour le projet
                pyMaBoSS
                en
                plus d'avoir <span class="light-blue">fait un <InfoHover id="fork">fork</InfoHover> du projet originel
                de Colomoto</span>,
                en bleu sous le nom du repo en haut sur la <b>trace 8</b> ci-contre.
                Dans le cadre de projet open-source, les contributeurs <span class="light-blue">n'ont pas les droits de
                modification sur les
                repository sur lesquels iels souhaitent contribuer. Faire un fork permet de créer une copie qui nous est
                propre.</span>
              </p>
              <p>
                Dans le cas des branches, j'en ai crée deux (entourées en vert ci-contre): temporal-logic pour l'ajout
                de tout le module et la branche automated-query qui m'a permis de faire des modifications conséquentes
                dans la logique d'exécution du programme <b>sans prendre le risque de tout casser</b> lorsque j'ai rajouté la gestion
                des simulations par le programme.

                <span class="green">Il est tout à fait
              possible de faire une branche se basant sur une autre que la principale.</span>
              </p>
            </div>
          </div>
          <SourcesSection ids="github-cct-fork"/>
          <div>
            <h3>Quelles sont les différences dans la gestion de version ?</h3>
            <p>
              Dans le quotidien de développement, il n'y a pas de grandes différences. Le seul changement principal
              c'est la
              commande de
              <InfoHover id="commit">commit</InfoHover>
              . En effet, une commande de
              <InfoHover id="commit">commit</InfoHover>
              et de
              <InfoHover id="push">push</InfoHover>
              classiques, comme j'ai pu beaucoup faire durant mon cursus à la forme : <code class="code-inline">git
              commit -m "message"</code>
              puis <code class="code-inline">git push origin nom_branche</code>. "Origin" fait référence au repository
              originel du
              projet et "main" à sa branche principale.
            </p>
            <p>
              Dans le cas où on
              <InfoHover id="push">pousse</InfoHover>
              des modifications sur un fork, il faut indiquer à
              git que l'on souhaite pousser non pas sur <code class="code-inline">origin</code> mais sur le fork. On va
              donc
              écrire : <code class="code-inline">git push my-fork nom_branche</code>. La commande de
              <InfoHover id="commit">commit</InfoHover>
              ,
              elle, ne change pas.
            </p>
            <p>
              Sur la trace ci-dessous vous pouvez voir à quoi cela ressemble dans mon terminal. La commande est entourée
              en rouge, on peut y voir le nom de mon fork <i>my-fork</i> et le nom de la branche sur laquelle je pousse,
              <i>temporal-logic</i>.
            </p>
            <Trace traceId="screen_push_fork"/>
          </div>
        </div>

        <div v-if="activeRoot==='chrono'">
          <h2>Chronologie du projet</h2>
          <div class="encadre-gris">
            <h3>Savoir-faire mobilisés</h3>
            <span class="purple">Découper en tâches</span>,
            <span class="dark-green">implémenter de manière séquencée</span>,
            <span class="pink">faire des commits qualitatifs</span>
          </div>
          <div>
            <h3>Développement piloté par le comportement</h3>
            <p>
              Pour gérer l'implémentation de mes fonctions, j'ai effectué un développement piloté par le
              comportement, ou <b>Behavior-Driven Development</b> (BDD) en <InfoHover id="ci">Intégration Continue</InfoHover>.
              Le principe repose sur une extension du
              <InfoHover id="tdd">Test-Driven Development</InfoHover> (TDD) mais à la place des tests (que seule l'équipe
              technique peut comprendre), on décrit le comportement de l'application dans un langage normalisé pour
              que tout le monde se comprennent (souvent le format Given / When / Then ou Etant donné / Quand /
              Alors).
            </p>
            <p>
              Cette méthode de développement me convient mieux car elle m'évite ce syndrome de la page blanche que les
              auteurs connaissent bien: je sais ce que je veux, mais par où commencer ?
              J'ai donc repris le schéma de la <TraceHover id="decoupage-mcct">trace 20</TraceHover> et j'ai fait un
              second découpage (que je ne schématise pas intégralement ici) de chaque fonction verte pour avoir une idée
              des composantes de son comportement.
            </p>
          </div>
          <div class="side-by-side">
            <div class="text-content">
              <p>
                Mais cela représente beaucoup de fonctions, il faut faire des choix de ce que l'on implémente en premier
                ou en dernier. Ce n'est pas une question d'urgence, <span class="purple">c'est de savoir ce qui est primordial au coeur du
                fonctionnement</span> <span class="exemple">le fait de pouvoir lire une assertion par exemple</span>.
              </p>
              <p>
                Sur la <b>trace 19</b> ci-contre, vous pouvez voir la liste des <span class="purple">comportements que je veux implémenter durant la
                semaine <b>n</b></span>. Le code couleur est purement personnel, le rouge m'indique que ce comportement est
                prioritaire: typiquement, le rouge en gras de la semaine 3. Il fallait que je m'assure que <span class="dark-green">
                ce qui avait déjà codé fonctionne correctement avant de faire une nouvelle fonctionnalité.
              </span>
                Cette méthode d'implémentation permet d'éviter <span class="purple">un grand nombre de bug en fusionnant tout
              le code en même temps.</span>
              </p>
              <p>
                En général, les comportements que je choisis d'implémenter sur une semaine sont indépendantes les unes
                des autres: je peux commencer n'importe où dans la liste (à moins que je me le sois précisé). Une fois
                que celui-ci a été implémenté et que tous les tests sont au vert, je mets une petite coche bleue. Également,
                je pousse ces changements sur github avec un <span class="pink">commit décrivant ce que je viens d'ajouter</span>.
                Comme je fais <i>beaucoup</i> de contribution en une journée, il est important que je les documente bien
                pour m'y retrouver quand je reviens le lendemain, ou même pour un développeur qui voudrait suivre la logique
                de développement que j'ai suivi.
              </p>
              <p>
                Si je n'ai pas pu le faire et que je dois le faire plus tard, je mets une croix. Si finalement, ce comportement
                n'est pas utile tout de suite, je mets une petite horloge pour le faire plus tard.
              </p>
            </div>
            <div class="trace-content">
              <Trace traceId="agile-semaines"/>
            </div>
          </div>
        </div>

        <div v-if="activeRoot==='bilan'">
          <h2>Bilan et évaluation</h2>
          <div class="inner-details">
            <h3>Suivre un projet en Agile</h3>
            <h4>Synthèse</h4>
            <p>
              A l'école, nous avions eu à suivre une logique <span class="dark-green">d'intégration continue</span>,
              afin de découvrir cette méthodologie. Avoir pu l'appliquer ici, <span class="purple">combinée à un Behavior-Driven Development (BDD),</span>
              m'a permis de mieux saisir l'intérêt et l'efficience de ces méthodes. En effet à l'école, on a souvent beaucoup
              de projet en même en temps, avec des méthodologies différentes, de matières différentes... comme je ne
              pouvais pas me dédier entièrement à un seul projet (le code <b>et</b> la gestion), l'application de la gestion
              restait souvent partielle.
            </p>
            <p>
              Ici, j'ai pu me dédier entièrement à ce projet,<span class="dark-green"> me permettant de mettre en place
              mon plan d'exécution</span>,<span class="blue"> de faire
              les découpages... </span> Bien qu'à l'aise en travaux de groupe, avoir pu travailler seul m'a permis d'intégralement
              gérer <span class="dark-green">l'implémentation à mon rythme</span> et donc d'être vraiment efficace.
            </p>
            <h4>Évaluation</h4>
            <p>
              Je pense sincèrement que je <b>connaissais</b> le principe de méthodes agiles plus que je ne <b>savais</b>
              les appliquer. Cela a clairement amélioré mon efficacité, je saisis mieux leur intérêt. C'est une manière
              de fonctionner que j'ai eu très naturellement, cela n'a pas été difficile de trouver les termes qui
              correspondaient à ma méthode.
            </p>
            <p>
              Étant seul, je n'ai pas eu à utiliser d'outil de gestion, si je devais refaire mon stage je n'en utiliserais pas.
              Je passerais certainement autant de temps à coder qu'à mettre en place et maintenir
              l'outil à jour, pour une personne seule, ça n'a que peu d'intérêt.
              De plus cela décentralise mes notes de <TraceHover id="agile-semaines"> mon programme d'implémentation</TraceHover>
              (tout étant actuellement dans un Notion
              que je découpe en pages), j'aurais certainement oublié l'existence de l'un des deux à termes et j'aurais
              perdu du temps.
            </p>
            <p>
              Enfin, par rapport à mes tuteurs, <ColleagueHover name="stoll">Gautier</ColleagueHover> et
              <ColleagueHover name="calzone">Laurence</ColleagueHover>, le rapport hebdomadaire et des contacts réguliers
              pour poser des questions ou les informer de mon avancement, étaient suffisants sans avoir besoin d'un
              outil pour suivre mon avancement sans me concerter.
            </p>
          </div>
          <hr class="separator">
          <div class="inner-details">
            <h3>Utiliser GitHub</h3>
            <h4>Synthèse</h4>
            <p>
              Github est dans mon quotidien de développeur depuis ma première année de BUT. C'est un outil très pratique
              de gestion de version
              mais je n'avais pas eu l'occasion d'utiliser toutes les fonctionnalités qu'il propose,<span class="green"> notamment la création
              de branches</span>, que je connaissais mais n'avais jamais fait. Aussi,<span class="light-blue"> le fork d'un projet</span> , que j'ai eu besoin
              de faire pour concevoir mon outil sur pyMaBoSS, était une fonctionnalité que je ne connaissais pas. A contrario,
              <span class="pink">faire des commits,</span> est une action que j'ai beaucoup effectuée. La principale
              différence avec les commits que j'ai pu avoir à faire pour mes projets personnels, des petits projets de cours
              ou des travaux de groupe courts, c'est <span class="pink">l'importance de la qualité des commits</span>. En
              effet, sur ces projets, je ne prenais pas forcément le temps de faire <span class="pink">des descriptions précises,
              et complètes.</span> Sans qu'ils ne soient complétement superficiels, leur importance était moindre du fait
              que ces projets n'avaient pas de portée longue dans le temps, pas de maintient à venir.
            </p>
            <p>
              Dans le cas de mon projet de stage, c'est l'exact inverse. C'est un projet opensource, d'autres personnes
              vont peut-être être amenées à travailler dessus à plus ou moins longs termes, il est important que les
              <span class="pink">commits soient complets et de qualité (et en anglais bien sûr)</span> afin qu'une autre
              personne voulant les consulter puisse avoir un aperçu exact de ce que j'ai fait.
            </p>
            <h4>Évaluation</h4>
            <p>
              Bien que non débutant dans l'usage de Github, j'ai progressé fortement dans son usage grâce à mon expérience
              à l'Institut Curie. Prendre ses marques sur un outil aussi utilisé que Github n'est pas difficile, il y a
              énormément de tuto en ligne qui décrivent étapes par étapes ce que nous pourrions avoir besoin de faire.
              C'était donc plus une question de pratiquer, ce que je maîtrise bien mieux maintenant sans aller jusqu'à
              être un expert.
            </p>
          </div>
        </div>

      </div>

    </section>
  </div>
</template>

<style scoped>
</style>