<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/invoices"></ion-back-button>
          <!-- <ion-button @click="closeModal">
            <ion-icon :icon="arrowBack"> </ion-icon>
          </ion-button> -->
        </ion-buttons>
        <ion-title slot="start">
          New Invoice
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
                <ion-input placeholder="Customer Name" type="text"></ion-input>
              </div>
            </ion-item>
          </div>

          <div id="anime">
            <ion-item class="animate__animated animate__fadeInUp" lines="none">
              <div class="ite_inner d-flex">
                <ion-icon
                  :icon="icons.person"
                  class="zmdi zmdi-account ion-text-start"
                ></ion-icon>
                <!--				<ion-label position="fixed">{{'full_name' | translate}}</ion-label>-->
                <ion-input placeholder="Invoice Number" type="name"></ion-input>
              </div>
            </ion-item>
          </div>
          <div id="anime">
            <ion-item class="animate__animated animate__fadeInUp" lines="none">
              <div class="ite_inner d-flex">
                <ion-icon
                  :icon="icons.reader"
                  class="zmdi zmdi-email ion-text-start"
                ></ion-icon>
                <!--				<ion-label position="fixed">{{'email_address' | translate}}</ion-label>-->
                <ion-input placeholder="Order Number" type="name"></ion-input>
              </div>
            </ion-item>
          </div>
          <div id="anime">
            <ion-item class="animate__animated animate__fadeInUp" lines="none">
              <div class="ite_inner d-flex">
                <ion-icon
                  :icon="icons.reader"
                  class="zmdi zmdi-email ion-text-start"
                ></ion-icon>
                <!--				<ion-label position="fixed">{{'email_address' | translate}}</ion-label>-->
                <ion-label class="no-effect" style="font-size: 18px !important;"
                  >Invoice Date <span class="times"> *</span>
                </ion-label>
                <ion-datetime
                  value="2021-01-01"
                  placeholder="Select Date"
                ></ion-datetime>
              </div>
            </ion-item>
          </div>
          <div id="anime">
            <ion-item class="animate__animated animate__fadeInUp" lines="none">
              <div class="ite_inner d-flex">
                <ion-icon
                  :icon="icons.mail"
                  class="zmdi zmdi-email ion-text-start"
                ></ion-icon>
                <!--				<ion-label position="fixed">{{'email_address' | translate}}</ion-label>-->
                <ion-input placeholder="Terms" type="name"></ion-input>
              </div>
            </ion-item>
          </div>
          <div id="anime">
            <ion-item class="animate__animated animate__fadeInUp" lines="none">
              <div class="ite_inner d-flex">
                <ion-icon
                  :icon="icons.phonePortrait"
                  class="zmdi zmdi-email ion-text-start"
                ></ion-icon>
                <!--				<ion-label position="fixed">{{'email_address' | translate}}</ion-label>-->
                <ion-label class="no-effect" style="font-size: 18px !important;"
                  >Due Date <span class="times"> *</span>
                </ion-label>
                <ion-datetime
                  value="2021-01-01"
                  placeholder="Select Date"
                ></ion-datetime>
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
                  >Time issued</ion-label
                >
                <ion-datetime
                  display-format="h:mm A"
                  picker-format="h:mm A"
                  value="2021-01-01"
                ></ion-datetime>
              </div>
            </ion-item>
          </div>
          <div id="anime">
            <ion-item class="animate__animated animate__fadeInUp" lines="none">
              <div class="ite_inner d-flex">
                <ion-icon
                  :icon="icons.mail"
                  class="zmdi zmdi-email ion-text-start"
                ></ion-icon>
                <!--				<ion-label position="fixed">{{'email_address' | translate}}</ion-label>-->
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
              </div>
            </ion-item>
          </div>
          <div id="anime">
            <ion-item class="animate__animated animate__fadeInUp" lines="none">
              <ion-card class="addline">
                <ion-card-content>
                  <div class="ite_inner d-flex">
                <ion-button
                  class="addlinebtn"
                  @click="presentModal"
                  expand="block"
                  fill="clear"
                >
                  <ion-icon :icon="addCircle"></ion-icon>&nbsp;&nbsp;
                  <h3>Add Line Item</h3></ion-button
                >
              </div>
                </ion-card-content>
                </ion-card>
            </ion-item>
          </div>
          <div id="anime">
            <ion-item class="animate__animated animate__fadeInUp" lines="none">
              <div class="ite_inner d-flex">
                <ion-icon
                  :icon="icons.thumbsUp"
                  class="zmdi zmdi-email ion-text-start"
                ></ion-icon>
                <!--				<ion-label position="fixed">{{'email_address' | translate}}</ion-label>-->
                <ion-input placeholder="Customer Notes" type="name"></ion-input>
              </div>
            </ion-item>
          </div>
          <div id="anime">
            <ion-item class="animate__animated animate__fadeInUp" lines="none">
              <div class="ite_inner d-flex">
                <ion-icon
                  :icon="icons.thumbsUp"
                  class="zmdi zmdi-email ion-text-start"
                ></ion-icon>
                <!--				<ion-label position="fixed">{{'email_address' | translate}}</ion-label>-->
                <ion-input
                  placeholder="Terms & Conditions"
                  type="name"
                ></ion-input>
              </div>
            </ion-item>
          </div>

          <hr />
          <!-- social media section -->

          <div id="anime">
            <ion-item class="animate__animated animate__fadeInUp" lines="none">
              <div class="ite_inner d-flex">
                <ion-card>
                  <ion-card-content>
                    <ion-button
                      fill="clear"
                      class="uploadfile"
                      @click="openCustomeModal"
                    >
                      Upload File<span v-if="imageUrl">/Preview</span> &nbsp;
                      <ion-icon :icon="icons.fileTray"></ion-icon>
                    </ion-button>
                  </ion-card-content>
                </ion-card>
              </div>
            </ion-item>
          </div>
        </ion-list>
      </div>
    </ion-content>
    <div class="custom-modal-bg" :class="{ 'bg-active': modalValue }">
      <div class="custom-modal">
        <ion-card class="modal-card">
          <ion-button @click="modalValue = false" class="close-custom-modal">
            <ion-icon :icon="icons.close"> </ion-icon>
          </ion-button>
          <ion-title class="ion-text-center">
            Attachments
          </ion-title>
          <!-- <ion-card-header>
                <ion-card-subtitle>Attachments</ion-card-subtitle>
                
            </ion-card-header> -->

          <!-- class="product-slider ion-padding-start" -->
          <div v-if="imageUrlArray.length > 0">
            <ion-slides
              pager="true"
              :options="{
                slidesPerView: 'auto',
                zoom: false,
                grabCursor: true,
              }"
            >
              <ion-slide v-for="(image, i) in imageUrlArray" :key="i">
                <ion-col
                  class="ion-text-left"
                  @click="$router.push({ path: '/item-details' })"
                >
                  <img :src="image.image" alt="" />
                </ion-col>
              </ion-slide>
            </ion-slides>
          </div>

          <ion-card-content>
            <div class="attachment" v-if="!imageUrlArray.length > 0">
              <ion-note class="attachment-note">
                You can add up to 4 attachments, each not exceeding 5 MB.
              </ion-note>

              <ion-button @click="takePhoto" class="attachment-button">
                Add Attachment
              </ion-button>
            </div>
            <div class="justify-content-around" v-if="imageUrlArray.length > 0">
              <ion-button>
                <ion-icon :icon="icons.trash"> </ion-icon>
              </ion-button>
              <ion-button
                
                @click="takePhoto"
              >
                <ion-icon :icon="icons.documentAttachOutline"> </ion-icon>
              </ion-button>
            </div>
          </ion-card-content>
        </ion-card>
      </div>
    </div>
  </ion-page>
</template>

<script>

import { arrowBack, readerOutline, addCircleSharp } from "ionicons/icons";
import EventBus from "@/EventBus";
import { Plugins, CameraResultType } from "@capacitor/core";
const {
Camera, } = Plugins;  import { CupertinoPane } from
"cupertino-pane"; import { BarcodeScanner } from
"@ionic-native/barcode-scanner"; import AddLineModal from
"@/components/Modals/AddLineModal.vue"; import AddInvoiceNumber from
"@/components/Modals/AddInvoiceNumber.vue";


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
</style>


