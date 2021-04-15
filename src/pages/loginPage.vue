<template>
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
        <ion-input v-model="email " class="mb-3" placeholder="Enter Email"></ion-input>
        <ion-input v-model="password" placeholder="Enter Password" type="password"></ion-input>
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
      
         
              <h5  class="ion-text-center title-footer">Your dont have account ? <span  style="color:#7373c1"  @click="$router.push('/register')">Register </span></h5>
         
      
    </ion-content>
   
  </ion-page>
</template>

<script>
import { quotes } from "../quotes.js";

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
  
} from "@ionic/vue";

export default {
  data() {
    return {
      quote: "",
      email:'uchechidi9@gmail.com',
      password:'11111111',
      history:''
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
  created(){
     
      
  },
  methods: {
    getRandomSentence() {
      var index = Math.floor(Math.random() * quotes.length);
      return quotes[index];
    },
  },

  computed: {},
};
</script>

<style scoped>
.input-group1 {
  margin-top: 80px !important;
}
.mb-3 {
  margin-bottom: 2rem !important;
}
ion-input {
  border: 1px solid white;
  border-radius: 40px;
  /* margin-right: -400%!important; */
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
  /* margin-top: 330px; */
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
}
</style>
