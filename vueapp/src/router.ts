import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/Login.vue";
import Home from "@/Home.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/login',
            component: Login,
        }
    ],
})
