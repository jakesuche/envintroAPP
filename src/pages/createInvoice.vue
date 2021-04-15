<template>
  <base-layout PageTitle="New Invoices">
    <template v-slot:ion-menu-btn>
      <ion-back-button default-href="/invoices"></ion-back-button>
    </template>
    <template v-slot:actions-end1>
      <ion-button>
        <ion-title>
          SAVE
        </ion-title>
      </ion-button>
    </template>
    <template v-slot:actions-end2>
      <ion-button>
        <ion-icon style="font-size:40px" class="contact" :icon="readerOutline">
        </ion-icon>
      </ion-button>
    </template>

    <ion-content>
      <ion-card>
        <ion-card-content>
          <ion-item lines="none">
            <ion-label position="stacked" style="color:#0000ff85"
              >Customer Name <span class="times"> *</span></ion-label
            >
            <ion-input
              placeholder="Start typing to select a Customer"
            ></ion-input>
          </ion-item>

          <ion-item lines="none">
            <ion-label position="stacked" style="color:#0000ff85"
              >Invoice Number <span class="times"> *</span></ion-label
            >
            <ion-input></ion-input>
            <button
            @click="presentIt"
              ion-button
              clear
              icon-only
              style="padding-top: 10px;"
              color="primary"
              type="button"
              item-right
            >
              <ion-icon :icon="settings"> </ion-icon>
            </button>
          </ion-item>
          <ion-item lines="none">
            <ion-label position="stacked" style="color:#0000ff85"
              >Order Number</ion-label
            >
            <ion-input></ion-input>
          </ion-item>
          <ion-item lines="none">
            <ion-label class="no-effect" style="font-size: 18px !important;"
              >Invoice Date <span class="times"> *</span>
            </ion-label>
            <ion-datetime
              value="2021-01-01"
              placeholder="Select Date"
            ></ion-datetime>
          </ion-item>
          <ion-item lines="none">
            <ion-label position="stacked" style="color:#0000ff85"
              >Terms <span class="times"> *</span>
            </ion-label>
            <ion-input></ion-input>
          </ion-item>
          <ion-item lines="none">
            <ion-label class="no-effect" style="font-size: 18px !important;"
              >Due Date <span class="times"> *</span>
            </ion-label>
            <ion-datetime
              value="2021-01-01"
              placeholder="Select Date"
            ></ion-datetime>
          </ion-item>
          <div class="date">
            <ion-item lines="none">
              <ion-label class="no-effect" style="font-size: 18px !important;"
                >Time issued</ion-label
              >
              <ion-datetime
                display-format="h:mm A"
                picker-format="h:mm A"
                value="2021-01-01"
              ></ion-datetime>
            </ion-item>
          </div>
        </ion-card-content>
      </ion-card>
      <ion-card>
        <ion-card-content>
          <ion-item lines="none">
            <ion-label style="font-size: 18px !important;"
              >Sales Person</ion-label
            >
            <ion-select interface="popover">
              <ion-select-option value="uchechukwu"
                >Uchechukwu</ion-select-option
              >
              <ion-select-option value="chidiebere"
                >Chidiebere</ion-select-option
              >
              <ion-select-option value="tolu">Tolu</ion-select-option>
            </ion-select>
          </ion-item>
        </ion-card-content>
      </ion-card>
      <ion-card>
        <ion-card-content>
          <ion-button
            class="addlinebtn"
            @click="presentModal"
            expand="block"
            fill="outline"
          >
            <ion-icon
              style="font-size: 30px;
    padding-right: 10px;color:#283e54;"
              :icon="addCircle"
            ></ion-icon
            >&nbsp;&nbsp;
            <h3>Add Line Item</h3></ion-button
          >
        </ion-card-content>
      </ion-card>
      <ion-card>
        <ion-card-content>
          <ion-item lines="none">
            <ion-label position="stacked">Customer Notes</ion-label>
            <ion-input value="Thanks for your business."></ion-input>
          </ion-item>
        </ion-card-content>
      </ion-card>
    </ion-content>

    <!-- add invoice number  -->
    
      
      
    <div class="cupertino-pane" v-show="false">
       <ion-card class="cupertino-card" >
        
        
          <ion-grid     class="mb-3 contain">
            <ion-row>
              <ion-col size="5">
                <ion-item lines="none">
                  <ion-label position="stacked">Prefix</ion-label>
                  <ion-input value="NEKKY-"></ion-input>
                </ion-item>
              </ion-col>
              <ion-col size="7">
                <ion-item lines="none">
                  <ion-label position="stacked">Next Number</ion-label>
                  <ion-input v-model="invoiceNumber"></ion-input>
                </ion-item>
              </ion-col>
            </ion-row>
          </ion-grid>
        
        <ion-button size="default" expand="block" @click="generateInvoiceNumber">
                Click to generate invoice
       </ion-button>
      </ion-card>
      
     
    
</div>
  </base-layout>
</template>

<script>
// import { Plugins, CameraResultType } from "@capacitor/core";

// const { Camera, BarcodeScanner } = Plugins;

import { CupertinoPane } from "cupertino-pane";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import AddLineModal from "@/components/Modals/AddLineModal.vue";
import AddInvoiceNumber from '@/components/Modals/AddInvoiceNumber.vue'
import {
  arrowBack,
  readerOutline,
  addCircleSharp,
  addCircle,
  settingsOutline,
} from "ionicons/icons";
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
  IonDatetime,
  IonModal,
  loadingController
  
} from "@ionic/vue";

export default {
  data() {
    return {
      arrowBack,
      readerOutline,
      individual: "individual",
      business: "business",
      name: "",
      check: "",
      addCircle,
     
      settings: settingsOutline,
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
      barCoderesult: '',
      invoiceNumber:''
    };
  },
  mounted() {
    this.closeModal();
   
    
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
    IonDatetime,
    IonModal,
    AddInvoiceNumber
  },

  methods: {
     presentIt(){
    let pane = this.$refs['pane']
    this.drawer = new CupertinoPane('.cupertino-pane', {
      backdrop:true
    });
    setTimeout(() => this.drawer.present({ animate: true }));
      },
       async createLoading(){
      let loading = await loadingController.create({
          message:'generating'
      })
      loading.present()
  },
    async presentModalSettings(){
      const modal = await modalController.create({
        component:AddInvoiceNumber,
        cssClass:'invoice-number'
      });
      modal.present()
    },
    async presentModal() {
      const modal = await modalController.create({
        component: AddLineModal,
      });
      modal.present();
    },

    scanBarcode(){
      BarcodeScanner.scan(
        function(result){
          this.barCoderesult = result.text
        },
        function(error){
          alert("scanning failed" + error)
        },
        {
          preferFrontCamera : true, // iOS and Android
          showFlipCameraButton : true, // iOS and Android
          showTorchButton : true, // iOS and Android
          torchOn: true, // Android, launch with the torch switched on (if available)
          saveHistory: true, // Android, save scan history (default false)
          prompt : "Place a barcode inside the scan area", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
          orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : true, // iOS
          disableSuccessBeep: false // iOS and Android
        }
      )
    },
    
    // scanBarcode() {
    //   BarcodeScanner.scan()
    //     .then((barcodeData) => {
    //       this.barCoderesult = barcodeData;
    //       let result = JSON.stringify(err);
    //       alert(result);
    //       console.log("Barcode data", barcodeData);
    //     })
    //     .catch((err) => {
    //       let error = JSON.stringify(err);
    //       console.log("Error", err);
    //       alert(error);
    //     });
    // },

    checked(e) {
      console.log(e.detail.value);
      this.form.customerType = e.detail.value;
    },
    showSocial() {
      this.showAddSocial = true;
    },
     generateInvoiceNumber(){
      this.createLoading()
      setTimeout(() => {
          this.invoiceNumber =  `${345}${Math.floor(Math.random() * 9999999999) }`
            loadingController.dismiss()
      },3000);

  },
    async closeModal() {
      let modal = await modalController.dismiss();
      // EventBus().emitter.emit('closeModal',true)
    },
  },
};
</script>

<style scoped>
ion-content {
  --background: #a3acb50d;
}
ion-toolbar {
  --background: #343a40;
}
ion-input {
  --padding-start: 20px;
}
.label-check {
  margin-left: 10px;
}
ion-label {
  color: rgba(24, 11, 84, 0.845) !important;
  font-size: 24px !important;
  margin-bottom: 12px !important;
}
.label[floating],
.label[stacked],
.input-has-focus .label[floating] {
  color: blue;
}
ion-input {
  border-bottom: 1px solid rgba(47, 11, 84, 0.153) !important;
  --placeholder-opacity: 0.2;
  --color: #6b6f74eb;
}
.picker-wrapper.sc-ion-picker-md {
  border: none !important;
}
ion-button {
  height: 55px;
}
ion-select {
  border-bottom: 1px solid #d4c4c4;
}
ion-card {
  border-radius: 12px;
}
.times {
  color: red;
}
.card-content-md h3 {
  font-size: 18px !important;
  color: #283e54;
}
.addlinebtn {
  --border-color: #283e54 !important;
}
button {
  position: absolute;
  top: 45px;
  right: 0;
}

.cupertino-pane-wrapper {
    --cupertino-pane-background: #212931d4!important;
}
div.pane{
  --cupertino-pane-background: #212931d4!important;
}
div.pane-cutino{
    box-shadow:none;
     background: #212931d4!important;
}
.cupertino-pane{
  --cupertino-pane-background:red!important
}
.cupertino-card{
      
    background: none;
    box-shadow: none;
}
.cupertino-card ion-item{
--background:none!important;
  margin-left: -17px;
}
.cupertino-card ion-item:last-child{
  margin-right:-12px;
}
.cupertino-card ion-button{
  --border-radius: 10px!important;
  --background: hsl(0deg 0% 80% / 50%);
  --box-shadow:none!important;
}
.cupertino-card ion-label{
  color: #e9ecef!important;
    font-weight: 200;
}
.cupertino-card ion-input{
  background: hsl(0deg 0% 100% / 36%);
    border-radius: 12px;
    --padding-start: 12px;
    --color: #dee2e6;
    min-height: 50px;
}
.contain{
  padding-right:0;
  padding-left :0;
}
</style>
