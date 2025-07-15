import { createRouter, createWebHistory } from 'vue-router';
import LoginComponent from '../components/auth.component/login.component/LoginComponent.vue';
import RegisterComponent from '../components/auth.component/register.component/RegisterComponent.vue';
import DashboardComponent from '../components/auth.component/dashboard.component/DashboardComponent.vue';
import ForgotPasswordComponent from '../components/auth.component/forgot-password.component/ForgotPasswordComponent.vue';

const routes = [
  { path: '/', name: 'Login', component: LoginComponent },
  { path: '/register', name: 'Register', component: RegisterComponent },
  { path: '/dashboard', name: 'Dashboard', component: DashboardComponent },
  { path: '/forgot-password', name: 'ForgotPassword', component: ForgotPasswordComponent }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
