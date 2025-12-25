import {createRouter, createWebHistory} from "vue-router";
const routes =  [
    {
        name: 'home',
        path: '/',
        component: () => import('@/components/home_section.vue'),
    },
    {
        name: 'about',
        path: '/about',
        component: () => import('@/components/about_section.vue'),
    },
    {
        name: 'resume',
        path: '/resume',
        component: () => import('@/components/resume_section.vue'),
    },
    {
        name: 'contact',
        path: '/contact',
        component: () => import('@/components/footer_contact.vue'),
    },
    ]
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth'
            }
        }
        return { top: 0, behavior: 'smooth' }
    }
})

export default router