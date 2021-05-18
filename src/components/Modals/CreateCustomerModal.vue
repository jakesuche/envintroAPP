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
          New Customer
        </ion-title>

        <ion-buttons slot="end">
          <ion-button @click="createCustomer">
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
        <ion-item>
          <ion-thumbnail slot="start" @click="openCustomeModal">
            <img
              :src="imageUrl ? imageUrl : 'https://via.placeholder.com/150'"
              alt=""
            />
          </ion-thumbnail>
          <ion-button
            @click="takePhoto"
            size="default"
            fill="clear"
            style="color: white; --background:var(--primary)"
          >
            <ion-icon :icon="icons.camera" slot="start"></ion-icon>
            <span>Take Photo</span>
          </ion-button>
        </ion-item>
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
                <ion-input v-model="form.firstname" placeholder="First Name" type="text"></ion-input>
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
                <ion-input v-model="form.lastname" placeholder="Last Name" type="name"></ion-input>
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
                <ion-input v-model="form.companyName" placeholder="Company Name" type="name"></ion-input>
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
                <ion-input v-model="form.displayname"
                  placeholder="Customer Display Name"
                  type="name"
                ></ion-input>
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
                <ion-input v-model="form.email" placeholder="Email address" type="name"></ion-input>
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
                <ion-input v-model="form.phone" placeholder="Phone" type="name"></ion-input>
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
                <ion-input v-model="form.mobile" placeholder="Mobile" type="name"></ion-input>
              </div>
            </ion-item>
          </div>
        
          <div id="anime">
            <ion-item class="animate__animated animate__fadeInUp" lines="none">
              <div class="ite_inner d-flex">
                <ion-icon
                  :icon="icons.cash"
                  class="zmdi zmdi-email ion-text-start"
                ></ion-icon>
                <!--				<ion-label position="fixed">{{'email_address' | translate}}</ion-label>-->
                <ion-input v-model="form.currencyUsed" placeholder="Currency" type="name"></ion-input>
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
                <ion-input v-model="form.paymentTerms" placeholder="Payment terms" type="name"></ion-input>
              </div>
            </ion-item>
          </div>

          <hr />
          <!-- social media section -->
          <div id="anime">
            <ion-item
              class="container-fluid"
              lines="none"
              v-if="!showAddSocial"
            >
              <ion-label
                style="color:var(--primary)!important"
                @click="showSocial"
                >Add Social Contact</ion-label
              >
            </ion-item>
          </div>
          <div v-show="showAddSocial">
            <div id="anime">
              <ion-item
                class="animate__animated animate__fadeInUp"
                lines="none"
              >
                <div class="ite_inner d-flex">
                  <ion-icon
                    :icon="icons.logoFacebook"
                    class="zmdi zmdi-email ion-text-start"
                  ></ion-icon>
                  <!--				<ion-label position="fixed">{{'email_address' | translate}}</ion-label>-->
                  <ion-input v-model="form.faceBook" placeholder="Facebook" type="name"></ion-input>
                </div>
              </ion-item>
            </div>
            <div id="anime">
              <ion-item
                class="animate__animated animate__fadeInUp"
                lines="none"
              >
                <div class="ite_inner d-flex">
                  <ion-icon
                    :icon="icons.globe"
                    class="zmdi zmdi-email ion-text-start"
                  ></ion-icon>
                  <!--				<ion-label position="fixed">{{'email_address' | translate}}</ion-label>-->
                  <ion-input v-model="form.website" placeholder="Website" type="name"></ion-input>
                </div>
              </ion-item>
            </div>
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
     <Loader v-if="showSpinner"/>
  </ion-page>
</template>

<script>
import { arrowBack, readerOutline, addCircleSharp } from "ionicons/icons";
import EventBus from "@/EventBus";
import { Plugins, CameraResultType } from "@capacitor/core";

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
  createAnimation,
  IonButton,
  toastController
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
        firstname: null,
        lastname: null,
        displayname: null,
        companyName: null,
        phone: null,
        mobile: null,
        currencyUsed: null,
        paymentTerms: null,
        faceBook: null,
        website: null,
        remark: null,
        email:null,
        imageUrlArray: [],
        shippingAddress: {
          attention: null,
          street: null,
          state: null,
          city: null,
          zipCode: null,
          country: null,
          fax: null,
          phone: null,
        },
      },
      addCircleSharp,
      showAddSocial: false,
      imageUrl: "",
      doc: "",
      modalValue: false,
      imageUrlArray:[],
      showSpinner: false

      
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
    
    createCustomer(){
      this.showSpinner = true
      setTimeout(() => {
        this.$store.dispatch('customer/createCustomer' ,this.form)
      .then(()=>{
        this.showSpinner = false
        let message = 'Customer saved'
        let color = 'success'
        this.createToast(message,color)
        this.closeModal()
      })
      .catch(err=>{
        this.showSpinner = false
         let message = 'An error occured while saving customer'
        let color = 'danger'
        this.createToast(message,color)
      })
      },3000);
    },
    async  createToast(message,color){
      let toast = await toastController.create({
        message:message,
        color:color,
        duration:3000
      })
      return toast.present()
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
      if (this.imageUrlArray >= 5) {
        alert("You cant add more than 5");
      } else {
        const image = await Camera.getPhoto({
          quality: 90,
          allowEditing: true,
          resultType: CameraResultType.Uri,
        });

        var imageUrl = image.webPath;
        this.form.imageUrlArray.push({ image: image.webPath });
        this.imageUrlArray.push({ image: image.webPath });
        console.log(imageUrl);
        this.imageUrl = imageUrl;
      }
    },
  },
};
</script>

<style scoped>
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
</style>
