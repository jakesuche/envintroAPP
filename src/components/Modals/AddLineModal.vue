<template>
  <base-layout PageTitle="Add line item">
    <template v-slot:ion-menu-btn>
      <ion-button @click="closeModal">
        <ion-icon :icon="arrowBack"> </ion-icon>
      </ion-button>
    </template>
    <ion-content>
      <ion-card>
        <ion-card-content>
          <ion-item lines="none">
            <ion-label position="stacked">Item</ion-label>
            <ion-input v-model="form.item" placeholder="Start typing to select an Item"></ion-input>
            <ion-button class="barcodebtn" fill="clear" @click="scanBarcode"><ion-icon  class="barcodeIcon" :icon="barcode"></ion-icon></ion-button>
          </ion-item>
          <ion-item lines="none">
            <ion-label position="stacked">Description</ion-label>
            <ion-input placeholder="Add a descryption for your Item"></ion-input>
          </ion-item>
        <ion-grid>
            <ion-row>
                <ion-col>
                     <ion-item lines="none">
            <ion-label position="stacked">Quatity</ion-label>
            <ion-input></ion-input>
          </ion-item>
                </ion-col>
                <ion-col>
                     <ion-item lines="none">
            <ion-label position="stacked">Rate</ion-label>
            <ion-input></ion-input>
          </ion-item>
                </ion-col>
                
            </ion-row>
        </ion-grid>
         
        </ion-card-content>
      </ion-card>
      <ion-card>
        <ion-card-content>
          <ion-item lines="none">
            <ion-label position="stacked">Account</ion-label>
             <ion-select interface="popover">
            <ion-select-option value="nes"> General income</ion-select-option>
            <ion-select-option value="n64">Late fee income</ion-select-option>
            <ion-select-option value="ps">Advertisement and  Maketing</ion-select-option>
            <ion-select-option value="genesis">Offices supplier</ion-select-option>
            <ion-select-option value="saturn">Discount</ion-select-option>
            <ion-select-option value="snes">Credit card charges</ion-select-option>
          </ion-select>
          </ion-item>
         
        </ion-card-content>
      </ion-card>
      
    </ion-content>
  </base-layout>
</template>

<script>
import { BarcodeScanner} from '@ionic-native/barcode-scanner'
import { arrowBack,barcode } from "ionicons/icons";
import {
  IonIcon,
  IonContent,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonLabel,
  IonInput,
  IonItem,
  IonButton,
  modalController,
} from "@ionic/vue";
export default {
  data() {
    return {
      arrowBack,
      barcode,
      form:{
          item:''
      }
    };
  },
  components: {
    IonIcon,
    IonContent,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonLabel,
    IonInput,
    IonItem,
    IonButton,
  },
  mounted(){
    
  },
  methods: {
    closeModal() {
      modalController.dismiss();
    },
    // scanBarcode(){
    //   BarcodeScanner.scan(
    //     function(result){
    //       this.form.item = 'llls'
    //     },
    //     function(error){
    //       alert("scanning failed" + error)
    //     },
    //     {
    //       preferFrontCamera : true, // iOS and Android
    //       showFlipCameraButton : true, // iOS and Android
    //       showTorchButton : true, // iOS and Android
    //       torchOn: true, // Android, launch with the torch switched on (if available)
    //       saveHistory: true, // Android, save scan history (default false)
    //       prompt : "Place a barcode inside the scan area", // Android
    //       resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
    //       formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
    //       orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
    //       disableAnimations : true, // iOS
    //       disableSuccessBeep: false // iOS and Android
    //     }
    //   )
    // },
    scanBarcode() {
      BarcodeScanner.scan({
          preferFrontCamera : true, // iOS and Android
          showFlipCameraButton : true, // iOS and Android
          showTorchButton : true, // iOS and Android
          torchOn: true, // Android, launch with the torch switched on (if available)
          saveHistory: true, // Android, save scan history (default false)
          prompt : "Place a barcode inside the scan area", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : true, // iOS
          disableSuccessBeep: false // iOS and Android
        })
        .then((barcodeData) => {
          this.form.item = barcodeData.text
          
         
          console.log("Barcode data", barcodeData);
        })
        .catch((err) => {
          let error = JSON.stringify(err) 
          console.log("Error", err);
          
        });
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Roboto:wght@500;900&display=swap');
    ion-input{
        border-bottom:1px solid #807f7f5c
    }
    ion-label{
        font-size: 24px!important;
        color: rgb(24, 11, 84) !important;
       font-family: 'Roboto', sans-serif;
       margin-bottom:12px!important
    }
    ion-card{
        border-radius:12px
    }
    .barcodeIcon{
       
    font-size: 30px;
    }
    ion-content{
        --background: #f5f5f5;
    }
    .barcodebtn{
        position:absolute;
        top:50px;
        right:-1px;
    }
</style>
