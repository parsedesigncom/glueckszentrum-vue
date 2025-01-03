import { createRouter, createWebHistory } from 'vue-router';
import {useAuthStore} from "@/stores/auth";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Cpanel from "@/views/Cpanel.vue";
import Coaches from "@/views/Coaches.vue";



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/coaches',
    name: 'Coaches',
    component: Coaches,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/cpanel',
    name: 'Cpanel',
    component: Cpanel,
    meta: { requiresAuth: true },
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation Guard
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  authStore.autoLogin();

  if (to.meta.requiresAuth && !authStore.token) {
    next('/login');
  } else {
    next();
  }
});

export default router;
