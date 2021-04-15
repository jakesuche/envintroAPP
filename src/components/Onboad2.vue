<template>
  <ion-content>
    <ion-title class="mb-3">
      Verification code
    </ion-title>

    <div class="container">
      <p class="">
        Please enter the 4-digit code sent to you at 
        <strong>{{form.phoneNumber}}</strong>
      </p>
      <ion-row text-center>
        <ion-col>
          <ion-input
            ref="otp1"
            type="telephone"
            required
            maxLength="1"
            @keyup="otpController($event, $refs['otp2'], '')"
          >
          </ion-input>
          <ion-input
            ref="otp2"
            type="telephone"
            required
            maxLength="1"
            @keyup="otpController($event, $refs['otp3']), $refs['otp1']"
          >
          </ion-input>
          <ion-input
            ref="otp3"
            type="telephone"
            required
            maxLength="1"
            @keyup="otpController($event, $refs['otp4'], $refs['otp2'])"
          >
          </ion-input>
          <ion-input
            ref="otp4"
            type="telephone"
            required
            maxLength="1"
            @keyup="otpController($event, '', $refs['otp3'])"
          >
          </ion-input>
        </ion-col>
      </ion-row>
    </div>
    <div>
      
     <lottie-player src="https://assets8.lottiefiles.com/private_files/lf30_BB1X5K.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player>
    </div>

    <div class="container btn-section">
      <ion-button @click.prevent="emitNext"  expand="block" shape="round">
        Continue 
      </ion-button>
    </div>
  </ion-content>
</template>

<script>
import EventBus from "@/EventBus";
import {
  IonPage,
  IonToolbar,
  IonHeader,
  IonButtons,
  IonIcon,
  IonContent,
  IonTitle,
  IonBackButton,
  IonButton,
} from "@ionic/vue";
export default {
  props:['form'],
  data() {
    return {
      history: "",
      number: "",
      info2: "",
      phoneInput2: "",
      country: null,
    };
  },
  components: {
    IonButton,
    IonPage,
    IonToolbar,
    IonHeader,
    IonButtons,
    IonIcon,
    IonContent,
    IonTitle,
    IonBackButton,
  },
  beforeMount() {},
  mounted() {},
  created() {},
  methods: {
    otpController(event, next, prev) {
      if (event.target.value.length < 1 && prev) {
        prev.setFocus();
      } else if (next && event.target.value.length > 0) {
        next.setFocus();
      } else {
        return 0;
      }
    },
  },

  emitNext() {
    this.$emit("nextPage1");
  },
};
</script>

<style scoped>
ion-title {
  color: black;
}
ion-toolbar {
  --background: white;
}
.form-control {
  display: block;
  width: 150% !important;
  height: calc(1.9em + 0.99rem + 7px) !important;
}
.btn-section {
  margin-top: 70px;
}

ion-button {
  height: 55px;
  --background: #7ef192;
  --box-shadow: none;
  text-transform: capitalize;
}
.mb-3 {
  margin-bottom: 3rem !important;
  margin-left: -5px;
}
img {
  margin-bottom: -400px;
}
ion-input {
  display: inline-block;
  width: 50px;
  height: 50px;
  margin: 10px;
  border-radius: 10px;
  --background: #e1e1e1;
  --padding-start: 7px;
  margin-left: 32px;
}
ion-row{
      margin-left: -20px;
}
p{
  margin-top:-10px;
  text-align:center
}

lottie-player{
  margin-left: 60px!important;
}
</style>
