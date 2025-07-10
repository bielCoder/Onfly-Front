import { createRouter, createWebHistory } from 'vue-router';
import LoginComponent from '../components/login.component/LoginComponent.vue';
import Dashboard from '../components/Dashboard.vue';  // crie esse componente

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginComponent,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
