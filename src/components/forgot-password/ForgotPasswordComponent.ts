import axios from '../../services/api';


export default {
  name: 'ForgotPasswordComponent',
  data() {
 

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
   async submit() {
      try {

        if(!this.email)
        {
          return
        }

        const response = await axios.post('/auth/login', {
          email: this.email,
        });

        this.object = response.data;
        console.log(this.object)
        

      } catch (error) {
        console.error("Erro no login:", error);
      }
    },

  


  },
};