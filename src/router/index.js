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
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router