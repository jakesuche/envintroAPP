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
          New Items
        </ion-title>

        <ion-buttons slot="end">
          <ion-button>
            <ion-title>
              SAVE
            </ion-title>
          </ion-button>
        </ion-buttons>
        
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card>
        
       

        <ion-card-content>
          <ion-item>
            <ion-thumbnail slot="start">
              <img :src="(imagePreview)?imagePreview:'https://via.placeholder.com/150'" alt="">
            </ion-thumbnail>
            <ion-button @click="takePhoto" size="default" fill="clear" style="color: white; --background:#dc3545c4" >
               <ion-icon   :icon="icons.camera" slot="start"></ion-icon>
                Add Photo
            </ion-button>
          </ion-item>
          <ion-item >
            <ion-label position="floating" style="color:#343a40">Item Name</ion-label>
            <ion-input></ion-input>
            
            <ion-icon class="form-icon" :icon="icons.cart" slot="start"></ion-icon>
          </ion-item>

          <ion-item >
            <ion-label position="floating" style="color:#343a40">SKU</ion-label>
            <ion-input></ion-input>
            <ion-icon class="form-icon" :icon="icons.barcodeOutline" slot="start"></ion-icon>
          </ion-item>
          <ion-item >
            <ion-label position="floating" style="color:#343a40">Unit</ion-label>
            <ion-input placeholder="Type to add"></ion-input>
            <ion-icon class="form-icon" :icon="icons.scale" slot="start"></ion-icon>
          </ion-item>
          <ion-item   lines="none"  >
             <ion-checkbox  checked slot="end"></ion-checkbox>
            
             
              <ion-label lines="none" class="returnable" @click="showReturnableMessage"  style="color:#343a40">Returnable ? <ion-button class="alert-btn" fill="clear"  ><ion-icon   :icon="alertCircleOutline"></ion-icon></ion-button></ion-label>
           
           <ion-icon class="form-icon" :icon="icons.returnDownBack" slot="start"></ion-icon>
          </ion-item>
          
        </ion-card-content>
      </ion-card>
       <ion-card>
        <ion-card-header class="d-flex justify-content-between">
          <ion-card-title style="color:black;">
            Sale Informations
          </ion-card-title>
          <ion-toggle checked="true" @ionChange="showSaleInfo=!showSaleInfo" ></ion-toggle>
        </ion-card-header>

        <ion-card-content v-if="showSaleInfo">
          

          <ion-item >
            <ion-label position="floating" style="color:#343a40">Sellings Price (AUD)</ion-label>
            <ion-input></ion-input>
            <ion-icon class="form-icon" :icon="icons.wallet" slot="start"></ion-icon>
          </ion-item>

         
          <ion-item  >
            <ion-label position="floating" style="color:#343a40">Description</ion-label>
            <ion-input ></ion-input>
            <ion-icon class="form-icon" :icon="icons.reader" slot="start"></ion-icon>
          </ion-item>
           <ion-item  >
            <ion-label>Account</ion-label>
            <ion-select interface="popover">
              <ion-select-option v-for="(option , i ) in options" :key="i" :value="option"
                >{{option}} </ion-select-option
              >
              
            </ion-select>
          </ion-item>
         
          
        </ion-card-content>
      </ion-card>

        <ion-card>
        <ion-card-header class="d-flex justify-content-between">
          <ion-card-title style="color:black;">
            Purchase Informations
          </ion-card-title>
          <ion-toggle checked="true" @ionChange="showPurchaseInfo=!showPurchaseInfo" ></ion-toggle>
        </ion-card-header>

        <ion-card-content v-if="showPurchaseInfo">
          

          <ion-item >
            <ion-label position="floating" style="color:#343a40">Cost Price (AUD)</ion-label>
            <ion-input></ion-input>
            <ion-icon class="form-icon" :icon="addCircleSharp" slot="start"></ion-icon>
          </ion-item>

          <!-- <ion-item >
            <ion-label position="floating" style="color:#343a40">Account</ion-label>
            <ion-input></ion-input>
            <ion-icon class="form-icon" :icon="addCircleSharp" slot="start"></ion-icon>
          </ion-item> -->
          <ion-item >
            <ion-label position="floating" style="color:#343a40">Description</ion-label>
            <ion-input ></ion-input>
            <ion-icon class="form-icon" :icon="addCircleSharp" slot="start"></ion-icon>
          </ion-item>
         
         
          
        </ion-card-content>
      </ion-card>
       <ion-card>
        <ion-card-header class="d-flex justify-content-between">
          <ion-card-title style="color:black;">
            Add More
          </ion-card-title>
          <ion-toggle checked="false" @ionChange="showMore=!showMore" ></ion-toggle>
        </ion-card-header>

        <ion-card-content v-if="showMore">
          

          <ion-item >
            <ion-label position="floating" style="color:#343a40">Dimensions (cm)</ion-label>
            <ion-input></ion-input>
            <ion-icon class="form-icon" :icon="addCircleSharp" slot="start"></ion-icon>
          </ion-item>

          <ion-item >
            <ion-label position="floating" style="color:#343a40">Manufacturer </ion-label>
            <ion-input></ion-input>
            <ion-icon class="form-icon" :icon="addCircleSharp" slot="start"></ion-icon>
          </ion-item>
          <ion-item >
            <ion-label position="floating" style="color:#343a40">Brand</ion-label>
            <ion-input ></ion-input>
            <ion-icon class="form-icon" :icon="icons.print" slot="start"></ion-icon>
          </ion-item>
          <ion-item >
            <ion-label position="floating" style="color:#343a40" >UPC </ion-label>
            <ion-input v-model="barCoderesult" ></ion-input>
            <ion-icon :icon="addCircleSharp" class="form-icon"  slot="start"></ion-icon>
              <ion-button @click="openUpc" slot="end" fill="clear" class="alert-btn" ><ion-icon   :icon="alertCircleOutline"></ion-icon></ion-button>
              <ion-icon :icon="icons.qrCode" class="form-icon" slot="end" @click="scanBarcode" ></ion-icon>
            
          </ion-item>
          
          <ion-item >
            <ion-label position="floating" style="color:#343a40"  >ISBN</ion-label>
            <ion-input ></ion-input>
            <ion-icon class="form-icon" :icon="addCircleSharp" slot="start"></ion-icon>
            <ion-button @click="ShowIsbn" slot="end" fill="clear" class="alert-btn" ><ion-icon   :icon="alertCircleOutline"></ion-icon></ion-button>
          </ion-item>
          <ion-item >
            <ion-label position="floating" style="color:#343a40">EAN </ion-label>
            <ion-input ></ion-input>
            <ion-icon class="form-icon" :icon="addCircleSharp" slot="start"></ion-icon>
            <ion-button  @click="ShowEan" slot="end" fill="clear" class="alert-btn" ><ion-icon   :icon="alertCircleOutline"></ion-icon></ion-button>
          </ion-item>
          <ion-item >
            <ion-label position="floating"  style="color:#343a40">MPN </ion-label>
            <ion-input ></ion-input>
            <ion-icon class="form-icon" :icon="addCircleSharp" slot="start"></ion-icon>
            <ion-button slot="end"  @click="ShowMpn" class="alert-btn"  fill="clear"  ><ion-icon   :icon="alertCircleOutline"></ion-icon></ion-button>
          </ion-item>
         
         
          
        </ion-card-content>
      </ion-card>

      
    </ion-content>
  </ion-page>
</template>

<script>
import popUp from '@/directives/clickSound/popUp.mp3'
import { Plugins, CameraResultType } from '@capacitor/core';

const { Camera } = Plugins;

import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { arrowBack, readerOutline, addCircleSharp,alertCircleOutline } from "ionicons/icons";
import EventBus from "@/EventBus";
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
  alertController,
 IonToggle,
 IonThumbnail
} from "@ionic/vue";
import addContact from '@/components/Modals/AddBillings.vue'

import '@/theme/createItem.css'
export default {
  data() {
    return {
      arrowBack,
      readerOutline,
      individual: "individual",
      business: "business",
      name: "",
      check: "",
      
      alertCircleOutline,
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
      options:['Sales', 'General Income, Interest Income','Late Fee Income', 'Discount'],
      addCircleSharp,
      showAddSocial: false,
      showSaleInfo:true,
      showPurchaseInfo:true,
      showMore:false,
      barCoderesult:'',
      imagePreview:''
    };
  },
  created() {},
  components: {
    IonThumbnail,
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
    IonToggle

  },
  
  methods: {
    async takePhoto(){
      const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Uri
  });
  
  var imageUrl = image.webPath;
 
  this.imagePreview= imageUrl;
    },
     scanBarcode() {
      BarcodeScanner.scan()
        .then((barcodeData) => {
          this.barCoderesult = barcodeData.item;
          let result = JSON.stringify(err);
          alert(result);
          console.log("Barcode data", barcodeData);
        })
        .catch((err) => {
          let error = JSON.stringify(err);
          console.log("Error", err);
          alert(error);
        });
    },
    
    checked(e) {
      console.log(e.detail.value);
      this.form.customerType = e.detail.value;
    },
    showSocial() {
      this.showAddSocial = true;
    },
    async closeModal(){
      let modal = await modalController.dismiss()
      // EventBus().emitter.emit('closeModal',true)

    },
    async openModal(){
        let modal = await modalController.create({
            component:addContact
        })
        return modal.present()
    },
    async openUpc(){
      let alert = await alertController.create({
        
          cssClass: 'AlertClass',
         
          message: 'Twelve digit unique number associated with bar code (Universal product code)',
          buttons: ['OK'],
        });
       alert.present()
      .then(()=>{
        let audio =new Audio(popUp)
        audio.play()
      })
      
    },
    async showReturnableMessage(){
      let alert = await alertController.create({
        cssClass: 'AlertClass',
        message:'Enabling this option indicates that, the item can be return in a good condition',
        buttons: ['OK'],
      })
      alert.present()
      .then(()=>{
        let audio =new Audio(popUp)
        audio.play()
      })
    },
     async ShowIsbn(){
      let alert = await alertController.create({
        cssClass: 'AlertClass',
        message:'Twelve digit unique number associated with bar code (Universal Product Code',
        buttons: ['OK'],
      })
      alert.present()
      .then(()=>{
        let audio =new Audio(popUp)
        audio.play()
      })
    },
     async ShowEan(){
      let alert = await alertController.create({
        cssClass: 'AlertClass',
        message:'Thirteen digit unique number(internation Article Number)',
        buttons: ['OK'],
      })
      alert.present()
      .then(()=>{
        let audio =new Audio(popUp)
        audio.play()
      })
    },
     async ShowMpn(){
      let alert = await alertController.create({
        cssClass: 'AlertClass',
        message:'Thirteen digit unique commercial book identifier (International Standard book Number)',
        buttons: ['OK'],
      })
      alert.present()
      .then(()=>{
        let audio =new Audio(popUp)
        audio.play()
      })
    }

  },
};
</script>

<style scoped>
.alert-btn{
      font-size: 17px!important;
    margin-top: 15px!important;
    /* margin-right: 140px!important; */
    position: absolute;

}
 ion-content{
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
/* .label[floating],
.label[stacked],
.input-has-focus .label[floating] {
    color: #343a40 ;
}  */
.returnable{
  color: rgb(52, 58, 64);
    margin-top: 19px;
    font-size: 19px;
}



ion-radio{
  margin-right: 10px;
}

ion-checkbox{
  margin-right:10px
}

ion-card{
  border-radius:12px
}
.first-item-col{
  margin-bottom: -19px;
}
 
 .form-icon{
       font-size: 36px;
    margin-top: 19px;
    color: #dc35466b;
 }
 ion-toggle{
   --background:#dc3545c4;
--background-checked:#e9ecef;
--handle-background-checked:#dc3545c4;

 }

 ion-checkbox {
    margin-right: 10px;
    --background-checked: #dc3545a1;
    /* --border-color: white!important; */
    --border-color-checked: #dc3545a1;
}
:host :deep() ion-thumbnail {
   --size: 45px!important;
}
ion-card{
  box-shadow:none!important
}
ion-item{
  --highlight-color-focused: #dc35458f;
}
</style>
