<template>
  <!-- <ion-app>
   
    <ion-router-outlet />
  </ion-app> -->
  <ion-app>
    <!-- <IonSplitPane content-id="main-content"> -->
    <menu-left />
    <ion-router-outlet id="main-content"></ion-router-outlet>
    <!-- </IonSplitPane> -->
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/vue";
import { Plugins } from "@capacitor/core";
const { Storage } = Plugins;
import { defineComponent } from "vue";
import MenuLeft from "./components/Menu.vue";
export default defineComponent({
  name: "App",

  components: {
    IonApp,
    IonRouterOutlet,
    MenuLeft,
    IonSplitPane,
  },
  
  mounted() {
    const sheet = document.querySelector(".custome_css");
    
    console.log(this.$store)
    this.getItem();
    this.getCustomers()
    
  },
  created(){
    this.getSales()
  },
  methods: {
      getSales(){
        this.$store.dispatch('sales/getSales')
      },
      getCustomers(){
      this.$store.dispatch('customer/getCustomers')
      .then(res=>{
        
        const result = JSON.stringify(res)
       
      })
      .catch(err=>{
        console.log(err.response)
      })
    }
    ,
    async getItem() {
      const { value } = await Storage.get({ key: "user" });
      const user = JSON.parse(value);
      
      this.$store.dispatch("auth/getLocalStoredUser", user);
    },
  },
});
</script>

<style scoped>
@font-face {
  font-family: "Google Sans";
  src: url("/assets/font/GoogleSans-Italic.woff2") format("woff2"),
    url("/assets/font/GoogleSans-Italic.woff") format("woff");
  font-weight: normal;
  font-style: italic;
}
@font-face {
  font-family: "Google Sans";
  src: url("/assets/font/GoogleSans-Regular.woff2") format("woff2"),
    url("/assets/font/GoogleSans-Regular.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "Google Sans";
  src: url("/assets/font/GoogleSans-BoldItalic.woff2") format("woff2"),
    url("/assets/font/GoogleSans-BoldItalic.woff") format("woff");
  font-weight: bold;
  font-style: italic;
}
@font-face {
  font-family: "Google Sans";
  src: url("/assets/font/GoogleSans-Bold.woff2") format("woff2"),
    url("/assets/font/GoogleSans-Bold.woff") format("woff");
  font-weight: bold;
  font-style: normal;
}
@font-face {
  font-family: "Google Sans";
  src: url("/assets/font/GoogleSans-MediumItalic.woff2") format("woff2"),
    url("/assets/font/GoogleSans-MediumItalic.woff") format("woff");
  font-weight: 500;
  font-style: italic;
}
@font-face {
  font-family: "Google Sans";
  src: url("/assets/font/GoogleSans-Medium.woff2") format("woff2"),
    url("/assets/font/GoogleSans-Medium.woff") format("woff");
  font-weight: 500;
  font-style: normal;
}

body,
html,
p,
span,
h1,
h2,
h3,
h4,
h5,
h6,
strong,
li {
  --ion-font-family: "Google Sans";
  font-family: "Google Sans";
}
.zmdi {
  font: normal normal normal 14px/1 "Material-Design-Iconic-Font";
}
</style>
