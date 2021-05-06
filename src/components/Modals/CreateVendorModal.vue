<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button @click="closeModal">
            <ion-icon :icon="arrowBack"> </ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title slot="start">
          New Vendor
        </ion-title>

        <ion-buttons slot="end">
          <ion-button>
            <ion-title>
              SAVE
            </ion-title>
          </ion-button>
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-button>
            <ion-icon
              style="font-size:40px"
              class="contact"
              :icon="readerOutline"
            >
            </ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card>
        <ion-card-content>
          <ion-item>
            <ion-thumbnail slot="start">
              <img
                :src="
                  imageUrl
                    ? imageUrl
                    : 'https://via.placeholder.com/150'
                "
                alt=""
              />
            </ion-thumbnail>
            <ion-button
              @click="takePhoto"
              size="default"
              fill="clear"
              style="color: white; --background:#6225D2"
            >
              <ion-icon :icon="icons.camera" slot="start"></ion-icon>
              <span >Take Photo</span>
            </ion-button>
          </ion-item>
          <ion-item>
            <ion-label position="floating" style="color:#343a40"
              >First Name</ion-label
            >
            <ion-input></ion-input>
            <ion-icon
              class="form-icon"
              :icon="icons.documentTextOutline"
              slot="start"
            ></ion-icon>
          </ion-item>
          <ion-item>
            <ion-label position="floating" style="color:#343a40"
              >Last Name</ion-label
            >
            <ion-input></ion-input>
            <ion-icon
              class="form-icon"
              :icon="icons.documentText"
              slot="start"
            ></ion-icon>
          </ion-item>

          <ion-item>
            <ion-label position="floating" style="color:#343a40"
              >Customer Name</ion-label
            >
            <ion-input placeholder="Type to add"></ion-input>
            <ion-icon
              class="form-icon"
              :icon="icons.accessibility"
              slot="start"
            ></ion-icon>
          </ion-item>
          <ion-item>
            <ion-label position="floating" style="color:#343a40"
              >Email</ion-label
            >
            <ion-input placeholder="Type to add"></ion-input>
            <ion-icon
              class="form-icon"
              :icon="icons.mail"
              slot="start"
            ></ion-icon>
          </ion-item>
          <ion-item>
            <ion-label position="floating" style="color:#343a40"
              >Phone</ion-label
            >
            <ion-input placeholder="Type to add"></ion-input>
            <ion-icon
              class="form-icon"
              :icon="icons.phonePortrait"
              slot="start"
            ></ion-icon>
          </ion-item>

          <ion-item>
            <ion-label position="floating" style="color:#343a40"
              >Mobile</ion-label
            >
            <ion-input placeholder="Type to add"></ion-input>
            <ion-icon
              class="form-icon"
              :icon="icons.call"
              slot="start"
            ></ion-icon>
          </ion-item>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-header class="d-flex justify-content-between">
          <ion-card-title style="color:black;">
            Other Details
          </ion-card-title>
        </ion-card-header>

        <ion-card-content>
          <ion-item class="container-fluid">
            <ion-icon
              class="form-icon"
              :icon="icons.cash"
              slot="start"
            ></ion-icon>
            <ion-label>Currency</ion-label>
            <ion-select interface="popover">
              <ion-select-option value="usd"
                >United State Dollar</ion-select-option
              >
              <ion-select-option value="GBP"
                >United Kingdom Pounds</ion-select-option
              >
            </ion-select>
          </ion-item>

          <ion-item class="container-fluid" lines="none" v-if="!showAddSocial">
            <ion-label  @click="showSocial"
              >Add Social Contact</ion-label
            >
          </ion-item>
          <ion-card-content v-if="showAddSocial">
            <ion-item>
              <ion-label position="floating" style="color:#343a40"
                >Website</ion-label
              >
              <ion-input></ion-input>
              <ion-icon
                class="form-icon"
                :icon="icons.globe"
                slot="start"
              ></ion-icon>
            </ion-item>
            <ion-item>
              <ion-label position="floating" style="color:#343a40"
                >Facebook</ion-label
              >
              <ion-input></ion-input>
              <ion-icon
                class="form-icon"
                :icon="icons.logoFacebook"
                slot="start"
              ></ion-icon>
            </ion-item>
            <ion-item>
              <ion-label position="floating" style="color:#343a40"
                >Instagram</ion-label
              >
              <ion-input value="@"></ion-input>
              <ion-icon
                class="form-icon"
                :icon="icons.logoInstagram"
                slot="start"
              ></ion-icon>
            </ion-item>
          </ion-card-content>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-item @click="OpenBilling"  button="true" class="ion-activated" lines="none">
          <ion-icon 
            
            :icon="icons.navigate"
            slot="start"
            class="form-icon"
          ></ion-icon>
          <ion-label   style="color:#343a40"
            >Add Billing & Shipping address
          </ion-label>
        </ion-item>
      </ion-card>
     <AddContact/>
    </ion-content>
   
  </ion-page>
</template>

<script>

import { arrowBack, readerOutline, addCircleSharp } from "ionicons/icons";
import EventBus from "@/EventBus";
import { Plugins, CameraResultType } from '@capacitor/core';

const { Camera } = Plugins;
import {
  IonPage,
  IonTitle,
  IonHeader,
  IonToolbar,
  IonContent,
  IonBackButton,
  IonButtons,
  IonLabel,
  IonIcon,
  IonItem,
  IonInput,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonCheckbox,
  modalController,
} from "@ionic/vue";
import AddContact from "@/components/Modals/AddBillings.vue";
export default {
  data() {
    return {
      arrowBack,
      readerOutline,
      individual: "individual",
      business: "business",
      name: "",
      check: "",
      form: {
        customerType: "",
        lastname: "",
        firstname: "",
        businessname: "",
        customerDisplayName: "",
        email: "",
        phone: "",
        mobile: "",
      },
      addCircleSharp,
      showAddSocial: false,
      imageUrl:''
    };
  },
  mounted(){
    console.log(this.$refs)
  },
  created() {},
  components: {
    IonBackButton,
    IonPage,
    IonTitle,
    IonHeader,
    IonToolbar,
    IonContent,
    IonButtons,
    IonLabel,
    IonIcon,
    IonItem,
    IonInput,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonGrid,
    IonRow,
    IonCol,
    IonCheckbox,
    AddContact

  },

  methods: {
    OpenBilling(){
      
     this.$EventBus().emitter.emit("openModal", true)
  

    },
    checked(e) {
      console.log(e.detail.value);
      this.form.customerType = e.detail.value;
    },
    showSocial() {
      this.showAddSocial = true;
    },
    async closeModal() {
      let modal = await modalController.dismiss();
      // EventBus().emitter.emit('closeModal',true)
    },
    async takePhoto(){
      const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Uri
  });
  
  var imageUrl = image.webPath;
  console.log(imageUrl)
  this.imageUrl= imageUrl;
    }
  },
};
</script>

<style scoped>
ion-toolbar {
  --background: #343a40;
}
ion-input {
  --padding-start: 20px;
}
.label-check {
  margin-left: 10px;
}

.alert-btn {
  font-size: 17px !important;
  margin-top: 15px !important;
  /* margin-right: 140px!important; */
  position: absolute;
}
ion-content {
  --background: #f5f5f5;
}
ion-toolbar {
  --background: #343a40;
}
ion-input {
  min-height: 45px;

  /* border-bottom:1px solid black; */
  --color: #6c757d;
}
.label-check {
  margin-left: 10px;
}

/* ion-label{
   font-size: 24px!important;
        color: rgb(24, 11, 84) !important;
       font-family: 'Roboto', sans-serif;
       margin-bottom:10px!important
    

  
}  */


ion-radio {
  margin-right: 10px;
}

ion-checkbox {
  margin-right: 10px;
}

ion-card {
  border-radius: 12px;
}
.first-item-col {
  margin-bottom: -19px;
}

.form-icon {
    font-size: 30px;
    margin-top: 19px;
    color: #9870E2;
    margin-left: -15px;
    margin-right: 16px;
}
ion-toggle {
  --background: #dc3545c4;
  --background-checked: #e9ecef;
  --handle-background-checked: #dc3545c4;
}


:host :deep() ion-thumbnail {
  --size: 45px !important;
}
ion-card {
  box-shadow: none !important;
}
ion-item {
  --highlight-color-focused: #dc35458f;
}

ion-button{
  --border-radius: 13px!important;
  --box-shadow: -1px 1px 11px 2px rgba(51,41,51,0.41);
}
ion-button span{
      font-size: 12px;
}
</style>
