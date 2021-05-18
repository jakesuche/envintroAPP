<template>
  <base-layout PageTitle="All Customers">
    <template v-slot:ion-menu-btn>
      <ion-menu-button></ion-menu-button>
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

      <img v-show="!isShow()" src="@/theme/gifs/animation_500_knonw20j.gif" alt="" srcset="" />
     
      <ion-list v-if="isShow()" lines="none"  >
        <h2>Customers  </h2>
         <ion-item v-for="(customer, i) in customers()" :key="i"
          button="true"
          @click="$router.push({path:'/customerdetail', query:{id:customer._id }})"
          class="animate__animated animate__fadeInUp"
          
        >
       
          <ion-row>
            <ion-col size="7">
              
              <h3><strong>{{customer.firstname }} {{customer.lastname}}</strong></h3>
              <p>{{customer.phone}}</p>
            </ion-col>

            <ion-col size="5" class="ion-text-end">
              <h3>$500.00</h3> {{isShow()}}
              <p>{{filter(customer.createdAt)}}</p>
            </ion-col>
          </ion-row>
        </ion-item>
      </ion-list>

      <ion-fab horizontal="end" vertical="bottom" slot="fixed">
        <ion-fab-button @click="createNewCustomer">
          <ion-icon :icon="icons.addOutline"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
    <!-- <Loader/> -->
    <!-- ion menu here -->
  </base-layout>
</template>

<script>
import CreateCustomer from "@/components/Modals/CreateCustomerModal.vue";
import moment from 'moment'
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
  IonSearchbar,
  IonFab,
  IonFabButton,
  IonItem
  
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
      showSearchColor: false,
    };
  },
  mounted() {
    
  },
  components: {
    // DessetModal,
   
    IonFab,
    IonSearchbar,
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
    IonFabButton,
  IonItem
  },
  computed:{
    
  },
  methods: {
   
    filter(value, formatType = 'LL'){
      if(!value) return ""
      return moment(value).format((formatType = "LL"))
    },
    customers(){
      return this.$store.state.customer.customer
    },
 isShow(){
    return this.$store.getters['customer/isShow']
     
    },
    
    hideColor() {
      this.showSearchColor = false;
    },
    showSearchColorMethod() {
      this.showSearchColor = true;
    },
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
ion-header ion-toolbar ion-title .title_inner {
  min-height: 60px;
}
ion-header ion-toolbar ion-title .title_inner span {
  position: absolute;
  left: 0;
  right: 0;
  width: fit-content;
  margin: 0 auto;
}
ion-header ion-toolbar ion-title .title_inner ion-select {
  width: fit-content;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1.3px;
  padding: 0;
  font-size: 1rem;
  color: var(--primary);
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
ion-card {
  border-radius: 0px;
  width: calc(100% - 0px);
  margin: 0 auto;
  background: var(--white);
  margin-bottom: 15px;
  box-shadow: none;
  padding: 17px 16px;
}
ion-card h1 {
  margin: 0;
  color: var(--text-black);
  font-size: 1.1rem;
  font-weight: 600;
  padding-bottom: 20px;
}
ion-card .card_containt h3 {
  margin: 0;
  color: var(--primary);
  font-size: 1rem;
  text-transform: uppercase;
  padding-top: 14px;
  padding-bottom: 5px;
  letter-spacing: 1px;
}
ion-card .graph_container {
  position: relative;
  overflow: hidden;
  min-height: 220px;
  padding-bottom: 30px;
}
ion-card .graph_container .text_container {
  position: absolute;
  bottom: -22px;
  left: 0;
  width: 100%;
  height: 100%;
}
ion-card .graph_container .text_container p {
  position: relative;
  width: 100%;
  margin: 0;
  padding-bottom: 18px;
}
ion-card .graph_container .text_container p span {
  display: block;
  color: var(--text-black);
  width: fit-content;
  font-size: 0.8rem;
  font-weight: 500;
  min-width: 40px;
  text-align: right;
  z-index: 999;
  position: relative;
}
ion-card .graph_container .text_container p::before {
  content: "";
  position: absolute;
  top: -4px;
  bottom: 0;
  right: 0;
  margin: 0 auto;
  width: calc(100% - 0px);
  height: 1px;
  background: #ccc;
  opacity: 0.7;
}
ion-card .graph_container .graph {
  position: absolute;
  bottom: 0px;
  right: 0;
  width: calc(100% - 40px);
  height: calc(100% - 16px);
  display: flex;
  align-items: flex-end;
  z-index: 9999;
  overflow-x: scroll;
  white-space: nowrap;
  padding-bottom: 8px;
}
ion-card .graph_container .graph .bar_box {
  display: inline-block;
  position: relative;
  height: calc(100% - 11px);
  margin: 0 5px;
  width: 30px;
  min-width: 30px;
  overflow: visible !important;
  -webkit-animation: bar_box 0.9s 0.1s;
  -moz-animation: bar_box 0.9s 0.1s;
  animation: bar_box 0.9s 0.1s;
}
ion-card .graph_container .graph .bar_box h4 {
  color: var(--text-black);
  font-size: 0.8rem;
  font-weight: 500;
  text-align: center;
  margin: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
ion-card .graph_container .graph .bar_box .bar {
  position: absolute;
  bottom: 8px;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 999;
  width: 100%;
  max-height: calc(100% - 1px);
  transition: all 0.3s;
  -webkit-animation: bar 0.9s 0.1s;
  -moz-animation: bar 0.9s 0.1s;
  animation: bar 0.9s 0.1s;
}
ion-card .graph_container .graph .bar_box .bar h5 {
  position: absolute;
  top: -3px;
  right: 0;
  left: 0;
  z-index: 99;
  color: var(--text-black);
  font-size: 0.55rem;
  font-weight: 500;
  text-align: center;
  width: fit-content;
  margin: 0 auto;
}
ion-card .graph_container .graph .bar_box .bar::before {
  content: "";
  position: absolute;
  top: 11px;
  left: 0;
  right: 0;
  width: 100%;
  height: calc(100% - 25px);
  margin: auto;
  background: linear-gradient(
    to bottom,
    rgba(15, 193, 167, 1) 35%,
    rgba(255, 255, 255, 0.89) 100%
  );
}
ion-card .graph_container .graph .bar_box:first-child {
  margin-left: 15px;
}
ion-card .graph_container .graph .bar_box:last-child {
  margin-right: 15px;
}
/* Bar Graph Vertical Animations */
@-webkit-keyframes bar_box {
  0% {
    height: 0px;
  }
  100% {
    height: calc(100% - 11px);
  }
}
@-webkit-keyframes bar {
  0% {
    opacity: 0.1;
  }
  100% {
    opacity: 1;
  }
}
ion-list {
  background: var(--transparent) !important;
  margin: 0;
  padding: 0;
}
ion-list h2 {
  margin: 0;
  color: var(--text-light);
  font-weight: 500;
  font-size: 0.95rem;
  padding: 12px 16px 11px 16px;
}
ion-list ion-item {
  --min-height: unset !important;
  --inner-padding-end: 0px;
  --inner-min-height: unset !important;
  --padding-start: 0;
  --highligh-color-focused: var(--transparent) !important;
  background: var(--white);
  width: calc(100% - 25px);
  margin: 0 auto;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 12px 18px;
}
ion-list ion-item ion-row {
  width: 100%;
}
ion-list ion-item ion-row ion-col {
  padding: 0;
}
ion-list ion-item ion-row ion-col h3 {
  color: var(--text-black);
  font-size: 0.95rem;
  font-weight: 600;
  padding-bottom: 5px;
  margin: 0;
}
ion-list ion-item ion-row ion-col p {
  margin: 0;
  font-size: 0.8rem;
  font-weight: 400;
  color: var(--green_color);
  padding-bottom: 5px;
}

ion-searchbar {
  --border-radius: 10px;
  --background: #e9ecef;
  --box-shadow: none;
  --color: #3c3b3b;
  --placeholder-color: #3c3b3b;
  --placeholder-font-weight: bold;
  --placeholder-opacity: 1;
  visibility: visible;

  /* width: 60%;
        margin: 0 auto; */
  text-align: left;
}
.ion-backprimary {
  --background: var(--primary);
  color: var(--white) !important;
  --placeholder-color: var(--white);
  visibility: visible;
  animation: fadeIn 5s;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
/* .action-sheet-wrapper.sc-ion-action-sheet-md {
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
/* }  */

/* // css for slide */
</style>
