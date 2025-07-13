<template>
  <router-view />
    <LoadingComponent />
</template>

<script>
import LoadingComponent from './components/utilities/loading.component/LoadingComponent.vue';

export default {
  name: 'App',
  components: {LoadingComponent}
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: 'Verdana';
}
</style>
