// stores/auth.js
import { defineStore } from 'pinia';
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;


export const useAuthStore = defineStore('auth', {
  state: () => ({
    userData: null,
    token: null,
  }),
  actions: {
    async login(username, password) {
      try {
        const response = await axios.post('login', {
          username,
          password,
        });
        this.token = response.data.token;
        this.userData = response.data.userData;
        localStorage.setItem('token', this.token);
        localStorage.setItem('userData', JSON.stringify(this.userData));
        return true;
      } catch (error) {
        console.error('Login fehlgeschlagen:', error);
        return false;
      }
    },
    logout() {
      this.userData = null;
      this.token = null;
      localStorage.removeItem('token');
      localStorage.removeItem('userData');
    },
    autoLogin() {
      const token = localStorage.getItem('token');
      const userData = localStorage.getItem('userData');
      if (token && userData) {
        this.token = token;
        this.userData = JSON.parse(userData);
      }
    },
  },
});
