<template>
  <div>
    <LoginComponent />
  </div>
</template>

<script>
import LoginComponent from './components/login.component/LoginComponent.vue';



export default {
  name: 'App',
  components: {
    LoginComponent
  },
};
</script>

<style>
/* Pode deixar vazio ou adicionar estilos globais */
  *{
    margin: 0;
    padding: 0;
    font-family: 'Verdana';
  }
</style>
