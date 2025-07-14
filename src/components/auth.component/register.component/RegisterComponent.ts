import axios from '../../../services/api';


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
      token: '',
      getToken:''
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
     
        this.token = this.object.token.data;
        this.getToken = this.object.token.token
       
        if (this.token) {
          this.$router.push({
          path: '/token',
          query: {
            name: this.name,
            email: this.email,
            password: this.password,
            access: 3,
            token: this.getToken
          }
          });
      }
     

      } catch (error) {
        console.error("Erro no login:", error);
      }
  }

  },
};