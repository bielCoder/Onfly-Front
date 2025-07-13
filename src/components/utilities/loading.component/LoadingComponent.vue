<template>
  <div v-if="visible" class="loading-overlay">
   
         <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Carregando...</span>
        </div>
        <p>Carregando...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    }
  },
  mounted() {
    this.$emitter.on('show-loading', this.show);
    this.$emitter.on('hide-loading', this.hide);
  },
  unmounted() {
    this.$emitter.off('show-loading', this.show);
    this.$emitter.off('hide-loading', this.hide);
  },
  methods: {
    show() { this.visible = true; },
    hide() { this.visible = false; }
  }
}
</script>

<style scoped>
.loading-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  flex-direction:column;
}

.loading-overlay p {
    color:#fff;
    text-align: center;
}

</style>
