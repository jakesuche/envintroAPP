<template>
  <base-layout PageTitle="New Vendors">
    <template v-slot:ion-menu-btn>
      <ion-menu-button ></ion-menu-button>
    </template>
    <ion-content class="bg_color">
      <div class="total_earning animate__animated animate__fadeInUp">
        <ion-row class="ion-text-center">
          <ion-col size="12">
            <ion-hearder>
              <ion-searchbar
                @ionBlur="hideColor"
                @ionFocus="showSearchColorMethod"
                :class="{ 'ion-backprimary': showSearchColor }"
              ></ion-searchbar>
            </ion-hearder>
          </ion-col>
        </ion-row>
      </div>
      <img src="@/theme/gifs/animation_500_knonw20j.gif" alt="" srcset="" />
          <ion-list>
            <ion-item  lines="none"
              class="accepted animate__animated animate__fadeInUp"
              
            >
              <div class="item_inner d-flex">
                <div class="img_box center_img">
                  <img src="https://via.placeholder.com/150" class="crop_img" />
                </div>
                <div class="text_box">
                  <h3 class="d-flex">
                    Helthyfy Medicals
                    <span class="end order_status">
                      Accepted
                    </span>
                  </h3>
                  <h4 class="d-flex">
                    13 June, 11:40 am
                    <span class="end"
                      >2  PayPal</span
                    >
                  </h4>
                  <div class="item_details d-flex">
                    <div class="item_list">
                      <h3 class="d-flex">Non Drosy Laritin Tablet</h3>
                      <h3 class="d-flex">Xenical 120mg Tablet</h3>
                    </div>
                  </div>
                </div>
              </div>
            </ion-item>
            <ion-item lines="none"
              class="pending animate__animated animate__fadeInUp">
              <div class="item_inner d-flex">
                <div class="img_box center_img">
                  <img src="https://via.placeholder.com/150" class="crop_img" />
                </div>
                <div class="text_box">
                  <h3 class="d-flex">
                    Samantha Smith<span class="end order_status">
                      pending
                    </span>
                  </h3>
                  <h4 class="d-flex">
                    13 June, 11:40 am <span class="end">$18.00 | COD</span>
                  </h4>
                  <div class="item_details d-flex">
                    <div class="item_list">
                      <h3 class="d-flex">Salospir 100mg Tablet</h3>
                      <h3 class="d-flex">Non Drosy Laritin Tablet</h3>
                      <h3 class="d-flex">Xenical 120mg Tablet</h3>
                    </div>
                  </div>
                </div>
              </div>
            </ion-item>
          </ion-list>
         <ion-fab horizontal="end" vertical="bottom" slot="fixed">
        <ion-fab-button @click="createNewCustomer">
          <ion-icon  :icon="icons.addOutline" ></ion-icon>
        </ion-fab-button>
    </ion-fab>
    </ion-content>
   

    <!-- ion menu here -->
  </base-layout>
</template>

<script>
import CreateVendorModal from "@/components/Modals/CreateVendorModal.vue";
import soundClick from "@/directives/clickSound/buttonClick.mp3";

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
  directives: {
    sound: {
      bind(el) {
        el.addEventListener("click", (el) => {
          console.log(el);
          alert("alert");
        });
      },
    },
  },
  data() {
    return {
      cardOutline,
      addOutline,
      menuSharp,
    };
  },

  mounted() {
    
    console.log(this)
 
  },
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
      let modal = await modalController.create({
        component: CreateVendorModal,
      });
      return modal.present();
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
