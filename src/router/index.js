import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../pages/home.vue'
import Technique from '../pages/technic.vue'
import Projet from '../pages/project.vue'
import Social from '../pages/social.vue'
import ContexteStage from '../pages/contexte-stage.vue'
import ContexteSujet from '../pages/contexte-sujet.vue'
import SavoirFaire from '../pages/savoir-faire.vue'
import InstitutCurie from '../pages/institut-curie.vue'
import Unit1331 from '../pages/unit-1331.vue'
import Moyens from '../pages/moyens.vue'
import RechercheMedicale from "@/pages/recherche-medicale.vue";
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
import DocumentationUml from "@/pages/savoirfaire-pages/documentation-uml.vue"
import DocumentationCpp from "@/pages/savoirfaire-pages/documentation-c++.vue"
import ParsingLogicalExpression from "@/pages/savoirfaire-pages/parsing-logical-expression.vue"
import Regex from "@/pages/savoirfaire-pages/regex.vue"
import DataTreatment from "@/pages/savoirfaire-pages/data-treatment.vue"
import CahierDesCharges from "@/pages/savoirfaire-pages/cahier-des-charges.vue"
import RechercheProjet from "@/pages/savoirfaire-pages/recherche-projet.vue"

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
    { path: '/savoirfaire-pages/documentation-uml', component: DocumentationUml },
    { path: '/savoirfaire-pages/documentation-c++', component: DocumentationCpp },
    { path: '/savoirfaire-pages/parsing-logical-expression', component: ParsingLogicalExpression },
    { path: '/savoirfaire-pages/regex', component: Regex },
    { path: '/savoirfaire-pages/data-treatment', component: DataTreatment },
    { path: '/savoirfaire-pages/cahier-des-charges', component: CahierDesCharges },
    { path: '/savoirfaire-pages/recherche-projet', component: RechercheProjet },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router