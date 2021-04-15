<template>
  <base-layout PageTitle="All invoices">
    <template v-slot:ion-menu-btn>
      <ion-menu-button color="light"></ion-menu-button>
    </template>
    <ion-content>
      <ion-hearder>
        <ion-searchbar></ion-searchbar>
      </ion-hearder>
      <ion-card>
        <img src="@/theme/gifs/invoice_animation.gif" alt="" srcset="" />
        <ion-card-header> </ion-card-header>
      </ion-card>

      <div class="ion-padding">
        <ion-grid>
          <ion-row>
            <ion-col size="12">
              <ion-button
                shape="round"
                @click="createNewCustomer"
                style="backgroud:#343a40"
              >
                Add invoice <ion-icon :icon="addOutline"></ion-icon>
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
// import CreateCustomer from "@/components/Modals/CreateCustomerModal.vue";
import soundClick from "@/directives/clickSound/buttonClick.mp3"



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
    playSound() {
      var audio = new Audio(soundClick);

      audio.play();
    },
    async createNewCustomer() {
      this.playSound();
      this.$router.push("/createinvoice");
    },
  
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@600&display=swap");
ion-toolbar {
  --background: #343a40;
}
ion-card {
  margin-bottom: -200px;
  box-shadow: none;
}
ion-button {
  height: 45px;
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
