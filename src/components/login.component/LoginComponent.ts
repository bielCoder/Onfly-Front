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
    
       
      await axios.post('/login', {
          email: this.email,
          password: this.password,
        }).then(response => {
            return response.data
      }).then((data) => {
          this.object = data;
          this.token = this.object.auth.data.token
          sessionStorage.setItem("auth",this.token)
          if(this.token)
          {
            this.$router.push('/dashboard');
          }

      })
     
    },
  },
};