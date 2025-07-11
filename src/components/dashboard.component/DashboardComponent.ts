import api from "@/services/api";



export default {
  name: 'DashboardComponent',
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
   async logout() {
        try {
          await api.post('/auth/logout'); // primeiro chama o backend com o token ainda presente
        } catch (error) {
          console.warn('Erro ao fazer logout na API:', error);
        } finally {
          sessionStorage.removeItem('auth'); // só remove o token depois
          this.$router.push('/'); // redireciona para o login
        }
    }
  },
};