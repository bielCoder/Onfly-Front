// import axios from '../../services/api';

export default {
  name: 'TokenComponent',
  data() {
    return {
      email: '',
      password: '',
      date: new Date().getFullYear(),
      object: [],
      token: '',
      loginView: true,
      otp: ['', '', '', '', '', ''], // ✅ ADICIONADO
      codes: Array(6).fill('')
    };
  },
  methods: {
    async getToken() {
        const token = this.codes.join('');
        console.log(token); // "165106"
    },

    register() {
      this.loginView = false;
      this.$router.push('/register');
    },

    onInput(index, event) {
      const value = event.target.value;
      if (/^[0-9]$/.test(value)) {
        this.otp[index] = value;

        // move para o próximo input
        const nextInput = this.$refs.otpInputs[index + 1];
        if (nextInput) {
          nextInput.focus();
        }
      } else {
        this.otp[index] = '';
      }
    },

   changeInput(index) {
      // Verifica se há um próximo input e foca nele
      const nextInput = this.$refs.inputs[index + 1];
      if (nextInput) {
        nextInput.focus();
      }
  },
  
 

   handleBackspace(event, index) {
      if (event.key === 'Backspace') {
        // Apaga o campo atual
        this.codes[index] = '';

        // Vai para o campo anterior
        const prevInput = this.$refs.inputs[index - 1];
        if (prevInput) {
          this.$nextTick(() => {
            prevInput.focus();
          });
        }

        // Impede o comportamento padrão (como mover o cursor)
        event.preventDefault();
      }
    },

    allowOnlyDigits(event) {
        const key = event.key;
        if (!/^\d$/.test(key)) {
          event.preventDefault();
        }
    },

    onArrowKey(index, direction) {
      const nextInput = this.$refs.otpInputs[index + direction];
      if (nextInput) {
        nextInput.focus();
      }
    },

    handlePaste(event) {
      const pasteData = event.clipboardData.getData('text').replace(/\D/g, '');
      for (let i = 0; i < pasteData.length && i < this.otp.length; i++) {
        this.otp[i] = pasteData[i];
      }
    }
  }
};
