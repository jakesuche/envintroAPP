<template>
   <base-layout  PageTitle="All Customers">
 <template v-slot:ion-menu-btn>
   <ion-menu-button color="light"></ion-menu-button>
  </template>
    <ion-content>
      <ion-hearder>
        <ion-searchbar ></ion-searchbar>
      </ion-hearder>
      <div class="card-group" v-if="false" >
        <ion-card router-link="/customerdetail">
          <ion-card-header>
            <ion-card-title>Uche chidi</ion-card-title>
            <div class="d-flex justify-content-around user-detail">
              <ion-card-subtitle>Unused Credits </ion-card-subtitle>
              <ion-card-subtitle style="color:green"
                >Receivables
              </ion-card-subtitle>
            </div>
            <div class="d-flex justify-content-around user-detail">
              <ion-card-subtitle>$0.00 </ion-card-subtitle>
              <ion-card-subtitle>$0.00</ion-card-subtitle>
            </div>
          </ion-card-header>
        </ion-card>
      </div>
      <div class="ion-padding" >
        <ion-grid>
          <ion-row>
            <ion-col size="12">
              <ion-text
                style="opacity:0.7; font-weight:bold;font-size: 20px;margin-left: -20px;"
              >
                There are no customers
              </ion-text>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col size="12">
              <ion-button shape="round" @click="createNewCustomer" style="backgroud:#343a40">
                New Customers
              </ion-button>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>

    <!-- ion menu here -->
  </base-layout>
</template>

<script>
import CreateCustomer from "@/components/Modals/CreateCustomerModal.vue";
import {
  IonPage,
  IonTitle,
  IonHeader,
  IonToolbar,
  IonContent,
  IonBackButton,
  IonButtons,
  IonIcon,
  IonRow,
  IonGrid,
  IonCol,
  IonText,
  IonMenuButton,
  IonCard,
  IonList,
  IonLabel,
  actionSheetController,
  modalController,
} from "@ionic/vue";
import {
  cardOutline,
  addOutline,
  menuSharp,
  caretForwardCircle,
  close,
  heart,
  trash,
  share,
} from "ionicons/icons";
export default {
  data() {
    return {
      cardOutline,
      addOutline,
      menuSharp,
      
    };
  },
  mounted() {},
  components: {
    // DessetModal,
    IonCard,
    IonList,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonHeader,
    IonToolbar,
    IonContent,
    IonBackButton,
    IonButtons,
    IonIcon,
    IonRow,
    IonGrid,
    IonCol,
    IonText,
    IonLabel,
  },

  methods: {
    async createNewCustomer() {
      let modal = await modalController.create({
        component: CreateCustomer,
      });
      return modal.present();
    },
  },
};
</script>

<style scoped>
.action-sheet-wrapper.sc-ion-action-sheet-md {
  margin-left: unset;
  margin-right: unset;
  -webkit-margin-start: auto;
  margin-inline-start: auto;
  -webkit-margin-end: auto;
  margin-inline-end: auto;
  margin-left: 80px;
  border-radius: 20px !important;
}
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@600&display=swap");
ion-toolbar {
  --background: #343a40
}
.menu-icon {
  font-size: 35px;
}
#ion-text-center {
  padding-left: 0px;
  padding-right: 38px;
}
ion-content {
  --background: #ffffff;
}
.ion-padding {
  margin: 100px;
  width: 300px;
}
ion-searchbar {
  --border-radius: 20px;
  --background: #e9ecef;
  --box-shadow: none;
  --color: #3c3b3b;
  --placeholder-color: #3c3b3b;
  --placeholder-font-weight: bold;
  --placeholder-opacity: 1;
}
ion-card-title,
ion-card-subtitle {
  --color: #24292e;
}
ion-card-subtitle {
  font-size: 16px;
}
.user-detail {
  margin-left: -50px;
}
ion-card {
  /* border:none; */
  /* box-shadow: none; */
  /* border-bottom: 1px solid black; */
}

/* // css for slide */
</style>
