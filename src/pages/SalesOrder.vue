<template>
  <base-layout PageTitle="Sales Order">
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
    
  </base-layout>
</template>

<script>
import CreateSaleOrderModal from "@/components/Modals/CreateSaleOrderModal.vue";
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
      showSearchColor:false
    };
  },

  mounted() {
    
    console.log(this.icons)
 
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
     hideColor(){
      this.showSearchColor=false
    },
    showSearchColorMethod(){
      
      this.showSearchColor=true
    },
    playSound() {
      var audio = new Audio(soundClick);

      audio.play();
    },
    async createNewCustomer() {
      this.playSound();
      let modal = await modalController.create({
        component: CreateSaleOrderModal,
      });
      return modal.present();
    },
  },
};
</script>

<style scoped>
ion-header {
  background: var(--white);
}
ion-header ion-toolbar ion-title {
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 0;
}
ion-header ion-segment {
  border: none !important;
  background: none !important;
  margin: 0;
  padding-bottom: 6px;
}
ion-header ion-segment ion-segment-button {
  background: none !important;
  position: relative;
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--text-light2) !important;
  text-transform: unset !important;
  letter-spacing: 0;
  --color-checked: var(--primary) !important;
  text-align: justify !important;
  --background-checked: var(--transparent) !important;
  --border-width: 0 !important;
  --border-radius: 0 !important;
  box-shadow: none !important;
  --padding-start: 0px;
  --padding-end: 0px;
}
ion-header ion-segment ion-segment-button ion-label {
  margin: 15px 0 8px 0;
}
ion-header ion-segment ion-segment-button.segment-button-checked ion-label {
  color: var(--primary) !important;
}
ion-list {
  padding: 0;
  background: none;
  padding-top: 8px;
}
ion-list h2 {
  margin: 0;
  color: var(--text-light2);
  font-weight: 400;
  font-size: 0.95rem;
  padding: 7px 15px 15px 15px;
}
ion-list ion-item {
  padding: 16px 15px 20px 15px;
  background: var(--white);
  --inner-padding-end: 0px;
  --inner-min-height: unset !important;
  --padding-start: 0;
  --highligh-color-focused: var(--transparent) !important;
  margin-bottom: 8px;
}
ion-list ion-item .item_inner {
  width: 100%;
  align-items: flex-start;
}
ion-list ion-item .item_inner .img_box {
  min-width: 35px;
  height: 35px;
  margin-right: 15px;
  border-radius: 4px;
}
ion-list ion-item .item_inner .text_box {
  width: 100%;
}
ion-list ion-item .item_inner .text_box h3 {
  margin: 0;
  font-size: 0.95rem;
  font-weight: 600;
  padding-bottom: 6px;
  color: var(--text-dark);
}
ion-list ion-item .item_inner .text_box h3 span.order_status {
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1.3px;
  font-size: 0.9rem;
}
ion-list ion-item .item_inner .text_box h4 {
  margin: 0;
  font-size: 0.8rem;
  font-weight: 400;
  color: var(--text-light2);
  padding-bottom: 16px;
}
ion-list ion-item .item_inner .text_box .item_details {
  width: 100%;
  align-items: flex-end;
}
ion-list ion-item .item_inner .text_box .item_details .item_list {
  width: 100%;
}
ion-list ion-item .item_inner .text_box .item_details .item_list h3 {
  font-size: 0.95rem;
  font-weight: 500;
  padding-bottom: 10px;
}
ion-list ion-item .item_inner .text_box .item_details .item_list h3:last-child {
  padding-bottom: 0;
}
ion-list
  ion-item
  .item_inner
  .text_box
  .item_details
  .item_list
  h3
  span.icon_box
  ion-icon {
  color: #ddd;
  font-size: 0.8rem;
}
ion-list
  ion-item
  .item_inner
  .text_box
  .item_details
  .item_list
  h3
  span.icon_box
  ion-icon.active {
  color: var(--yelow_color);
}
ion-list ion-item.pending .item_inner .text_box h3 span.order_status {
  color: var(--yelow_color);
}
ion-list ion-item.accepted .item_inner .text_box h3 span.order_status {
  color: var(--primary);
}
ion-list ion-item.delivered .item_inner .text_box h3 span.order_status {
  color: var(--text-dark);
  font-weight: 700;
}
ion-list ion-item.cancelled .item_inner .text_box h3 span.order_status {
  color: var(--red_color);
  font-weight: 700;
}
ion-slides ion-slide {
  display: block;
  min-height: calc(100vh - 115px);
  max-height: calc(100vh - 115px);
  overflow: hidden;
  overflow-y: auto;
  text-align: initial;
  position: relative;
}
ion-searchbar {
  --border-radius: 10px;
  --background: #e9ecef;
  --box-shadow: none;
  --color: #3c3b3b;
  --placeholder-color: #3c3b3b;
  --placeholder-font-weight: bold;
  --placeholder-opacity: 1;
   visibility:visible;
   
        /* width: 60%;
        margin: 0 auto; */
        text-align:left;
    
}
.ion-backprimary{
  --background:var(--primary);
  color:var(--white)!important;
  --placeholder-color: var(--white);
  visibility:visible;
  animation: fadeIn 5s;
}
.total_earning {
  background: var(--white);
  padding: 14px 17px;
  margin: 8px 0;
}
.total_earning ion-row ion-col h2 {
  margin: 0;
  color: var(--text-light);
  font-size: 0.95rem;
  font-weight: 500;
  padding-top: 5px;
}
.total_earning ion-row ion-col h2 span {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-black);
}






/* @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@600&display=swap");
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
} */
ion-card {
  /* border:none; */
  /* box-shadow: none; */
  /* border-bottom: 1px solid black; */
}



/* // css for slide */
</style>
