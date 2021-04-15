<template>
  <ion-card ref="my-card" class="panel" v-show="false">
    <ion-card-header>
      <ion-card-title>Billing Address</ion-card-title>
    </ion-card-header>

    <ion-card-content>
      <ion-item lines="none">
        <ion-input
          v-model="form['billing']['attention']"
          placeholder="Attention"
        ></ion-input>
      </ion-item>
      <ion-item lines="none ">
        <ion-input
          v-model="form['billing']['street1']"
          placeholder="Street 1"
        ></ion-input>
      </ion-item>
      <ion-item lines="none">
        <ion-input
          v-model="form['billing']['street2']"
          Placeholder="Street 2"
        ></ion-input>
      </ion-item>
      <ion-item lines="none">
        <ion-input
          v-model="form['billing']['state']"
          Placeholder="State"
        ></ion-input>
      </ion-item>
      <ion-item lines="none">
        <ion-input
          v-model="form['billing']['zipcode']"
          Placeholder="Zip Code"
        ></ion-input>
      </ion-item>
      <ion-item lines="none">
        <ion-input
          v-model="form['billing']['country']"
          Placeholder="Country"
        ></ion-input>
      </ion-item>
      <ion-item lines="none">
        <ion-input
          Placeholder="Fax"
          v-model="form['billing']['fax']"
        ></ion-input>
      </ion-item>
      <ion-item lines="none">
        <ion-input
          v-model="form['billing']['phone']"
          Placeholder="Phone"
        ></ion-input>
      </ion-item>
    </ion-card-content>

    <!-- section for shipping -->
    <ion-card-header>
      <ion-progress-bar v-if="showProgress" type="indeterminate"></ion-progress-bar>
      <ion-card-title> Shipping Address</ion-card-title>
      <ion-card-title @click="copyBilling" class="copy-text">
        Copy billing Address</ion-card-title
      >
    </ion-card-header>
    <ion-card-content class="mb-3">
      <ion-item lines="none">
        <ion-input
          v-model="form['shipping']['attention2']"
          placeholder="Attention"
        ></ion-input>
      </ion-item>
      <ion-item lines="none ">
        <ion-input
          v-model="form['shipping']['street12']"
          placeholder="Street 1"
        ></ion-input>
      </ion-item>
      <ion-item lines="none">
        <ion-input
          v-model="form['shipping']['street22']"
          Placeholder="Street 2"
        ></ion-input>
      </ion-item>
      <ion-item lines="none">
        <ion-input
          v-model="form['shipping']['state2']"
          Placeholder="State"
        ></ion-input>
      </ion-item>
      <ion-item lines="none">
        <ion-input
          v-model="form['shipping']['zipcode2']"
          Placeholder="Zip Code"
        ></ion-input>
      </ion-item>
      <ion-item lines="none">
        <ion-input
          v-model="form['shipping']['country2']"
          Placeholder="Country"
        ></ion-input>
      </ion-item>
      <ion-item lines="none">
        <ion-input
          Placeholder="Fax"
          v-model="form['shipping']['fax2']"
        ></ion-input>
      </ion-item>
      <ion-item lines="none" class="mb-3">
        <ion-input
          v-model="form['shipping']['phone2']"
          Placeholder="Phone"
        ></ion-input>
      </ion-item>
      <ion-item lines="none" class="mb-3">
        
      </ion-item>
    </ion-card-content>
  </ion-card>
</template>

<script>
import { arrowBack, readerOutline, addCircleSharp } from "ionicons/icons";
import EventBus from "@/EventBus";
import { CupertinoPane } from "cupertino-pane";
import {
  IonPage,
  IonTitle,
  IonHeader,
  IonToolbar,
  IonContent,
  IonBackButton,
  IonButtons,
  IonLabel,
  IonIcon,
  IonItem,
  IonInput,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonCheckbox,
  modalController,
  IonProgressBar
} from "@ionic/vue";
export default {
  data() {
    return {
      arrowBack,
      readerOutline,
      individual: "individual",
      business: "business",
      name: "",
      check: "",
      form: {
        billing: {
          attention: "",
          street1: "",
          street2: "",
          state: "",
          zipcode: "",
          country: "",
          fax: "",
        },
        shipping: {
          attention2: "",
          street12: "",
          street22: "",
          state2: "",
          zipcode2: "",
          country2: "",
          fax2: "",
        },
      },
      addCircleSharp,
      showAddSocial: false,
      showProgress:false
    };
  },
  mounted() {
    this.$EventBus().emitter.on("openModal", (data) => {
      this.presentPane();
    });
  },
  created() {},
  components: {
    IonBackButton,
    IonPage,
    IonTitle,
    IonHeader,
    IonToolbar,
    IonContent,
    IonButtons,
    IonLabel,
    IonIcon,
    IonItem,
    IonInput,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonGrid,
    IonRow,
    IonCol,
    IonCheckbox,
    IonProgressBar
  },

  methods: {
    copyBilling() {
      this.showProgress = true
      console.log(this.form);
      
      setTimeout(() => {
      this.showProgress = false
      this.form["shipping"]["attention2"] = this.form["billing"]["attention"];
      this.form["shipping"]["street12"] = this.form["billing"]["street1"];
      this.form["shipping"]["street22"] = this.form["billing"]["street2"];
      this.form["shipping"]["state2"] = this.form["billing"]["state"];
      this.form["shipping"]["zipcode2"] = this.form["billing"]["zipcode"];
      this.form["shipping"]["country2"] = this.form["billing"]["country"];
      this.form["shipping"]["fax2"] = this.form["billing"]["fax"];
      },3000);

      
    },
    presentPane() {
      let pane = new CupertinoPane(".panel", this.settings);
      setTimeout(() => pane.present({ animate: true }));
    },
    checked(e) {
      console.log(e.detail.value);
      this.form.customerType = e.detail.value;
    },
    showSocial() {
      this.showAddSocial = true;
    },
    async closeModal() {
      let modal = await modalController.dismiss();
    },
  },
};
</script>

<style scoped>
.contact-person {
  font-size: 20px;
}
ion-card {
  --background: none !important;
  background: none !important;
}

ion-toolbar {
  --background: #343a40;
}
ion-input {
  --padding-start: 20px;
  border-bottom: 1px solid rgba(157, 138, 138, 0.804);
  --placeholder-color: #ffffff;
  --color: #ffffff;
}
.label-check {
  margin-left: 10px;
}
ion-label {
  color: #dee2e6 !important;
}

ion-item {
  --background: none;
}
.copy-text {
  position: absolute;
  right: 0;
  font-size: 16px;
  top: 10px;
  color: #1e90ff;
}
</style>
