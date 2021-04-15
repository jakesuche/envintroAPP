<template>
  <ion-page>
    <ion-content class="ioncontent">
      <!-- <ion-header class="ion-no-border"> -->
      <!-- <div class="title-text container">
        <h5 class="ion-text-center">Welcome to Envitro</h5>

        <p class="ion-text-center">
          Take control of your money by tracking your expenses, adding goals
        </p>
      </div> -->

      <!-- <div  >
         <ion-button  :strong="true" expand="block"  shape="round" >Login</ion-button>
        
       </div> -->
      <div class="button-group">
        <ion-button router-link="/register" class="mb-3 btn-registration" :strong="true" expand="block" shape="round"
          ><span class="btn-text">Create a free account</span></ion-button
        >
        <ion-button :strong="true"  class="mb-3"  expand="block btn-facebook" shape="round"
          ><span class="btn-text">Continue with facebook</span></ion-button
        >
         <div class="ion-padding">
           <h5 class="ion-text-center" style="color:white">
             Already have an account ?
           </h5>
         </div>
        <ion-button router-link="/login" class="btn-login" shape="round" expand="block" fill="solid" :strong="true"
          ><span class="btn-text"> Login</span></ion-button
        >
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonButton,
  IonIcon,
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
} from "@ionic/vue";

export default {
  components: {
    IonPage,
    IonButton,
    IonIcon,
    IonContent,
    IonHeader,
    IonToolbar,
  },

  computed: {},
};
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Karla:wght@500&display=swap');

ion-content {
  --background: url("/assets/onboardingImg/onboard1.png") no-repeat center
    center / cover;
  background-repeat: no-repeat;
}
.button-group{
  margin-top: 330px;

}
.btn-text{
  font-family: 'Karla', sans-serif;
  text-transform: capitalize;
  font-size: 15px;
}

/* ion-button{
  --background:rgb(255, 255, 255)!important;
  --color:#2b2fe7;
  margin-top: 330px;
} */
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
  height: 48px !important;
  margin-left:10px;
  margin-right:10px
}
.login-btn {
  --border-color: white;
  --color: white;
  --background: none !important;
}
.btn-login{
  --background:#97979785
}
.btn-registration{
  --background:#7EF192
}
</style>
ion-content { --background: url("/assets/onboardingImg/onboard1.png") no-repeat
center center / cover; background-repeat: no-repeat; } ion-button{
--background:rgb(255, 255, 255)!important; --color:#2b2fe7; margin-top: 330px; }
.title-text { margin-top: 60px; color: white; } p { margin-top: 0;
margin-bottom: 1rem; padding-left: 30px; padding-right: 30px; text-align:
center; } ion-button { height: 55px !important; } .login-btn{
--border-color:white; --color:white; --background:none!important }
