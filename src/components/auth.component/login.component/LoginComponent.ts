import axios from '../../../services/api';
import ErrorComponent from '../../utilities/error.component/ErrorComponent.vue';

export default {
  name: 'LoginComponent',
  data() {
    window.history.replaceState({}, '', '/');

    return {
      email: '',
      password: '',
      date: new Date().getFullYear(),
      object: [],
      token: '',
      loginView: true,
      error: '' // Erro local, não é prop!
    };
  },
  methods: {
    async login() {
      try {
        if (!this.email || !this.password) {
          this.error = 'Preencha e-mail e senha!';
          return;
        }

        const response = await axios.post('/auth/login', {
          email: this.email,
          password: this.password,
        });

        this.object = response.data;
        this.token = this.object.auth.data.token;
        sessionStorage.setItem("auth", this.token);

        if (this.token) {
          this.error = '' 
          this.$router.push('/dashboard');
        }

      } catch (error) {
        this.object = error.response.data;
        this.error = this.object.auth.message; // Passa o erro para a view
      }
    },

    register() {
      this.loginView = false;
      this.$router.push('/register');
    },

    forgotPassword() {
      this.loginView = false;
      this.$router.push('/forgot-password');
    }
  },
  components: { ErrorComponent }
};
