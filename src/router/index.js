import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout/index.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: Layout,
        redirect: '/woman'
    },
    {
        path: '/woman',
        component: Layout,
        children: [{
            path: '',
            component: () =>
                import ('../views/woman.vue'),
            name: 'woman'
        }]
    },
    {
        path: '/man',
        component: Layout,
        children: [{
            path: '',
            component: () =>
                import ('../views/man.vue'),
            name: 'man'
        }]
    },
    {
        path: '/clothing',
        component: Layout,
        children: [{
            path: '',
            component: () =>
                import ('../views/clothing.vue'),
            name: 'clothing'
        }]
    },
    {
        path: '/condom',
        component: Layout,
        children: [{
            path: '',
            component: () =>
                import ('../views/condom.vue'),
            name: 'condom'
        }]
    },
    {
        path: '/sm',
        component: Layout,
        children: [{
            path: '',
            component: () =>
                import ('../views/sm.vue'),
            name: 'sm'
        }]
    },
    {
        path: '/nurse',
        component: Layout,
        children: [{
            path: '',
            component: () =>
                import ('../views/nurse.vue'),
            name: 'nurse'
        }]
    },
    {
        path: '/cart',
        component: () =>
            import ('../views/cart.vue'),
        name: 'cart'
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router