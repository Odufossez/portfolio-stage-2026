import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import Accueil from '../pages/home.vue'
import Technique from '../pages/technic.vue'
import Projet from '../pages/project.vue'
import Social from '../pages/social.vue'
import ContexteStage from '../pages/contexte-stage.vue'
import ContexteSujet from '../pages/contexte-sujet.vue'
import SavoirFaire from '../pages/savoir-faire.vue'
import InstitutCurie from '../pages/environnment-stage/institut-curie.vue'
import Unit1331 from '../pages/environnment-stage/unit-1331.vue'
import Moyens from '../pages/environnment-stage/moyens.vue'
import RechercheMedicale from "../pages/environnment-stage/recherche-medicale.vue";
import Enjeux from "@/pages/stage-enjeux.vue"
import Existant from "@/pages/stage-existant.vue"
import Sujet from "@/pages/stage-sujet.vue"
import Lexical from "@/pages/pages-compilation/lexical.vue"
import Sources from "@/pages/pages-compilation/sources.vue"
import Members from "@/pages/members-pages.vue"
import Traces from "@/pages/pages-compilation/traces-compilation.vue"
import GithubUsage from "@/pages/savoirfaire-pages/github-usage.vue"
import ModuleCreation from "@/pages/savoirfaire-pages/module-creation.vue"
import FlowCharts from "@/pages/savoirfaire-pages/flow-charts.vue"
import UnitTests from "@/pages/savoirfaire-pages/unit-tests.vue"
import JupyterNotebooks from "@/pages/savoirfaire-pages/jupyter-notebooks.vue"
import GeneralitiesDoc from "../pages/savoirfaire-pages/generalities-on-doc.vue"
import Parser from "@/pages/savoirfaire-pages/parser.vue"
import DataTreatment from "@/pages/savoirfaire-pages/data-treatment.vue"
import CahierDesCharges from "@/pages/savoirfaire-pages/cahier-des-charges.vue"
import RechercheProjet from "@/pages/savoirfaire-pages/recherche-projet.vue"
import RespectNormes from "@/pages/savoirfaire-pages/respect-normes.vue"
import SyntheseStage from "@/pages/synthese-stage.vue";

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Accueil },
    { path: '/technique', component: Technique },
    { path: '/projet', component: Projet },
    { path: '/social', component: Social },
    { path: '/contexte-stage', component: ContexteStage },
    { path: '/contexte-sujet', component: ContexteSujet },
    { path: '/savoir-faire', component: SavoirFaire },
    { path: '/institut-curie', component: InstitutCurie },
    { path: '/unit-1331', component: Unit1331 },
    { path: '/moyens', component: Moyens },
    { path: '/recherche-medicale', component: RechercheMedicale },
    { path: '/stage-enjeux', component: Enjeux },
    { path: '/stage-existant', component: Existant },
    { path: '/stage-sujet', component: Sujet },
    { path: '/lexical', component: Lexical },
    { path: '/sources', component: Sources },
    { path: '/members', component: Members },
    { path: '/traces-compilation', component: Traces },
    { path: '/savoirfaire-pages/github-usage', component: GithubUsage },
    { path: '/savoirfaire-pages/module-creation', component: ModuleCreation },
    { path: '/savoirfaire-pages/flow-charts', component: FlowCharts },
    { path: '/savoirfaire-pages/unit-tests', component: UnitTests },
    { path: '/savoirfaire-pages/jupyter-notebooks', component: JupyterNotebooks },
    { path: '/savoirfaire-pages/generalities-on-doc', component: GeneralitiesDoc },
    { path: '/savoirfaire-pages/parser', component: Parser },
    { path: '/savoirfaire-pages/data-treatment', component: DataTreatment },
    { path: '/savoirfaire-pages/cahier-des-charges', component: CahierDesCharges },
    { path: '/savoirfaire-pages/recherche-projet', component: RechercheProjet },
    { path: '/savoirfaire-pages/respect-normes', component: RespectNormes },
    { path: '/synthese-stage', component: SyntheseStage },

]

const router = createRouter({
    history: createWebHashHistory('/portfolio-stage-2026/'),
    routes
})

export default router