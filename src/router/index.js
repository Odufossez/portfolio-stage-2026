import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../pages/home.vue'
import Technique from '../pages/technic.vue'
import Projet from '../pages/project.vue'
import Social from '../pages/social.vue'
import ContexteStage from '../pages/contexte-stage.vue'
import ContexteSujet from '../pages/contexte-sujet.vue'
import SavoirFaire from '../pages/savoir-faire.vue'

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Accueil },
    { path: '/technique', component: Technique },
    { path: '/projet', component: Projet },
    { path: '/social', component: Social },
    { path: '/contexte-stage', component: ContexteStage },
    { path: '/contexte-sujet', component: ContexteSujet },
    { path: '/savoir-faire', component: SavoirFaire },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router