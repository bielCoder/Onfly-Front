<style lang="" src="./RegisterComponent.css"></style>
  <template>
    <div class="background-image" >
       <div class="login-container">
        <h2>Cadastro</h2>
        <form @submit.prevent="Register">
          <div class="input-container" >
              <div class="container-separate">
                <div class="form-group">
                  <input class="input-control name" v-model="name" name="name" id="name" type="text" placeholder=" " autocomplete="off" required />
                  <label for="name" class="name-label">Nome</label>
                  <i class="bi bi-person-fill"></i>

                </div>

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

                 <div class="form-group">
                  <input class="input-control password" v-model="confirm" name="confirm" id="confirm" placeholder=" " type="password" required />
                  <label for="confirm" class="password-label">Confirmar Senha</label>
                  <i class="bi bi-key-fill"></i>
                </div>
              </div>

              <div class="form-group">
                <input type="submit" value="Registrar" />
              </div>
              <div class="container-organize-registre">
                <span>Já possui cadastro?</span>&nbsp;<b><router-link to="/">Login</router-link></b>
              </div>

       
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
<script src="./RegisterComponent.ts"></script>
