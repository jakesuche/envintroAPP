<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="light"></ion-menu-button>
          <!-- <ion-button>
            <ion-icon class="menu-icon" :icon="menuSharp"></ion-icon>
          </ion-button> -->
        </ion-buttons>

        <ion-title class=" " id="">
          <ion-text>
            Packages
          </ion-text>
        </ion-title>
        <!-- <ion-buttons slot="end">
          <slot name="actions-end"></slot>
        </ion-buttons> -->
      </ion-toolbar>
    </ion-header>
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
        <ion-slide  >
          <ion-card>
           

            <ion-card-content> </ion-card-content>
            <ion-card-header>
              <ion-card-title>
                <h5 style="opacity:0.8">There are no entries on your list</h5>
              </ion-card-title>
            </ion-card-header>
          </ion-card>
        </ion-slide>
        <ion-slide class="customer-slide" >
          <ion-card>
          
            <img src="@/theme/gifs/ppackageStack.gif"/>
          
            <ion-card-header class="customer-slide">
              <ion-card-title>
                <h5 style="opacity:0.8">There are no entries on your list</h5>
              </ion-card-title>
            </ion-card-header>
          </ion-card>
        </ion-slide>
          <ion-slide class="customer-slide" >
          <ion-card>
           
            <img src="@/theme/gifs/ppackageStack.gif"/>
          
            <ion-card-header class="customer-slide">
              <ion-card-title>
                <h5 style="opacity:0.8">There are no entries on your list</h5>
              </ion-card-title>
            </ion-card-header>
          </ion-card>
        </ion-slide>
         <ion-slide>
          <ion-card>
           
            <img src="@/theme/gifs/deliveryvan.gif"/>
            
            <ion-card-header>
              <ion-card-title>
                <h5 style="opacity:0.8">There are no entries on your list</h5>
              </ion-card-title>
            </ion-card-header>
          </ion-card>
        </ion-slide>
      </ion-slides>
    </ion-content>

    <!-- ion menu here -->
  </ion-page>
</template>

<script>
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
      labels: ["ALL", "PACKED", "SHIPPED", "DELIVERED"],
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
  },
};
</script>

<style scoped>
lottie-player {
  margin-left: 50px;
  margin-top: 40px;
}
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
  --background: #343a40;
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

div.card-titles {
  margin-left: 30px;
}
ion-card {
  border-radius: 10px;
  box-shadow:none;
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

.customer-slide{
  background:#f3f3f5ff
}
</style>
