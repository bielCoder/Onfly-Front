import axios from '../../../services/api';


export default {
  name: 'LoginComponent',
  data() {
 
    window.history.replaceState({}, '', '/');

    return {
      email: '',
      password: '',
      date: new Date().getFullYear(),
      object: [],
      token:'',
      loginView: true
    };
  },
  methods: {
   async login() {
      try {

        if(!this.email || !this.password)
        {
          return
        }

        const response = await axios.post('/auth/login', {
          email: this.email,
          password: this.password,
        });

        this.object = response.data;
        this.token = this.object.auth.data.token;
        sessionStorage.setItem("auth", this.token);

        if (this.token) {
          this.$router.push('/dashboard');
        }

      } catch (error) {
        console.error("Erro no login:", error);
      }
    },

    register() {
      this.loginView = false;
      this.$router.push('/register');
    },

    forgotPassword()
    {
      this.loginView = false;
      this.$router.push('/forgot-password');
    } 

  },
};