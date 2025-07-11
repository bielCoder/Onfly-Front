import axios from '../../services/api';


export default {
  name: 'RegisterComponent',
  data() {
 
   
    window.history.replaceState({}, '', '/');
    
    return {
      name: '',
      email: '',
      password: '',
      confirm: '',
      date: new Date().getFullYear(),
      object: [],
      token: ''
    };
  },
 
  methods: {
   async Register() {

      if(this.password !== this.confirm)
      {
          return 
      }

      try {
        const response = await axios.post('/auth/register', {
          name: this.name,
          email: this.email,
          password: this.password,
          access: 3
        });

        this.object = response.data;
        this.token = this.object.auth.data.token;
        sessionStorage.setItem("auth", this.token);

        if (this.token) {
          this.$router.push('/token');
        }
     

      } catch (error) {
        console.error("Erro no login:", error);
      }
  }

  },
};