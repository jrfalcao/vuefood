import Home from '../views/Home.vue'

const routes = [{
        path: '/',
        component: () => import('../layouts/DefaultTemplate.vue'),
        children: [{
            path: '/',
            name: 'Home',
            component: Home
        }, {
            path: '/about',
            name: 'About',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
        }, {
            path: '/products',
            name: 'Products',
            component: () => import('../views/Products.vue')
        }, {
            path: '/cart',
            name: 'Cart',
            component: () => import('../views/Cart.vue')
        }]
    },
    {
        path: '/',
        component: () => import('../layouts/AuthTemplate.vue'),
        children: [{
                path: 'entrar',
                name: 'login',
                component: () => import('../views/auth/Login.vue')
            },
            {
                path: 'cadastrar',
                name: 'register',
                component: () => import('../views/auth/Register.vue')
            }
        ]
    }

]

export default routes;