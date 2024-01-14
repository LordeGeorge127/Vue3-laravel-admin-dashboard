import {createRouter, createWebHistory} from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import ResetPassword from "../views/ResetPassword.vue";
import RequestPassword from "../views/RequestPassword.vue";
import AppLayout from "../components/AppLayout.vue";
import store from "../store/index.js";
import Products from "../views/Products/Products.vue";
import NotFound from "../components/NotFound.vue";


const router =createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/app',
            alias: '/',
            component: AppLayout,
            meta:{
                requiresAuth:true
            },
            children:[
                {
                    path: 'dashboard',
                    name: 'app.dashboard',
                    component: Dashboard
                },
                {
                    path: 'products',
                    name: 'app.products',
                    component: Products
                },
            ]
        },

        {
            path: '/login',
            name: 'login',
            component: Login,
            meta:{
                requiresGuest:true,
            }
        },
        {
            path: '/request-password',
            name: 'requestPassword',
            component: RequestPassword,
            meta:{
                requiresGuest:true,
            }
        },
        {
            path: '/reset-password/:token',
            name: 'resetPassword',
            component: ResetPassword,
            meta:{
                requiresGuest:true,
            }
        },
        {
            path: '/:pathMatch(.*)',
            name: 'notFound',
            component: NotFound,

        },

    ]
});

router.beforeEach((to,from,next)=>{
    if (to.meta.requiresAuth && !store.state.user.token){
        next({name:'login'})
    }else if (to.meta.requiresGuest && store.state.user.token){
        next({name: 'app.dashboard'})
    }else {
        next()
    }
})

export default router;
