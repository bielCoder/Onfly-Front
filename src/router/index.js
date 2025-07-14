import { createRouter, createWebHistory } from 'vue-router';
import LoginComponent from '../components/auth.component/login.component/LoginComponent.vue';
import DashboardComponent from '../components/auth.component/dashboard.component/DashboardComponent.vue';
import RegisterComponent from '../components/auth.component/register.component/RegisterComponent.vue';
import TokenComponent from '../components/auth.component/token.component/TokenComponent.vue';
import ForgotPasswordComponent from '@/components/auth.component/forgot-password.component/ForgotPasswordComponent';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginComponent,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    meta: { requiresAuth: true } //  proteção ativada
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterComponent,
  },
  {
    path: '/token',
    name: 'Token',
    component: TokenComponent,
  },
  {
    path: '/forgot-password',
    name: 'Recovery',
    component: ForgotPasswordComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

//  Proteção de rota
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!sessionStorage.getItem('auth');

  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/'); // redireciona para login se não tiver token
  } else {
    next(); // segue normalmente
  }
});

export default router;
