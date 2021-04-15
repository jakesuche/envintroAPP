<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-button @click="nextPage--" v-if="nextPage >= 2 ">
            <ion-icon :icon="arrowBack">

            </ion-icon>
        </ion-button>
        <ion-buttons slot="start" v-if="nextPage==1">
          <!-- <ion-back-button :default-href="DeFaultBack"></ion-back-button> -->
          <ion-back-button
            color="dark"
            :default-href="history"
          ></ion-back-button>
        </ion-buttons>
        <!-- <ion-buttons slot="end" >
           <slot name="actions-end"></slot>
         </ion-buttons> -->
      </ion-toolbar>
    </ion-header>

    <keep-alive>
      <OnBoad1
      @formData="formInput"
        v-if="nextPage == 1"
        @nextPage="ToNextPage"
        @nextPage2="ToNextPage"
      />
     
    </keep-alive>
    <keep-alive>
         <OnBoad2 v-if="nextPage == 2"
          :form="form"
          />
    </keep-alive>
  </ion-page>
</template>

<script>
import { arrowBack } from "ionicons/icons";
import OnBoad1 from "@/components/Onboad1.vue";
import OnBoad2 from "@/components/Onboad2.vue";
import EventBus from "@/EventBus";
console.log(process.env.ENV_APP)
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
  data() {
    return {
      history: "",
      number: "",
      info2: "",
      phoneInput2: "",
      country: null,
      form: {
        phoneNumber: null,
      },
      nextPage: 1,
      arrowBack
    };
  },
  components: {
    OnBoad1,
    OnBoad2,
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
  mounted() {

    
          EventBus().emitter.emit('close', false)
    
    const phoneInputField = document.querySelector("#phone");
    console.log(this, "mountted");
    EventBus().emitter.on("country", (data) => {
      // console.log(data);
      const phoneInput = window.intlTelInput(phoneInputField, {
        preferredCountries: [data, "co", "in", "de"],
        utilsScript:
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
      });
      this.phoneInput2 = phoneInput;
    });

    const info = document.querySelector(".alert-info");
    this.info2 = info;

    this.getIp();
  },
  created() {
    this.history = window.history.state.back;
  },
  methods: {
    formInput(data){
      console.log(data)
      this.form = {...this.form , ...data}
      console.log(this.form)
    },
    process() {
      const phoneNumber = this.phoneInput2.getNumber();
      this.info2.style.display = "";
      this.form.phoneNumber = phoneNumber;
      this.$emit("phoneNumber", this.form);
      this.info2.innerHTML = `Phone number in E.164 format: <strong>${phoneNumber}</strong>`;
    },

    getIp() {
      const fetchJSON = (async () => {
        const response = await fetch(
          "https://ipinfo.io/json?token=ec6047e93a7767",
          { headers: { Accept: "application/json" } }
        );
        return await response.json();
      })();

      const printAddress = () => {
        fetchJSON.then((res) => {
          EventBus().emitter.emit("country", res["country"]);
          //   console.log(this.country = res.country )
        });
      };

      printAddress();
    },

    // this method will emit a number for next component
    ToNextPage(e) {
      console.log(e, "thisis anevent");
      this.nextPage++;
    },
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
/* .btn-section {
  margin-top: 380px;
} */
ion-icon{
    color:black;
    font-size:25px
}
ion-button {
  
  --background:none;
  --box-shadow: none;
 
}
.mb-3 {
  margin-bottom: 3rem !important;
  margin-left: -5px;
}
img {
  margin-bottom: -400px;
}
</style>

<OnBoad1 v-if="nextPage == 1" @phoneNumber="getPhone" @first="changeToFirst" />
<OnBoad2 v-if="nextPage == 2" />

import OnBoad1 from '@/components/Onboad1.vue' import OnBoad2 from
'@/components/Onboad2.vue' export default { data(){ return{ form:{
phoneNumber:'', }, nextPage:1 } }, components:{ OnBoad1, OnBoad2 }, methods:{
getPhone(data){ console.log(data, 'this is data') this.form =
{...this.form,...data} } , changeToFirst(data){ this.nextPage++ } } }
