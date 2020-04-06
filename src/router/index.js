import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
    {
        path: '/contact',
        name: 'ContactForm',
        component: () => import('../views/ContactForm.vue')
    },
    {
        path: '/',
        name: 'About',
        component: () => import('../views/About.vue')
    },
    {
        path: '/outputs',
        name: 'Outputs',
        component: () => import('../views/Outputs.vue')
    },
    {
        path: '/skills',
        name: 'Skills',
        component: () => import('../views/Skills.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router