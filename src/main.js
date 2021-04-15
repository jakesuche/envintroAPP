import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';
import store from './store'

import 'vue-tel-input/dist/vue-tel-input.css'

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import 'qrious'
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
// import sweetAlert from 'vue-sweetalert2'
// import 'sweetalert2/dist/sweetalert2.min.css';
 
/* Theme variables */
import './theme/variables.css';
import './theme/action.css'
import './theme/core.css'
import BaseLayout from './components/Base/BaseLayout'
import '@/actionSheet'
import icons from '@/icon'
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import EventBus from "@/EventBus";




const app = createApp(App)
  .use(IonicVue)
  .use(router)
  // .use(sweetAlert)
 
  .use(store)
  app.config.globalProperties.icons = icons
  app.config.globalProperties.$EventBus  = EventBus 
app.component('vue-phone-number-input',VuePhoneNumberInput)
app.component('base-layout', BaseLayout ) 
router.isReady().then(() => {
  
  app.mount('#app');
});

defineCustomElements(window);