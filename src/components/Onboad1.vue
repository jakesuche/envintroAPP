<template>
  
    <ion-content>
      <ion-title class="mb-3">
        Let's get started
      </ion-title>

      <div class="container">
        <form id="login">
          <p>Enter your phone number:</p>
          <input
            @input="process(event)"
            class="form-control"
            id="phone"
            placeholder="Mobile Number"
            type="tel"
            name="phone"
            v-model="number"
          />
          <!-- <input type="submit" class="btn btn-primary" value="Verify" /> -->
        </form>
        <!-- <div class="alert alert-info" style="display: none;"></div> -->
      </div>
      <div>
        <img src="/assets/onboardingImg/onboard3.jpg" alt="" />
      </div>

      <div class="container btn-section">
        <ion-button @click.prevent="emitNext" expand="block" shape="round" :disabled="!form.phoneNumber  ">
         <span v-if="!showSpinner"> Continue</span>   <ion-spinner v-if="showSpinner"></ion-spinner>
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
  IonSpinner,
} from "@ionic/vue";
export default {
  data() {
    return {
      history: "",
      number: "",
      info2: "",
      phoneInput2: "",
      country: null,
      form:{
          phoneNumber:null
      },
      showSpinner:false
    };
  },
  components: {
      IonSpinner,
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
    const phoneInputField = document.querySelector("#phone");
    console.log(this, "mountted");
    EventBus().emitter.on('close', (data) =>{

        this.showSpinner = data
    })
    
    EventBus().emitter.on("country", (data) => {
      
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
     
    process() {
      const phoneNumber = this.phoneInput2.getNumber();
      
      this.form.phoneNumber = phoneNumber
      this.$emit('formData',this.form)
    
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
    emitNext(){
        this.showSpinner = true
        setTimeout(() => {
            this.showSpinner = false
            this.$emit('nextPage', 1)
        },2000);
    }
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
  margin-top: 380px;
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
</style>
