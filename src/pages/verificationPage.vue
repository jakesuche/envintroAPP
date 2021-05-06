<template>
  <ion-page>
   
    
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/register"
            
            
          ></ion-back-button>
        </ion-buttons>
        <ion-title>Phone / Email verification</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="form">
        <p class="ion-text-center">
          <span class="animate__animated animate__fadeInUp">We sent otp verification code</span>
          <br />
          <span class="animate__animated animate__fadeInUp">on your given number / email
          </span>
        </p>
<div class="alert alert-warning alert-dismissible fade show" role="alert" v-show="showAlert">
   {{error}}.
  
</div>




        <ion-list lines="none">
          <ion-item class="animate__animated animate__fadeInUp" lines="none">
            <ion-input v-model="otpCode"
              class="ion-text-center"
              type="text"
              placeholder="enter 4 digit otp"
            ></ion-input>
          </ion-item>
<img src="@/theme/gifs/otp.gif" alt="" srcset="">
          <ion-button
          @click="verifyUser"
            size="large"
            shape="block"
            class="btn animate__animated animate__fadeInUp"
            
            >submit</ion-button
          >
          <h4 class="d-flex">
            0:22 min left
            <span class="end animate__animated animate__fadeInUp">
              resend
            </span>
          </h4>
        </ion-list>
      </div>
    </ion-content>
    <Loader v-show="showLoader"/>

   
  </ion-page>
</template>

<script>
import {IonBackButton,IonItem, IonList, IonPage,IonButton,IonContent,IonHeader,IonToolbar,IonButtons,IonTitle,IonInput } from '@ionic/vue'

export default {
components:{IonBackButton,
    IonItem, IonList, IonPage,IonButton,IonContent,IonHeader,IonToolbar,IonButtons,IonTitle,IonInput,
},
data(){
  return {
    otpCode:null,
    showLoader:false,
    error:null,
    showAlert:false
  }
},
methods:{

 verifyUser(){
   this.showLoader = true
      setTimeout(() => {
         
      let verifyCode = {otpcode:this.otpCode}
      console.log(verifyCode)
      this.$store.dispatch('auth/verifyUser', verifyCode )
      
      .then((res)=>{
        this.showLoader = false
        this.$router.push('/login')
        console.log(res)
        this.showAlert = false
      })
      .catch(err=>{
        this.error = err.response.data
        this.showLoader = false
        console.log(err.response)
        this.showAlert = true
      })
  }, 3000);
     
    }
}
};
</script>

<style scoped>
ion-header ion-toolbar ion-title {
  position: absolute !important;
  left: 0;
  top: 0;
  width: 100%;
  text-align: center;
  padding: 0 15px !important;
}
.form {
  padding-top: 50px;
}
.form p {
  color: var(--text-light) !important;
  margin: 0;
  font-size: 1rem !important;
  letter-spacing: 0;
  font-weight: 500;
  line-height: 19px;
  margin-bottom: 50px;
  opacity: 0.8;
}
.form .button.btn.button-block {
  margin-top: 25px;
}
.form h4 {
  margin: 0;
  font-size: 0.95rem;
  font-weight: 500;
  margin-top: 28px;
}
.form h4 span {
  text-transform: uppercase;
  font-size: 0.95rem;
}

ion-button{
    height:60px!important
}
img {
    vertical-align: middle;
    border-style: none;
    /* height: 300px; */
    margin-top: -50px;
}



/* spinnner section */

</style>
