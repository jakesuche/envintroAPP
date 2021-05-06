<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button
            text=""
            icon="chevron-back-outline"
          ></ion-back-button>
        </ion-buttons>
        <ion-title>Register now </ion-title>
        <pre></pre>
      </ion-toolbar>
    </ion-header>

    <ion-content fullscreen>
      <div class="form">
        <p class="ion-text-center">
          <span class="animate__animated animate__fadeInUp">
            Your phone number is not registered yet
          </span>
          <br />
          <span class="animate__animated animate__fadeInUp">
            let us know basic details of your registration
          </span>
        </p>

        <ion-list lines="none">
          <ion-item class="animate__animated animate__fadeInUp" lines="none">
            <div class="ite_inner d-flex">
              <ion-icon
                :icon="icons.phonePortrait"
                class="zmdi  zmdi-smartphone-iphone ion-text-start"
              ></ion-icon>
              <!--				<ion-label position="fixed">{{'phone_number' | translate}}</ion-label>-->
              <ion-input
                v-model="form.phone"
                placeholder="Phone number"
                type="text"
              ></ion-input>
            </div>
          </ion-item>
          <ion-item class="animate__animated animate__fadeInUp" lines="none">
            <div class="ite_inner d-flex">
              <ion-icon
                :icon="icons.person"
                class="zmdi zmdi-account ion-text-start"
              ></ion-icon>
              <!--				<ion-label position="fixed">{{'full_name' | translate}}</ion-label>-->
              <ion-input
                v-model="form.name"
                placeholder="Full name"
                type="name"
              ></ion-input>
            </div>
          </ion-item>
          <ion-item class="animate__animated animate__fadeInUp" lines="none">
            <div class="ite_inner d-flex">
              <ion-icon
                :icon="icons.mail"
                class="zmdi zmdi-email ion-text-start"
              ></ion-icon>
              <!--				<ion-label position="fixed">{{'email_address' | translate}}</ion-label>-->
              <ion-input
                v-model="form.email"
                placeholder="Email address"
                type="name"
              ></ion-input>
            </div>
          </ion-item>
          <ion-item class="animate__animated animate__fadeInUp" lines="none">
            <div class="ite_inner d-flex">
              <ion-icon
                :icon="icons.mail"
                class="zmdi zmdi-email ion-text-start"
              ></ion-icon>
              <!--				<ion-label position="fixed">{{'email_address' | translate}}</ion-label>-->
              <ion-input
                v-model="form.password"
                placeholder="Password"
                type="password"
              ></ion-input>
            </div>
          </ion-item>
          <ion-button
            :disabled="disabled"
            @click="registerUser"
            size="large"
            shape="block"
            class="btn animate__animated animate__fadeInUp"
            ><span v-show="!disabled">continue</span>
            <ion-spinner v-show="disabled" name="dots"></ion-spinner>
          </ion-button>
          <h4
            class="ion-text-center action-click animate__animated animate__fadeInUp"
            @click="$router.push('/login')"
          >
            Back to sign up
          </h4>
        </ion-list>
      </div>
    </ion-content>

    <ion-footer class="ion-no-border">
      <div class="form">
        <p class="ion-text-center">
          <span class="animate__animated animate__fadeInUp"
            >will send an otp on above
          </span>
          <br />
          <span class="animate__animated animate__fadeInUp"
            >given phone number</span
          >
        </p>
      </div>
    </ion-footer>
  </ion-page>
</template>

<script>
import { arrowBack } from "ionicons/icons";
import OnBoad1 from "@/components/Onboad1.vue";
import OnBoad2 from "@/components/Onboad2.vue";
import EventBus from "@/EventBus";
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;
console.log(process.env.ENV_APP);
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
  IonInput,
  toastController,
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
      form: {
        phone: "08102353377",
        name: "uchechukwu chidi",
        email: "uchechidi9@gmail.com",
        password: "11111111",
      },
      arrowBack,
      disabled: false,
    };
  },
  components: {
    IonSpinner,
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
    IonInput,
  },
  beforeMount() {},
  mounted() {
    //       EventBus().emitter.emit('close', false)
    // const phoneInputField = document.querySelector("#phone");
    // console.log(this, "mountted");
    // EventBus().emitter.on("country", (data) => {
    //   // console.log(data);
    //   const phoneInput = window.intlTelInput(phoneInputField, {
    //     preferredCountries: [data, "co", "in", "de"],
    //     utilsScript:
    //       "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    //   });
    //   this.phoneInput2 = phoneInput;
    // });
    // const info = document.querySelector(".alert-info");
    // this.info2 = info;
    // this.getIp();
  },
  created() {
    this.history = window.history.state.back;
  },
  methods: {
    async getToast() {
      let toast = await toastController.create({});
    },
  async setObject(token) {
  await Storage.set({
    key: 'token',
    value: token
  });
},
 registerUser() {
      this.disabled = true;
      this.$store
        .dispatch("auth/registerUser", this.form)
        .then((res) => {
          let token = res.data.token
          this.disabled = false;
          this.$swal.fire({
            icon: "success",
            title: "Account created successfully",
            showConfirmButton: false,
            timer: 5000,
          });
          this.setObject(token)
          console.log(res);
          this.$router.push('/verification')

        })
        .catch((err) => {
          this.disabled = false;
          let error = err.response.data.errors;
          this.$swal.fire({
            icon: "error",
            title: error,
            showConfirmButton: false,
            timer: 5000,
            backdrop: `
    rgba(0,0,0,0.2)
    
   `,
          });
         
         setTimeout(() => {
            if(err.response.data.errors.startsWith('ENOTFOUND')){
            this.$router.push('/login')
          }
         }, 5000);
          
          console.log(err.response);
        });
    },
   
    // process() {
    //   const phoneNumber = this.phoneInput2.getNumber();
    //   this.info2.style.display = "";
    //   this.form.phoneNumber = phoneNumber;
    //   this.$emit("phoneNumber", this.form);
    //   this.info2.innerHTML = `Phone number in E.164 format: <strong>${phoneNumber}</strong>`;
    // },

    // getIp() {
    //   const fetchJSON = (async () => {
    //     const response = await fetch(
    //       "https://ipinfo.io/json?token=ec6047e93a7767",
    //       { headers: { Accept: "application/json" } }
    //     );
    //     return await response.json();
    //   })();

    //   const printAddress = () => {
    //     fetchJSON.then((res) => {
    //       EventBus().emitter.emit("country", res["country"]);
    //       //   console.log(this.country = res.country )
    //     });
    //   };

    //   printAddress();
    // },

    // this method will emit a number for next component
  },
};
</script>

<style scoped>
.form {
  padding-top: 50px;
}

.form ion-item {
  background: var(--info_field_bg);
}
.form ion-item .item-input ion-label {
  max-width: unset !important;
  width: fit-content !important;
  min-width: fit-content;
}

.form ion-item .item-input .item-select {
  padding: 2px 13px;
}
.form ion-item .item-input .item-select ion-label {
  display: none;
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
.form.button.btn.button-block {
  margin-top: 25px;
}
.form h4 {
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 28px;
}

ion-footer .form {
  padding-top: 0px !important;
}

ion-button {
  height: 60px !important;
}
.action-click {
}
</style>
