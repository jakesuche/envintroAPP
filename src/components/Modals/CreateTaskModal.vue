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
          Create A Task
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
    <ion-content fullscreen>
      <div class="form">
        <ion-list lines="none">
          <div id="anime">
            <ion-item
              class="animate__animated animate__fadeInUp  "
              lines="none"
            >
              <div class="ite_inner d-flex " id="my-flex">
                <ion-icon
                  :icon="icons.person"
                  class="zmdi zmdi-account ion-text-start"
                ></ion-icon>
                <!-- <ion-label position="floating">phone_number</ion-label> -->
                <ion-input placeholder="Task  Name" type="text"></ion-input>
              </div>
            </ion-item>
          </div>

          
          <div id="anime">
            <ion-item class="animate__animated animate__fadeInUp" lines="none">
              <div class="ite_inner d-flex">
                <ion-icon    style="padding-bottom: 15px;"
                  :icon="icons.reader"
                  class="zmdi zmdi-email ion-text-start"
                ></ion-icon>
                <!--				<ion-label position="fixed">{{'email_address' | translate}}</ion-label>-->
                <ion-textarea row="20" placeholder="Enter the description here..."></ion-textarea>
              </div>
            </ion-item>
          </div>
          
         
         
         
          <div id="anime">
            <ion-item class="animate__animated animate__fadeInUp" lines="none">
              <div class="ite_inner d-flex">
                <ion-icon
                  :icon="icons.call"
                  class="zmdi zmdi-email ion-text-start"
                ></ion-icon>
                <!--				<ion-label position="fixed">{{'email_address' | translate}}</ion-label>-->
                <ion-label class="no-effect" style="font-size: 18px !important;"
                  >pick a time</ion-label
                >
                <ion-datetime
                  display-format="h:mm A"
                  picker-format="h:mm A"
                  value="2021-01-01"
                ></ion-datetime>
              </div>
            </ion-item>
          </div>
         
          
        
       

          <hr />
          <!-- social media section -->

         
        </ion-list>
      </div>
      <div id="anime">
         <ion-list>
    <ion-radio-group value="biff">
      <ion-list-header>
        <ion-label>Task Priority</ion-label>
      </ion-list-header>

      <ion-item lines="none" >
        <ion-label class="high">High</ion-label>
        <ion-radio class="high" slot="start" value="biff"></ion-radio>
      </ion-item>

      <ion-item lines="none">
        <ion-label   class="middle">Middle</ion-label>
        <ion-radio class="middle" slot="start" value="griff"></ion-radio>
      </ion-item>

      <ion-item lines="none"> 
        <ion-label class="low">Low</ion-label>
        <ion-radio class="low" slot="start" value="buford"></ion-radio>
      </ion-item>
    </ion-radio-group>
  </ion-list>

        </div>
        <div id="anime" >
            <ion-button expand="block" class="createTask" >
                Add Task
            </ion-button>
        </div>
    </ion-content>
    
  </ion-page>
</template>

<script>




import { arrowBack, readerOutline, addCircleSharp } from "ionicons/icons";
import EventBus from "@/EventBus";
import { Plugins, CameraResultType } from "@capacitor/core";
const { Camera, DatePickerPlugin } = Plugins;  
import { CupertinoPane } from "cupertino-pane";
 import { BarcodeScanner } from "@ionic-native/barcode-scanner"; 
 import AddLineModal from "@/components/Modals/AddLineModal.vue"; 
 import AddInvoiceNumber from "@/components/Modals/AddInvoiceNumber.vue";


  import 'vue2-datepicker/index.css';
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
  createAnimation,
  IonButton,
} from "@ionic/vue";
import AddContact from "@/components/Modals/AddBillings.vue";
import { cardAnime } from "@/anime";
// import anime from 'animejs'
export default {
  data() {
    return {
        time1:'',
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
      imageUrl: "",
      doc: "",
      modalValue: false,

      imageUrlArray: [],
    };
  },
  mounted() {
    const doc = document.querySelectorAll("#anime");
    this.animate(doc);
    DatePickerPlugin
    .present({
    mode: "date",
    locale: "pt_BR",
    format: "dd/MM/yyyy",
    date: "13/07/2019",
    theme: "light",
})
    .then((date) => alert(date.value));
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
    AddContact,
    IonButton,
    
  },

  methods: {
     ScanItem(){
      BarcodeScanner.scan()
      .then(res=>{
        console.log(res)
      })
      .catch((err)=>{
        console.log(err)
      })
     },
    openCustomeModal() {
      this.modalValue = true;
    },

    animate(doc) {
      cardAnime(doc);
    },
    OpenBilling() {
      this.$EventBus().emitter.emit("openModal", true);
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

    async takePhoto() {
      if (this.imageUrlArray.length >= 5) {
        alert("You can't add more than 5");
      } else {
        const image = await Camera.getPhoto({
          quality: 90,
          allowEditing: true,
          resultType: CameraResultType.Uri,
        });

        var imageUrl = image.webPath;
        this.imageUrlArray.push({ image: image.webPath });
        console.log(imageUrl);
        this.imageUrl = imageUrl;
      }
    },
  },
};
</script>

<style scoped>
.addline{
  width: 100vh;
    border-radius: 14px;
   
    box-shadow: none;
    border: 1px solid var(--primary);
}

.addlinebtn{
 
  color:var(--primary)!important;
  margin-left: 32px;
}
.form {
  padding-top: 50px;
}

.form ion-item {
  background: var(--info_field_bg);
}
.form ion-item .item-input ion-label {
  max-width: unset !important;
  width: fit-content !important;
  min-width: fit-content;
}

.form ion-item .item-input .item-select {
  padding: 2px 13px;
}
.form ion-item .item-input .item-select ion-label {
  display: none;
}
.form p {
  color: var(--text-light) !important;
  margin: 0;
  font-size: 1rem !important;
  letter-spacing: 0;
  font-weight: 500;
  line-height: 19px;
  margin-bottom: 50px;
  opacity: 0.8;
}
.form.button.btn.button-block {
  margin-top: 25px;
}
.form h4 {
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 28px;
}

ion-footer .form {
  padding-top: 0px !important;
}

ion-button ion-icon {
  color: var(--white);
}
.container-fluid {
  background: none !important;
}
.container-fluid {
}
.custom-modal-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100001;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  opacity: 0;
  /* transition:visibility 0s opacity 0.5s; */
  transition: visibility 0s linear 300ms, opacity 300ms;
}
.bg-active {
  visibility: visible;
  opacity: 1;
  transition: visibility 0s linear 0s, opacity 300ms;
}
.custom-modal {
  background-color: white;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 12px;
}
.close-custom-modal {
  position: absolute;

  z-index: 111111;

  right: 10px;
}
.modal-card {
  box-shadow: none !important;
}

.modal-card ion-title {
  color: black;
  margin-bottom: 29px;
  position: relative;
  top: 11px;
}
.modal-card img {
  margin-bottom: 100px !important;
  margin-top: 20px;
}
.modal-card ion-button {
  --background: var(--primary);
  height: 55px;
}
.modal-card ion-icon {
  font-size: 30px;
}
.uploadfile {
  color: #6225d2;
}
.attachment-button {
  display: flex;
  justify-content: space-around;
  margin-bottom: 200px;
  margin-top: 20px;
  --border-radius: 20px;
  align-items: center;
}
.attachment-note {
  display: flex;
  justify-content: space-around;
  text-align: center;
  margin-top: 20px;

  align-items: center;
}
ion-buttons ion-button ion-icon {
  color: black;
}

.ite_inner ion-card{
  border-radius:12px;
  background:var(--primary)

}
.ite_inner ion-card ion-button{
  color:#fff
}
.createTask{
    margin-left: 20px;
    margin-right: 20px;
    height: 55px;
    --border-radius: 13px;
    --background: var(--primary);
}
ion-list-header{
    background: var(--yelow_color);
    margin-left: 20px;
    margin-right: -25px!important;
    width: 370px;
    height: 50px;
    border-radius: 7px;
}
.high{
    --color: var(--red_color)!important;
    --color-checked: var(--red_color);
    --border-radius: 6px;
}
.middle{
    --color:#FA9B4A;
    --color-checked:#FA9B4A;
    --border-radius:6px;
    opacity:0.5;
}
.low{
     --color:var(--green_color);
    --color-checked:var(--green_color);
    --border-radius:6px;
    opacity:0.5;
}
</style>



