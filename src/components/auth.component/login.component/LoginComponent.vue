<style lang="" src="./LoginComponent.css"></style>
  <template>
    <div class="background-image" >
       <div class="login-container" v-if="loginView">
        <h2>OnFly</h2>
        <span class="slug">Viajar de avião não precisa ser um empecilho para o desenvolvimento dos seus negócios.</span>

       <form @submit.prevent="login">
          <div class="input-container" >
              <div class="container-separate">
                <div class="form-group">
                  <input class="input-control email" v-model="email" name="email" id="email" type="email" placeholder=" " autocomplete="off" required />
                  <label for="email" class="email-label">E-mail</label>
                  <i class="bi bi-envelope-at-fill"></i>

                </div>

                <div class="form-group">
                  <input class="input-control password" v-model="password" name="password" id="password" placeholder=" " type="password" required />
                  <label for="password" class="password-label">Senha</label>
                  <i class="bi bi-key-fill"></i>
                </div>
              </div>

              <div class="form-group">
                <input type="submit" value="Acessar" />
              </div>
              <div class="container-organize-registre">
                <span>Ainda não possui conta?</span>&nbsp;<router-link to="/register"><b>Cadastrar-se</b></router-link>
              </div>

              <a class="forgot-password" v-on:click="forgotPassword()"><b>Esqueci a minha senha</b></a>
          </div>


        </form> 
      </div>
      <div class="footer">
        <p class="text-footer">Onfly&nbsp;&copy;&nbsp;{{ date }}</p>
      </div>
    </div>
    <div class="background-gif" >
      <video src="../../../assets/videos/logo-main.mp4" muted autoplay loop width="100" height="100" ></video>
     
      
    </div>
  </template>
<script src="./LoginComponent.ts"></script>
