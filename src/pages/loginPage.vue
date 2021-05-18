<template>
  <ion-page>
    <ion-content class="bg_color">
      <div class="banner">
        <div class="logo_box">
          <!-- <img src="assets/images/logo.png"> -->
        </div>

        <div class="banner_images">
          <img
            src="assets/icon/Envintro-logo2.png"
            class="animate__animated animate__slideInUp"
          />
        </div>

        <div class="form">
          <form>
            <ion-list lines="none">
              <!-- <ion-item class="animate__animated animate__fadeInUp" lines="none">
                                    <div class="ite_inner d-flex">
                                        <ion-icon class="zmdi zmdi-globe-alt ion-text-start"></ion-icon>
                                        <ion-label mode="md" position="fixed">{{"select_country" | translate}}</ion-label>
                                        <ion-select mode="md" cancelText="{{'cancel' | translate}}" okText="{{'done' | translate}}" placeholder="{{'select_country' | translate}}">
                                            <ion-select-option value="1">Brazil</ion-select-option>
                                        </ion-select>
                                    </div>
                                </ion-item> -->

              <ion-item
                class="animate__animated animate__fadeInUp"
                lines="none"
              >
                <!-- <ion-label position="fixed">{{'mobile_number' | translate}}</ion-label>-->
                <div class="ite_inner d-flex">
                  <ion-icon
                    :icon="icons.phonePortrait"
                    class="zmdi zmdi-smartphone-iphone ion-text-start"
                  ></ion-icon>
                  <ion-input
                    v-model="form.email"
                    type="email"
                    name="username"
                    placeholder="Email Address"
                  ></ion-input>
                </div>
              </ion-item>
              <ion-item
                class="animate__animated animate__fadeInUp"
                lines="none"
              >
                <!-- <ion-label position="fixed">{{'mobile_number' | translate}}</ion-label>-->
                <div class="ite_inner d-flex">
                  <ion-icon
                    :icon="icons.lockClosed"
                    class="zmdi zmdi-lock ion-text-start"
                  ></ion-icon>
                  <ion-input
                    type="password"
                    v-model="form.password"
                    name="password"
                    placeholder="Password"
                  ></ion-input>
                </div>
              </ion-item>
              <ion-button
                @click="loginUser"
                size="large"
                shape="block"
                class="btn animate__animated animate__fadeInUp"
                type="button"
                >Login</ion-button
              >
            </ion-list>
          </form>

          <p>&nbsp;</p>
          <div class="ion-text-center">
            Don't have an account? <br />
            <a class="action-click" @click="$router.push('/register')"
              >Create a free one now</a
            >.
          </div>
        </div>
      </div>
      <div class="quick_signin animate__animated animate__fadeInUp">
        <h4 class="ion-text-center">or quick continue with</h4>
        <ion-row>
          <ion-col size="6">
            <ion-button size="large" shape="block" class="btn facebook">
              <!-- <img slot="start" src="assets/images/fb.png"> -->
              facebook
            </ion-button>
          </ion-col>

          <ion-col size="6">
            <ion-button size="large" shape="block" class="btn gmail">
              <!-- <img slot="start" src="assets/images/google.png"> -->
              gmail
            </ion-button>
          </ion-col>
        </ion-row>
      </div>
    </ion-content>
    <Loader v-show="showSpinner" />
  </ion-page>
</template>

<script>
import { quotes } from "../quotes.js";
import { Plugins } from "@capacitor/core";

const { Storage } = Plugins;

import {
  IonFooter,
  IonButton,
  IonIcon,
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonInput,
  toastController,
} from "@ionic/vue";

export default {
  data() {
    return {
      quote: "",
      showSpinner: false,

      history: "",
      form: {
        email: "uchechidi9@gmail.com",
        password: "11111111",
      },
    };
  },

  components: {
    IonFooter,
    IonPage,
    IonButton,
    IonIcon,
    IonContent,
    IonHeader,
    IonToolbar,
    IonInput,
  },
  mounted() {
    setInterval(() => {
      this.getRandomSentence();
      this.quote = this.getRandomSentence();
    }, 10000);
  },
  created() {},

  methods: {
    async setObject(user) {
      let userData = user.data.user;
      let token = user.data.token
      await Storage.set({
        key: "user",
        value: JSON.stringify({
          userData,
          token
        }),
      });
    },
    async toastMessage() {
      const toast = await toastController.create({
        message: "You logged in successfully",
        duration: 4000,
        color: "success",
        position: "top",
      });
      return toast.present();
    },
    loginUser() {
      this.showSpinner = true;
      this.$store
        .dispatch("auth/loginUser", this.form)
        .then((res) => {
          this.showSpinner = false;
          console.log(res);
          this.setObject(res);
          this.$router.push("/dashboard");
          this.toastMessage();
        })
        .catch((err) => {
          this.showSpinner = false;

          console.log(err.response);
        });
    },
    getRandomSentence() {
      var index = Math.floor(Math.random() * quotes.length);
      return quotes[index];
    },
  },

  computed: {},
};
</script>

<style scoped>
ion-header ion-toolbar {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  --background: none !important;
}
ion-button {
  height: 60px !important;
}
.banner {
  position: relative;
  overflow: hidden;
  width: 100%;
  margin-bottom: 20px;
  padding-top: 20px;
}
.banner::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 168px);
  background: var(--bg-secondary);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.banner .logo_box {
  position: relative;
  z-index: 99;
  display: flex;
  align-items: center;
  height: 200px;
}
.banner .logo_box img {
  width: 145px;
  display: block;
  margin: auto;
}
.banner .welcome_text {
  position: relative;
  z-index: 99;
  color: var(--white);
  padding: 0 20px;
  margin-bottom: 60px;
}
.banner .welcome_text h2 {
  margin: 0;
  font-size: 1.35rem;
  font-weight: 400;
  margin-bottom: 13px;
}
.banner .welcome_text h3 {
  margin: 0;
  font-size: 1rem;
  font-weight: 400;
}
.banner .banner_images {
  position: relative;
  overflow: hidden;
  margin-top: -100px;
}
.banner .banner_images img {
  display: block;
  margin: 0 auto;

  --animate-duration: 0.3s !important;
  height: 200px;
  width: 200px;
  margin-bottom: 30px;
  margin-top: -20px;
}
.banner .form ion-item {
  background: var(--white);
}
.banner .form ion-item.item-input ion-label {
  max-width: unset !important;
  width: fit-content !important;
  min-width: fit-content;
}
.banner .form ion-item.item-select {
  padding: 2px 13px;
}
.banner .form ion-item.item-select ion-label {
  display: none;
}
.banner .button.btn.button-block {
  margin-top: -10px !important;
}
.quick_signin {
  width: calc(100% - 40px);
  margin: 0 auto;
  margin-top: 47px;
  --animate-duration: 0.3s !important;
}
.quick_signin h4 {
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 20px;
}
.quick_signin ion-row {
  margin: 0 -10px;
}
.quick_signin ion-row ion-col {
  padding: 0 10px !important;
}
.quick_signin .button.btn {
  font-size: 1rem !important;
}
.quick_signin .button.btn img {
  width: 18px;
  position: relative;
  left: -11px;
}
.quick_signin .button.btn.facebook {
  --background: #3c5a9a !important;
}
.quick_signin .button.btn.gmail {
  --background: #fff !important;
  color: #000 !important;
  font-weight: 500;
}
.toast-wrapper {
  left: 10px;
}
.action-click {
}

/* .input-group1 {
  margin-top: 80px !important;
}
.mb-3 {
  margin-bottom: 2rem !important;
}
ion-input {
  border: 1px solid white;
  border-radius: 40px;
 
  height: 55px;
  margin-left: 15px;
  width: 92%;
  --color: white;
  --placeholder-color: white;
  padding-left: 30px !important;
}

ion-content {
  --background: url("/assets/onboardingImg/onboard2.png") no-repeat center
    center / cover;
  background-repeat: no-repeat;
}

ion-button {
  --background: rgb(255, 255, 255) !important;
  --color: #2b2fe7;
  
}
.title-text {
  margin-top: 60px;
  color: white;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
  padding-left: 30px;
  padding-right: 30px;
  text-align: center;
}

ion-button {
  height: 55px !important;
}
.login-btn {
  border: none !important;
  --color: white;

  margin-left: 13px;
  margin-right: 13px;
  --background: #979797db !important;
}

.title-footer{
    color:white;
    margin-top: 200px;
} */
</style>
<ion-page>
    <ion-content class="ioncontent">
      <!-- <ion-header class="ion-no-border"> -->
      <div class="title-text container">
        <h5 class="ion-text-center">Welcome to Envitro</h5>

        <p class="ion-text-center">
          <q cite="https://www.imdb.com/title/tt0062622/quotes/qt0396921">
            {{ quote ? quote : getRandomSentence() }}</q
          >
        </p>
      </div>

      <div class="mb-3 input-group1">
        <ion-input
          v-model="email"
          class="mb-3"
          placeholder="Enter Email"
        ></ion-input>
        <ion-input
          v-model="password"
          placeholder="Enter Password"
          type="password"
        ></ion-input>
      </div>
      <div class="btn-login">
        <ion-button
          router-link="/dashboard"
          class="login-btn"
          expand="block"
          :strong="true"
          shape="round"
          fill="solid"
          >Login</ion-button
        >
      </div>

      <h5 class="ion-text-center title-footer">
        Your dont have account ?
        <span style="color:#7373c1" @click="$router.push('/register')"
          >Register
        </span>
      </h5>
    </ion-content>
  </ion-page>
