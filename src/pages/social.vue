<script setup>
import {ref} from "vue";
import Trace from "@/components/Trace.vue";
import InfoHover from "@/components/InfoHover.vue";
import TraceHover from "@/components/TraceHover.vue";
import ColleagueHover from "@/components/ColleagueHover.vue";
import BackButton from "@/components/BackButton.vue";

import teamMeetingPdf from "@/assets/Team meeting.pdf";

const activeRoot = ref('team-meeting');
</script>

<template>

  <div class="page-container">
    <header class="page-header">
      <BackButton to="/home" label="Retour à l'accueil"/>
      <h1>Intégration en entreprise</h1>
      <p>
        Cette partie permet de présenter les savoir-faire que j'ai eu à mobiliser dans le cadre de mon intégration en
        entreprise.
      </p>
    </header>
    <section class="missions-section">
      <div class="tabs-list">
        <button class="tab-item" :class="{active: activeRoot==='team-meeting'}"
                @click="activeRoot='team-meeting'">
          Les "Team meeting"
        </button>
        <button class="tab-item" :class="{active: activeRoot==='my-presentation'}"
                @click="activeRoot='my-presentation'">
          Ma présentation
        </button>
        <button class="tab-item" :class="{active: activeRoot==='journal-club'}" @click="activeRoot='journal-club'">
          Les journal club
        </button>
        <button class="tab-item" :class="{active: activeRoot==='cahier-des-charges'}"
                @click="activeRoot='cahier-des-charges'">
          Établissement du cahier des charges
        </button>
        <button class="tab-item" :class="{active: activeRoot==='bilan'}" @click="activeRoot='bilan'">
          Bilan et évaluation
        </button>
      </div>

      <div class="styled-box mission-content">
        <div v-if="activeRoot==='team-meeting'">
          <h2>Les "Team meeting"</h2>
          <div class="encadre-gris">
            <h3>Savoir-faire mobilisés</h3>
            <p>
              <span class="blue">Prendre des notes</span>, <span class="purple">communiquer en anglais</span>
            </p>
          </div>
          <p>
            Tous les mardi à 14h, il y a un <b>team meeting</b>. C'est une réunion en petit comité (environ 15
            personnes),
            toutes de l'équipe U1331, durant laquelle une personne désignée à l'avance présente son projet en cours.
            Pour cela
            iel utilise un diaporama comme support dans lequel iel rappelle le sujet sur lequel iel travaille. Iel va
            présenter
            la ou les tumeurs concernées, la méthodologie, la
            <InfoHover id="cohort">cohorte</InfoHover>
            qui participe à
            l'étude et la problématique: qu'est ce qui cherche à être démontré ?
          </p>
          <p>
            Ces meetings sont un moment privilégiés qui permettent de mettre en commun des idées, de poser des
            questions...
            C'est aussi au cours d'un de ces meetings que j'ai pu présenter mon projet à toute l'équipe. Sur la
            <TraceHover id="team-meeting">trace numéro
              16 ci-dessous
            </TraceHover>
            le programme de passage pour les team meetings, en encadré rouge on peut voir que le 19 Mai ce devait être
            <ColleagueHover name="bruning">Victoria</ColleagueHover>
            qui parlait de sa thèse. Cependant, elle a accepté de céder sa place afin que je puisse parler et
            que je présente mon projet.
          </p>
          <p>
            Bien que souvent très orientés biologie, j'ai assisté à tous les meetings car ils sont très intéressant. Ils
            me permettent de mieux comprendre ce qui est fait au sein de l'équipe et par qui. Cela m'a aussi permis
            d'apprendre beaucoup de chose en biologie, souvent des concepts ou des choses très très précises même sans
            leur contexte.
          </p>
          <p>
            Ces meetings ont <b class="blue">stimulé ma capacité de prise de note</b> ainsi que ma <b class="purple">compréhension
            orale en
            anglais</b>, ceux-ci
            se faisant toujours dans cette langue. L'Institut travaillant avec l'Europe entière, de nombreux accents
            se rencontrent lors de ces meetings durant lesquels l'anglais de personne n'est parfait.
          </p>
          <Trace traceId="team-meeting"/>
        </div>

        <div v-if="activeRoot==='my-presentation'">
          <h2>Ma présentation pour le team meeting</h2>
          <div class="encadre-gris">
            <h3>Savoir-faire mobilisés</h3>
            <p>
              <span class="green">Réaliser une présentation</span>, <span class="purple">communiquer en anglais</span>,
              <span class="orange">prendre en compte le contexte biologique</span>,
              <span class="pink">suivre une démarche de recherche scientifique</span>
            </p>
          </div>
          <p>
            Présenter mon projet après 6 semaines de travail dessus a été un grand moment pour moi. J'avais la sensation
            que c'est à ce moment là que tout ce que j'avais fait prenait forme concrètement. Cet exercice m'a permis
            de mobiliser mes connaissances en <b class="green">présentation orale (faire un diaporama cohérent et
            propre, s'exprimer à
            l'oral)</b>
            et en plus de les faire en <b class="purple">anglais</b>.
          </p>
          <div>

            Mon diaporama est consultable ci-dessous. <span class="green"> Mon plan était en 4 parties</span> :

            <ul>
              <li>Me présenter,</li>
              <li>Présenter MaBoSS et MaBoSS_test,</li>
              <li>Montrer quelques exemples,</li>
              <li>Présenter mes résultats sur mes tests avec les LLMs.</li>
            </ul>
          </div>
          <br>
          <p>
            J'y rappelle l'utilité de MaBoSS ainsi que la problématique qui existe en lien avec la conception et la
            validation de modèles (diapositive 5).<span class="orange">Sans rentrer dans les détails de fonctionnement d'un modèle booléen, puisque l'équipe
            sait de quoi il s'agit, j'explique la pertinence de mon outil dans le cadre de cette pipeline de
            construction,
            validation et optimisation de modèles (diapositives 6 et 7). </span>
          </p>
          <p>
            Je présente mon outil, comment les queries se construisent pas à pas afin de proposer un chemin de réflexion
            à mon auditoire suivi de la présentation des résultats (diapositives 8 à 16). <span class="green">Dans cette partie, j'ai grisé
            la droite des visuels afin de concentrer l'attention de mon auditoire sur la partie gauche</span>. En effet,
            la
            partie droite comprend surtout des informations technique, ce n'est pas le but de ce team meeting de faire
            une formation mais une présentation plus générale. En revanche, si j'ai laissé ces informations ce n'est pas
            pour rien. En effet, cette présentation a été laissé à disposition des chercheurs et chercheuses. Avoir ces
            informations techniques les aideront à réaliser leurs propres queries dans le futur.
          </p>
          <p>
            Ayant pu terminé en avance mon outil, j'ai pu m'intéresser à des problématiques plus poussées, comme
            l'automatiser
            de ce processus notamment à l'aide de l'IA (diapositives 17 à 19). Dans un premier temps, je souhaitais
            connaître la capacité des
            LLMs à convertir des phrases issues de la littérature scientifique en query. Pour cela j'ai fait un prompt
            complet et structuré que j'ai donné à chacun des agents testés : <i>Gemini 3 flash et raisonnement</i>, <i>ChatGPT
            GPT-5.5</i>
            et <i>Claude Sonnet 4.6</i>.<span class="pink">Enfin j'ai comparé les résultats sur 3 assertions plus ou moins longues et tiré
            des conclusions de cette expérience </span> (diapositives 21 à 32).
            <b class="pink">C'est une démarche très similaire aux démarches utilisées en recherche</b> que j'ai donc dû
            découvrir et
            apprendre.
          </p>
          <p>
            Je clos la présentation par les <span class="green"> prochaines perspectives pour le projet et les conclusions tant sur le projet
            que sur mes propres projets d'études </span> (diapositives 33 et 34).
          </p>
          <div class="presentation-container">
            <iframe
                :src="teamMeetingPdf"
                width="100%"
                height="600px"
                style="border: none; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);"
                title="Présentation Team Meeting">
            </iframe>
          </div>
        </div>

        <div v-if="activeRoot==='journal-club'">
          <h2>Les journal club</h2>
          <div class="encadre-gris">
            <h3>Savoir-faire mobilisés</h3>
            <p>
              <span class="purple">Communiquer en anglais</span>, <span class="blue">prendre des notes</span>,
              <span class="orange">prendre en compte le contexte biologique</span>
            </p>
          </div>
          <p>
            Les journal clubs sont des réunions courtes qui ont lieu au mieux tous les 15 jours sinon une fois par mois.
            De même que pour les team meetings, une personne est désignée à l'avance pour faire la revue d'un article
            scientifique ou de sciences qui concerne les sujets de recherche présents dans l'équipe. Dans la
            <TraceHover id="journal-club">trace numéro 17</TraceHover>
            ci-dessous,
            <ColleagueHover name="bruning">Victoria</ColleagueHover>
            nous informe à l'avance de l'article qui a retenu son attention et nous envoie le lien.
          </p>
          <p>
            Je n'ai pas présenté d'article au cours de ces club mais j'y ai toujours assisté car plus que de juste le
            résumé,
            le journal club explicite ce qui est abordé dans l'article et c'est toujours intéressant. Également, les
            participants donnent
            leurs avis, exprime des remarques... C'est aussi un bon moment de brainstorming pour leurs propres sujets de
            thèse ou de
            stage.<span class="orange">L'esprit de réflexion est stimulé lorsqu'il s'agit de s'interroger sur la pertinence du papier ou les
            choix de méthodes.</span>
          </p>
          <p>
            De même que les team meetings, ces réunions m'ont permis de <b class="blue">progresser en prise de note</b>
            et en <b class="purple">anglais</b>.
            <span class="orange">Le langage
            employé étant technique</span>, il n'est pas toujours simple de comprendre, j'avais beaucoup de mal au début
            mais
            avec
            les semaines passant et baigné dans cet environnement à moitié en anglais (voir plus), j'ai rapidement pris
            l'habitude et sur la fin je n'avais <b class="purple">aucun mal à comprendre les autres</b>, ce qui était
            dit ainsi que <b class="purple">m'exprimer
            en retour</b>
            ou <b class="purple">passer d'une langue à l'autre</b>.
          </p>
          <Trace traceId="journal-club"/>
        </div>

        <div v-if="activeRoot==='cahier-des-charges'">
          <h2>Établissement du cahier des charges de mon projet d'outil de vérification de modèles</h2>
          <div class="encadre-gris">
            <h3>Savoir-faire mobilisés</h3>
            <p>
              <span class="orange">Prendre en compte le contexte biologique</span>,
              <span class="light-blue">réaliser un cahier des charges</span>,
              <span class="dark-green">travailler dans un contexte opensource</span>
            </p>
          </div>
          <p>
            Au cours de mes études, j'ai eu à respecter des cahiers des charges qui se présentaient sous forme de
            consignes.
            Ils étaient donc souvent très clairs, les limites et les attendus étaient établis. Dans le cadre de mon
            stage,
            c'est à moi de savoir ce qu'attendent
            <ColleagueHover name="calzone">Laurence</ColleagueHover>
            et
            <ColleagueHover name="stoll">Gautier</ColleagueHover>
            en leur posant des questions, en notant ce qu'ils veulent...
          </p>
          <p>
            Bien souvent, cela se présente sous forme de phrase <i>"On aurait besoin que tu fasses [tâche]."</i> mais
            c'est à
            moi de <span class="light-blue">poser les questions techniques sur les attendus de sortie de cette implémentation.</span>
          </p>
          <div class="exemple">
            <p>"On aimerait pouvoir vérifier qu'un taux de probabilité augmente, descend ou reste stable si on fait
              muter le modèle."</p>
            <p>Cela implique pour moi de comprendre plusieurs choses :</p>
            <ul class="orange">
              <li>Comment se manifeste une mutation dans les simulations ?</li>
              <li>Qu'est ce que cela implique au niveau des simulations ? Faut-il en prévoir plusieurs ?</li>
              <li>Comment j'intègre cette instruction dans mon programme ?</li>
            </ul>
          </div>
          <br> <br>
          <div>
            <p>
              <b>La communication</b> est le pilier de la réussite du projet pyMaBoSS.
              Tout au long de mon stage, j'ai maintenu un dialogue constant avec mon tuteur et
              l'équipe de recherche. Ces échanges réguliers m'ont permis de :
            </p>
            <ul>
              <li>Valider les étapes clés de la conception du module.</li>
              <li>Partager l'avancement de mon travail et lever les points de blocage rapidement.</li>
              <li class="dark-green">M'assurer que mon code s'intègre harmonieusement dans l'écosystème existant,
                notamment pyMaBoSS.
              </li>
            </ul>
          </div>
          <br>
          <div>
            <p>
              <span class="light-blue">Savoir poser les bonnes questions est crucial pour définir les spécifications techniques.</span>
              Pour le développement du parser et du traitement de données, j'ai dû
              interroger l'équipe sur :
            </p>
            <ul class="orange">
              <li><strong>Les cas d'usage réels :</strong> Quel type de requêtes les chercheurs vont-ils saisir ?</li>
              <li><strong>Les priorités :</strong> Quelles fonctionnalités logiques étaient indispensables pour
                la première version ?
              </li>
            </ul>
            <p>Cette démarche m'a permis d'éviter les malentendus et de livrer un outil qui répond vraiment au
              besoin.</p>
          </div>
          <hr class="separator">
          <div class="text-content">
            <p>
              Comme expliqué plus haut, je n'avais pas de consignes bien claires et détaillées mais plutôt une ligne
              directrice générale. Ci-dessous, vous pouvez voir la
              <TraceHover id="cdc">trace numéro 18</TraceHover>
              qui
              est une capture d'écran de mon Notion, outil que j'ai utilisé pendant mon stage pour m'organiser et
              centraliser
              mes informations.
            </p>
            <p>
              Vous pouvez constater que ce cahier des charges est une succession de points, des notes que j'ai prise
              lors
              d'une discussion avec mes tuteurs. Il n'était pas nécessaire dans mon cas d'<b class="light-blue">établir
              un cahier des charges</b>
              très imposant et détaillé mais plutôt de garder une certaine souplesse afin de <span class="dark-green">permettre une généralisation
              de l'application de l'outil.</span>
            </p>
            <p>
              Ces points importants combinés à l'ancienne application (MaBoSS_test) pour me servir de référence, étaient
              suffisants pour me permettre de travailler et de rendre un outil d'évaluation cohérent, efficace et utile.
            </p>
          </div>
          <div class="image-content">
            <Trace traceId="cdc"/>
          </div>
        </div>

        <div v-if="activeRoot==='bilan'">
          <h2>Bilan et évaluation</h2>
          <div class="inner-details">
            <h3>Communiquer sur un outil</h3>
            <h4>Synthèse</h4>
            <p>
              Durant mon stage, j'ai donc eu non seulement à réaliser un outil mais également à communiquer à propos de
              celui-ci. Le contexte de <span class="orange">recherche</span> mais aussi du fait que cet outil vient
              compléter un logiciel <span class="dark-green">opensource</span> font que ces transmissions de savoirs
              doivent se faire <span class="purple">en anglais</span>.
            </p>
            <p>
              A part de la documentation du code qui ne concerne pas les utilisateurs habituels (les chercheurs), je
              devais
              concevoir <span class="dark-green">des tutos, des exemples, une <InfoHover
                id="ref-card">ref card </InfoHover>...</span> autant de documents à
              réaliser en <span class="purple">anglais</span> qui devaient être
              <span class="dark-green">clairs, concis et accessibles.</span>
            </p>
            <h4>Evaluation</h4>
            <p>
              Il y a une expression que j'aime bien utiliser, que je trouve appropriée pour ce type de travaux : "<i>
              c'est plus pas facile que c'est compliqué
            </i>".
              En effet, ce qui est en demandé en soi n'est pas difficile. D'autant que de part mon expérience en tant
              qu'apprenti à Stellantis (2018-2021), j'ai eu à rédiger des documents techniques à destination des
              utilisateurs,
              des procédures... donc ce n'était <b>pas une découverte pour moi.</b>
            </p>
            <p>
              Qu'est ce qui rend alors ce travail "pas facile"? Deux aspects:
            </p>
            <ul>
              <li class="orange">La transposition à un contexte que je ne maîtrise pas.</li>
              <li class="purple">La rédaction en anglais.</li>
            </ul>
            <p>
              Le contexte de <span class="orange">recherche biologique</span> complexifie la tâche car je dois rendre
              mes
              documents accessibles à des utilisateurs qui eux ont des connaissances biologiques. Difficile pour moi de
              savoir ce qu'ils savent, ce qu'ils ne savent pas et que je dois alors expliquer. Je ne peux pas dire que
              j'ai progressé en biologie. Oui je reconnais certains mots, certaines notions... mais je ne sais pas ce
              qu'elles impliquent. <b>Ce que je sais par contre, ce sont les aspects de la modélisation booléenne que
              tout
              le monde ne connaît pas.</b> Donc je me rend mieux compte de ce que je dois communiquer à la fin de mon
              stage qu'au début.
            </p>
            <p>
              Ensuite, <span class="purple">la rédaction en anglais.</span> <b>Étant bilingue, rédigé en anglais n'est
              pas
              du tout quelque chose qui représente un obstacle pour moi.</b> Cependant, encore une fois, le <span
                class="orange">contexte</span>
              peut influencer sur ma précision, sur l'interprétation des mots que j'utilise. Heureusement, mon aisance
              dans
              cette langue m'a permis de développer rapidement le vocabulaire qui me manquait et donc je peux fournir
              des explications clairs en utilisant le bon vocabulaire, comme j'ai pu le faire lors de ma <span
                class="green">présentation</span>,
              qui a été très bien comprise et reçue par l'ensemble de l'équipe. Je peux donc dire que, plus que mon
              anglais,
              j'ai surtout développé ma capacité à m'adapter à mon environnement, déjà existante mais que j'ai pu
              étendre
              <span class="orange">à un nouveau contexte qu'est la recherche</span>.
            </p>
          </div>
          <hr class="separator">
          <div class="inner-details">
            <h3>Participer à des meetings</h3>
            <h4>Synthèse</h4>
            <p>
              Au sein de l'Institut Curie, les présentations sur son ou ses sujets de recherches courants font parties
              de la <span class="pink">méthodologie de recherche</span> employée.
              En effet, <span class="green">réaliser une présentation sur son sujet permet de travailler sa capacité d'explication,
            de synthèse...</span>. Celles-ci sont aussi un moment privilégié pour débattre ou soumettre des idées.
            </p>
            <p>
              Comme je travaille avec <span class="orange">des chercheurs (biologistes et/ou bio-informaticiens)</span>
              j'ai des compétences informatiques qu'iels n'ont pas. L'exercice de <span class="green">présenter</span>
              mon
              travail aux futurs utilisateurs, qui eux, ne sont pas concernés par le code, mais plutôt par les fonctions
              utilisables et comment. <span class="green">Je devais réaliser une présentation complète et claire qui
            présentait l'intérêt de mon travail et ce que mon module permettait de faire.</span>
            </p>
            <p>
              Enfin, je n'ai présenté qu'une seule fois mais j'ai assisté à tous les meetings, que ce soit ceux en
              équipe
              (le mardi) et ceux d'unité (le jeudi, également <span class="purple">en anglais</span>). Toujours orienté
              très
              biologiques, les premiers <b>étaient très difficiles à suivre</b>, je ne comprenais <i>rien</i>. Mais avec
              le temps, j'ai réussi à saisir des concepts, des termes, des mots qui revenaient souvent... et à la fin,
              j'arrivais à <span class="purple">suivre un meeting et à poser des questions.</span> La bienveillance de
              l'
              équipe jouant, ils m'encourageaient à poser des questions même si elles me paraissaient peu pertinentes
              car
              sur <span class="orange"> une notion connue de tous les autres.</span>
            </p>
            <h4>Evaluation</h4>
            <p>
              Que ce soit par l'école ou mon expérience passée, <span class="green"> je savais déjà faire une présentation et respecter des
              normes de diaporama (peu de mots, support visuel, animation, titres...)</span>. J'ai donc juste eu à
              transposer ce que je savais faire au contexte de mon sujet, donc ça n'était pas difficile, <b> je ne suis pas
              sûr d'avoir particulièrement progressé étant donné que je n'ai pas beaucoup mobilisé ces compétences.</b>
            </p>
          </div>
          <hr class="separator">
          <div class="inner-details">
            <h3>Répondre à des besoins</h3>
            <h4>Synthèse</h4>
            <p>
              Comme je l'ai expliqué précédemment, le <span class="light-blue">recueil des besoins</span> s'est fait
              aussi bien par <span class="light-blue"> des consignes données </span> dès le début par mes tuteurs, que par
              moi qui <span class="light-blue">suis allé poser des questions</span> à celleux qui utilisent l'outil pour
              savoir ce dont ils avaient <b>besoin</b> pour améliorer leur travail.
            </p>
            <p>
              Ces besoins je les ai recueillis et mis à l'écrit dans une liste afin de les décomposer en fonction, pour
              pouvoir les implémenter. En utilisant les exemples de MaBoSS_test, j'ai pu recréer ces évaluations pour
              établir si mon module répondait aux besoins et <span class="dark-green"> réaliser un tutoriel. </span>
            </p>
            <h4>Evaluation</h4>
            <p>
              Dans ce vaste domaine qu'est "Répondre à des besoins", on peut inclure le fait de <b> suivre des consignes données
              par des enseignants.</b> Finalement, ce que j'ai eu à faire ici n'est pas si différent. Sauf que dans le cadre
              de mon stage, personnes ne sait faire ce que je fais. C'est à moi de
              <span class="light-blue">
                choisir comment j'implémente la fonction, proposer d'autres possibilités, encourager mes collègues à
                me demander des choses plus précises, plus pointues...
              </span>
              Cela rend le travail passionnant de devoir coder un module en ne pensant pas qu'à ce qu'on est en train d'implémenter
              mais aussi les places que je veux laisser pour <span class="dark-green"> ajouter d'autres options, d'autres évaluations...</span>
            </p>
            <p>
              Ainsi, même si j'ai parfois beaucoup de mal à suivre une consigne scolaire parce qu'elle ne me semble pas
              logique, avoir plus de place pour mes idées, mes propositions, faire l'implémentation comme je le sens, me
              fait me rendre compte que je suis tout à fait capable de rendre un projet très correct voire même bon,<span class="orange"> qui
              répond à des besoins très précis.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>

</style>