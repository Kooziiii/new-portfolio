import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/contact',
        name: 'ContactForm',
        component: () => import('../views/ContactForm.vue')
    },
    {
        path: '/about',
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
    routes,
    scrollBehavior: (to, from, savedPosition) => {
        if (savedPosition) {
            return savedPosition;
        }

        if (to.hash) {
            return {selector: to.hash}
        }

        return {x: 0, y: 0};
    }
})

export default router