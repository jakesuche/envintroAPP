<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
          <!-- <ion-button>
            <ion-icon class="menu-icon" :icon="menuSharp"></ion-icon>
          </ion-button> -->
        </ion-buttons>

        <ion-title class=" " id="">
          <ion-text>
            Task
          </ion-text>
        </ion-title>
        <!-- <ion-buttons slot="end">
          <slot name="actions-end"></slot>
        </ion-buttons> -->
      </ion-toolbar>
    </ion-header>
    <ion-content class="bg_color">
      <ion-segment :value="0" ref="ion-segment" :swipe-gesture="true">
        <ion-segment-button
          :value="i"
          v-for="(label, i) in labels"
          :key="i"
          @click="segmentSelected(i)"
        >
          <ion-label>{{ label }}</ion-label>
        </ion-segment-button>
      </ion-segment>
      <!-- <ion-segment mode="ios" lines="none" @ionChange="segmentChanged()" [(ngModel)]="segment">
        <ion-segment-button mode="ios" value="0">
            <ion-label>
                Later Task
            </ion-label>
        </ion-segment-button>
        <ion-segment-button mode="ios" value="1">
            <ion-label>
                Completed Task
            </ion-label>
        </ion-segment-button>
    </ion-segment> -->
      <ion-slides @ionSlideDidChange="ionSlideDidChange($event)" ref="slides">
        <ion-slide>
          <ion-list lines="none">
            <ion-item
              class="delivered animate__animated animate__fadeInUp"
              @click="taskInfo"
            >
              <div class="item_inner d-flex">
                <div class="img_box center_img">
                  <img src="assets/images/3.png" class="crop_img" />
                </div>
                <div class="text_box">
                  <h3 class="d-flex">
                    Helthyfy Medicals
                    <span class="end order_status">Completed</span>
                  </h3>
                  <h4 class="d-flex">13 June, 11:40 am</h4>
                  <div class="item_details d-flex">
                    <div class="item_list">
                      <h3 class="d-flex">Non Drosy Laritin Tablet</h3>
                      <h3 class="d-flex">Xenical 120mg Tablet</h3>
                    </div>
                  </div>
                </div>
              </div>
            </ion-item>
            <ion-item
              class="cancelled animate__animated animate__fadeInUp"
              @click="taskInfo"
            >
              <div class="item_inner d-flex">
                <div class="img_box center_img">
                  <img src="assets/images/2.png" class="crop_img" />
                </div>
                <div class="text_box">
                  <h3 class="d-flex">
                    Samantha Smith<span class="end order_status">{{
                      "cancelled" | translate
                    }}</span>
                  </h3>
                  <h4 class="d-flex">13 June, 11:40 am</h4>
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
            <ion-item
              class="delivered animate__animated animate__fadeInUp"
              @click="taskInfo"
            >
              <div class="item_inner d-flex">
                <div class="img_box center_img">
                  <img src="assets/images/5.png" class="crop_img" />
                </div>
                <div class="text_box">
                  <h3 class="d-flex">
                    Well Life Store
                    <span class="end order_status">Completed</span>
                  </h3>
                  <h4 class="d-flex">13 June, 11:40 am</h4>
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
        </ion-slide>

        <ion-slide>
          <ion-list lines="none">
            <ion-item
              class="delivered animate__animated animate__fadeInUp"
              @click="taskInfo"
            >
              <div class="item_inner d-flex">
                <div class="img_box center_img">
                  <img src="assets/images/3.png" class="crop_img" />
                </div>
                <div class="text_box">
                  <h3 class="d-flex">
                    Helthyfy Medicals
                    <span class="end order_status">Completed</span>
                  </h3>
                  <h4 class="d-flex">13 June, 11:40 am</h4>
                  <div class="item_details d-flex">
                    <div class="item_list">
                      <h3 class="d-flex">Non Drosy Laritin Tablet</h3>
                      <h3 class="d-flex">Xenical 120mg Tablet</h3>
                    </div>
                  </div>
                </div>
              </div>
            </ion-item>
            <ion-item
              class="cancelled animate__animated animate__fadeInUp"
              @click="taskInfo"
            >
              <div class="item_inner d-flex">
                <div class="img_box center_img">
                  <img src="assets/images/2.png" class="crop_img" />
                </div>
                <div class="text_box">
                  <h3 class="d-flex">
                    Samantha Smith<span class="end order_status">{{
                      "cancelled" | translate
                    }}</span>
                  </h3>
                  <h4 class="d-flex">13 June, 11:40 am</h4>
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
            <ion-item
              class="delivered animate__animated animate__fadeInUp"
              @click="taskInfo"
            >
              <div class="item_inner d-flex">
                <div class="img_box center_img">
                  <img src="assets/images/5.png" class="crop_img" />
                </div>
                <div class="text_box">
                  <h3 class="d-flex">
                    Well Life Store
                    <span class="end order_status">Completed</span>
                  </h3>
                  <h4 class="d-flex">13 June, 11:40 am</h4>
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
        </ion-slide>
      </ion-slides>
    </ion-content>

    <!-- ion menu here -->
    <ion-fab horizontal="end" vertical="bottom" slot="fixed">
      <ion-fab-button @click="openModal">
        <ion-icon :icon="icons.addOutline"></ion-icon>
      </ion-fab-button>
    </ion-fab>
  </ion-page>
</template>

<script>
import TaskModal from '@/components/Modals/CreateTaskModal.vue'
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
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  modalController
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
      labels: ["On Progress", "Completed"],
    };
  },
  mounted() {
    console.log(this.$refs["slides"].childNode);
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
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
  },

  methods: {
    ionSlideDidChange(event) {
      this.$refs["slides"].getActiveIndex().then((res) => {
        this.$refs["ion-segment"].value = res;
      });
    },
    segmentSelected(i) {
      this.$refs["slides"].slideTo(i);
    },
    async openModal(){
      let modal = await modalController.create({
        component:TaskModal
      })
      modal.present()
    }
  },
};
</script>

<style scoped>


/* css for second */

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
ion-segment-button{
    --color-checked:var(--primary)
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
</style>

@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@600&display=swap");

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

div.card-titles {
  margin-left: 30px;
}
ion-card {
  border-radius: 10px;
  box-shadow: none;
}
ion-card-title {
  color: black;
  font-weight: 800;
  font-size: 38px;
  font-family: "Raleway", sans-serif;
  opacity: 0.8;
}
ion-card-subtitle {
  color: black;
  font-family: "Raleway", sans-serif;
  opacity: 0.7;
  /* font-weight: 800;
   font-size:28px */
}
.space-under {
  margin-top: 70px;
}
ion-card {
  --box-shadow: none;
}
img {
  height: 30%;
  width: 20%;
}
.sale-activity {
  margin-top: 12px;
  margin-left: 12px;
}

.in_hand {
  border-left: #3c1ef2 2px solid;
  margin-left: 10px;
}
.to_be_recieved {
  border-left: #fd2626 2px solid;
}

/* // css for slide */
ion-slides {
  height: 100%;
}

.swiper-slide {
  display: block;
}

.swiper-slide h2 {
  margin-top: 2.8rem;
}

.swiper-slide img {
  height: 30%;
  width: 100%;
  margin: 0px 0 0px;
  pointer-events: none;
}

b {
  font-weight: 500;
}

p {
  padding: 0 40px;
  font-size: 14px;
  line-height: 1.5;
  color: var(--ion-color-step-600, #60646b);
}

p b {
  color: var(--ion-text-color, #000000);
}

.customer-slide {
  background: var(--bg-color);
}



<ion-content>
      <ion-segment :value="0" ref="ion-segment" :swipe-gesture="true">
        <ion-segment-button
          :value="i"
          v-for="(label, i) in labels"
          :key="i"
          @click="segmentSelected(i)"
        >
          <ion-label>{{ label }}</ion-label>
        </ion-segment-button>
      </ion-segment>

      <ion-slides ref="slides" @ionSlideDidChange="ionSlideDidChange($event)">
        <ion-slide class="customer-slide" >
          <ion-card >
           
               <img src="@/theme/gifs/Task_animation.gif"/>
            <!-- <ion-card-content> </ion-card-content> -->
            <!-- <ion-card-header>
              <ion-card-title>
                <h5 style="opacity:0.8">There are no entries on your list</h5>
              </ion-card-title>
            </ion-card-header> -->
          </ion-card>
        </ion-slide>
        <ion-slide class="customer-slide">
          <ion-card>
          
            <img src="@/theme/gifs/Task_animation.gif"/>
          
            <!-- <ion-card-header class="customer-slide">
              <ion-card-title>
                <h5 style="opacity:0.8">There are no entries on your list</h5>
              </ion-card-title>
            </ion-card-header> -->
          </ion-card>
        </ion-slide>
          <ion-slide class="customer-slide" >
          <ion-card>
           
            <img src="@/theme/gifs/Task_animation.gif"/>
          
            <!-- <ion-card-header class="customer-slide">
              <ion-card-title>
                <h5 style="opacity:0.8">There are no entries on your list</h5>
              </ion-card-title>
            </ion-card-header> -->
          </ion-card>
        </ion-slide>
        
      </ion-slides>
    </ion-content>
