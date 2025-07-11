// src/services/auth.service.ts
import api from './api';

export default {
  login(email, password) {
    return api.post('/auth/login', { email, password });
  },

  logout() {
    return api.post('/auth/logout');
  },

  getUserProfile() {
    return api.get('/auth/me');
  },
};
