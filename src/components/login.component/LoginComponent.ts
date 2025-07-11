import axios from '../../services/api';


export default {
  name: 'LoginComponent',
  data() {
 

    return {
      email: '',
      password: '',
      date: new Date().getFullYear(),
      object: [],
      token:''
    };
  },
  methods: {
   async login() {
      try {
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
  }

  },
};