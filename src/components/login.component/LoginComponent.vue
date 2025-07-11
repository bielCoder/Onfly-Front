<style lang="" src="./LoginComponent.css"></style>
  <template>
    <div class="background-image" >
       <div class="login-container" >
        <h2>OnFly</h2>
        <form @submit.prevent="login">
          <div class="input-container" >
              <div class="container-separate">
                <div class="form-group">
                  <input class="input-control email" v-model="email" name="email" id="email" type="email" placeholder=" " autocomplete="off" required />
                  <label for="email" class="email-label">E-mail</label>
                </div>

                <div class="form-group">
                  <input class="input-control password" v-model="password" name="password" id="password" placeholder=" " type="password" required />
                  <label for="password" class="password-label">Senha</label>
                </div>
              </div>

              <div class="form-group">
                <input type="submit" value="Acessar" />
              </div>

              <a>Esqueci a minha senha</a>
          </div>


        </form>
      </div>
      <div class="footer">
        <p class="text-footer">Onfly&nbsp;&copy;&nbsp;{{ date }}</p>
      </div>
    </div>
    <div class="background-gif" >
      <video src="../../assets/videos/logo-main.mp4" muted autoplay loop ></video>
     
      
    </div>
  </template>
<script src="./LoginComponent.ts"></script>
