<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <slot name="ion-menu-btn"></slot>
          <!-- <ion-menu-button color="light"></ion-menu-button> -->
        </ion-buttons>
        <ion-buttons slot="start">
          <slot name="ion-back-button"></slot>
          <!-- <ion-back-button :default-href="DeFaultBack"></ion-back-button> -->
        </ion-buttons>
        <ion-buttons slot="start">
          <ion-button @click="$router.go(0)">
            <ion-icon :icon="refreshCircleSharp">

            </ion-icon>
          </ion-button>
        </ion-buttons>
        
       
        <ion-title>
          {{ PageTitle }}
        </ion-title>
         <ion-buttons slot="end">
          <slot name="actions-end1"></slot>
        </ion-buttons>
        <ion-buttons slot="end">
         <slot name="actions-end2"></slot>
        </ion-buttons>
        <ion-buttons slot="end">
         <slot name="actions-end3"></slot>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
   
    
        <slot />
     
   
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
  IonIcon
  
} from "@ionic/vue";
import { refreshCircleSharp } from 'ionicons/icons'
export default {
  data(){
    return{
      refreshCircleSharp
    }
  },
  props: ["PageTitle", "DeFaultBack"],
  created() {
    console.log(this.PageTitle);
  },
  components: {
    IonBackButton,
    IonPage,
    IonTitle,
    IonHeader,
    IonToolbar,
    IonContent,
    IonButtons,
    IonIcon
  },
};
</script>

<style scoped>
  ion-toolbar {
  --background: none
}
</style>
