<template>
  <!-- <ion-app>
   
    <ion-router-outlet />
  </ion-app> -->
  <ion-app>
    <!-- <IonSplitPane content-id="main-content"> -->
      <menu-left/>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    <!-- </IonSplitPane> -->
  </ion-app>
</template>

<script >
import { IonApp, IonRouterOutlet,IonSplitPane } from '@ionic/vue';

import { defineComponent } from 'vue';
import MenuLeft from './components/Menu.vue'
export default defineComponent({
  name: 'App',
 
  components: {
    IonApp,
    IonRouterOutlet,
    MenuLeft,
    IonSplitPane,
  },
  mounted(){
    const sheet = document.querySelector('.custome_css')
    console.log(sheet)
  }
});
</script>