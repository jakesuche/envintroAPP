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
          New Sales Order
        </ion-title>

        <ion-buttons slot="end">
          <ion-button @click="createSales">
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
              <div class="ite_inner d-flex" id="my-flex">
                <ion-icon
                  :icon="icons.person"
                  class="zmdi zmdi-account ion-text-start"
                ></ion-icon>
                <!-- <ion-label position="floating">phone_number</ion-label> -->
                <ion-input
                  @ionFocus="returnZero(true)"
                  @ionBlur="returnZero(false)"
                  v-model="query"
                  placeholder="Customer Name"
                  type="text"
                >  <ion-spinner v-if="showSpinSearch" name="crescent"></ion-spinner></ion-input>
              </div>
              <div>
                iicejejej
                </div>
            </ion-item>
            
          </div>
          <div class="absolute" v-if="query.length > 0 && zeroSearch">
            <ul class="list-group">
              <li
                v-for="(item, index) in performSearch()"
                :key="index"
                class="list-group-item"
                @click="addToSchema(item)"
              >

                {{ item.item.firstname }} {{ item.item.lastname }}
              </li>

              <li v-if="performSearch().length === 0" class="list-group-item">
                No result found for {{ query }}
              </li>
            </ul>
          </div>

          <div id="anime">
            <ion-item class="animate__animated animate__fadeInUp" lines="none">
              <div class="ite_inner d-flex">
                <ion-icon
                  :icon="icons.person"
                  class="zmdi zmdi-account ion-text-start"
                ></ion-icon>
                <!--				<ion-label position="fixed">{{'full_name' | translate}}</ion-label>-->
                <ion-input
                  placeholder="Invoice Number"
                  v-model="form.invoicenumber"
                  type="name"
                ></ion-input>
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
                <ion-input
                  v-model="form.ordernumber"
                  placeholder="Order Number"
                  type="name"
                ></ion-input>
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
                  >Sales Order Date <span class="times"> *</span>
                </ion-label>
                <ion-datetime
                  @ionChange="getIssueDate($event)"
                  v-model="form.DateIssued"
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
                  >Expected shippent date <span class="times"> *</span>
                </ion-label>
                <ion-datetime
                  @ionChange="getdueDate($event)"
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
                  @ionChange="getTimeIssued($event)"
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
                <ion-select
                  @ionChange="getSelected($event)"
                  interface="popover"
                >
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
              <div class="ite_inner d-flex">
                <ion-icon
                  :icon="icons.mail"
                  class="zmdi zmdi-email ion-text-start"
                ></ion-icon>
                <!--				<ion-label position="fixed">{{'email_address' | translate}}</ion-label>-->
                <ion-input
                  v-model="form.deliveryMethod"
                  placeholder="Delivery Method"
                  type="name"
                ></ion-input>
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
                      @click="openLineItem"
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
                <ion-input
                  v-model="form.customerNote"
                  placeholder="Customer Notes"
                  type="name"
                ></ion-input>
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
                  v-model="form.termsAndCondition"
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
                    <!-- <pre>
                {{performSearch()}}
              </pre> -->
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
                :disabled="imageUrlArray.length == 5"
                @click="takePhoto"
              >
                <ion-icon :icon="icons.documentAttachOutline"> </ion-icon>
              </ion-button>
            </div>
          </ion-card-content>
        </ion-card>
      </div>
    </div>
    <AddLineItem />
    <Loader v-show="showLoader" />
  </ion-page>
</template>

<script>
import { arrowBack, readerOutline, addCircleSharp } from "ionicons/icons";
import EventBus from "@/EventBus";
import { Plugins, CameraResultType } from "@capacitor/core";
const { Camera } = Plugins;
import { CupertinoPane } from "cupertino-pane";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import AddLineModal from "@/components/Modals/AddLineModal.vue";
import AddInvoiceNumber from "@/components/Modals/AddInvoiceNumber.vue";

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
  IonSelect,
  IonSelectOption,
  IonDatetime,
  toastController,
  IonSpinner
} from "@ionic/vue";
import AddContact from "@/components/Modals/AddBillings.vue";
import AddLineItem from "@/components/Modals/addLineItem";
import { cardAnime } from "@/anime";
import Fuse from "fuse.js";
// import anime from 'animejs'
export default {
  data() {
    return {
      zeroSearch:true,
      customer: this.$store.state.customer.customer,
      arrowBack,
      readerOutline,
      individual: "individual",
      business: "business",
      name: "",
      check: "",
      OpenLineItem: false,
      showLoader: false,
      query: "",
      form: {
        customer: "",
        invoicenumber: "",
        ordernumber: "",
        shipmentDate: "",
        timeIssued: "",
        DateIssued: "",
        salesPerson: "",
        images: [],
        termsAndCondition: "",
        customerNote: "",
        deliveryMethod: "",
        quantity: "",
        rate: "",
        description: "",
        item: "",
        customerId:''
      },
      addCircleSharp,
      showAddSocial: false,
      imageUrl: "",
      doc: "",
      modalValue: false,
      imageUrlArray: [],
      options: {
        shouldSort: true,
        includeMatches: true,
        //   findAllMatches: true,
        minMatchCharLength: 1,
        location: 0,
        threshold: 0.6,
        distance: 500,
        maxMatchCharLength: 1,
        maxPatternLength: 1,
        keys: ["firstname", "lastname"],
        searchResultVisible: false,
      },
      showSpinSearch:false,
    };
  },
  mounted() {
    const doc = document.querySelectorAll("#anime");
    this.animate(doc);

    this.$EventBus().emitter.on("addForm", (data) => {
      this.form = { ...this.form, ...data };
      console.log(data);
    });
    if(this.query.length == 0){
      this.showSpinSearch = false
    }
  },
  created() {},
  components: {
    IonDatetime,
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
    IonSelect,
    IonSelectOption,
    AddLineItem,
    IonSpinner
  },
  
  methods: {
    addToSchema(item){
      this.zeroSearch = false
      this.showSpinSearch = false
      console.log(item)
      this.form.customerId =  item.item._id
      this.form.customer = `${item.item.lastname} ${item.item.firstname }`
      this.query = `${item.item.lastname} ${item.item.firstname }`
      
    },
    returnZero(result) {

      if(result == false){
        setTimeout(() => {
          this.zeroSearch = result
          this.showSpinSearch = result
        }, 100);
      }else{
        this.zeroSearch = result
        this.showSpinSearch = result
      }
     
     
    },
    
    openLineItem() {
      this.$EventBus().emitter.emit("OpenLine", true);
    },

    getSelected(e) {
      this.form.salesPerson = e.target.value;
    },
    getdueDate(e) {
      this.form.shipmentDate = e.target.value;
    },
    getTimeIssued(e) {
      this.form.timeIssued = e.target.value;
    },
    getIssueDate(e) {
      this.form.DateIssued = e.target.value;
    },
    async toast(params) {
      let toast = await this.$Toast.create({
        message: params.message,
        duration: params.duration,
        color: params.color,
        position: "top",
        buttons: [
          {
            text: "Done",
            role: "cancel",
            handler: () => {},
          },
        ],
      });
      return toast.present();
    },
    createSales() {
      this.showLoader = true;
      this.$store
        .dispatch("sales/createSales", this.form)
        .then(() => {
          this.showLoader = false;
          const params = {
            message: "Your sales has beem added suceess",
            color: "success",
            duration: 3000,
          };
          this.toast(params);
        })
        .catch((err) => {
          this.showLoader = false;
          console.log(err.response);
          console.log(err.response.data.err.message);
          const params = {
            message: err.response.data.err.message,
            color: "warning",
            duration: 100000,
          };
          this.toast(params);
        });
    },
    performSearch() {
      this.zeroSearch = true
      const customer = this.customer;
      const fuse = new Fuse(customer, this.options);
      return fuse.search(this.query);
    },
    ScanItem() {
      BarcodeScanner.scan()
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
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
        this.form.images.push({ image: image.webPath });
        console.log(imageUrl);
        this.imageUrl = imageUrl;
      }
    },
  },
};
</script>

<style scoped>
.addline {
  width: 100vh;
  border-radius: 14px;

  box-shadow: none;
  border: 1px solid var(--primary);
}

.addlinebtn {
  color: var(--primary) !important;
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

.ite_inner ion-card {
  border-radius: 12px;
  background: var(--primary);
}
.ite_inner ion-card ion-button {
  color: #fff;
}
.absolute {
  position: absolute;
  width: 100%;
  z-index: 100;
}
ion-spinner{
  margin-left: 1px;
    position: absolute;
    right: 0;
}
</style>
