<template>
  <base-layout PageTitle="Dashboard">
    <template v-slot:ion-menu-btn>
      <ion-menu-button></ion-menu-button>
    </template>
   
    <ion-content v-if="showData">
      <div class="mb-3">
        <h4 class="sale-activity">
          Sales Activity
        </h4>
      </div>
      <ion-card>
        <ion-card-header>
          <div class="d-flex justify-content-start">
            <img src="/assets/icon/Group18.png" />
            <div class="card-titles">
              <ion-card-title>12</ion-card-title>
              <ion-card-subtitle>Quatity to be packed</ion-card-subtitle>
            </div>
          </div>
        </ion-card-header>
      </ion-card>
      <ion-card>
        <ion-card-header>
          <div class="d-flex justify-content-start">
            <img src="/assets/icon/lorry.png" />

            <div class="card-titles">
              <ion-card-title>12</ion-card-title>
              <ion-card-subtitle
                >Packages ready to be shipped</ion-card-subtitle
              >
            </div>
          </div>
        </ion-card-header>
      </ion-card>
      <ion-card>
        <ion-card-header>
          <div class="d-flex justify-content-start">
            <img src="/assets/icon/Group17.png" />
            <div class="card-titles">
              <ion-card-title>12</ion-card-title>
              <ion-card-subtitle
                >Packages ready to be invoiced</ion-card-subtitle
              >
            </div>
          </div>
        </ion-card-header>
      </ion-card>
      <ion-card>
        <ion-card-header>
          <div class="d-flex justify-content-start">
            <img src="/assets/icon/Group 19.png" />
            <div class="card-titles">
              <ion-card-title>12</ion-card-title>
              <ion-card-subtitle>Qauntity to be invoice</ion-card-subtitle>
            </div>
          </div>
        </ion-card-header>
      </ion-card>
      <div class="mb-3">
        <h6 class="sale-activity">
          Inventory Summary (In Quantity)
        </h6>
      </div>
      <ion-card id="uche">
        <ion-grid>
          <ion-row>
            <ion-col class="in_hand">
              <div class="card-titles">
                <ion-card-subtitle>In hand </ion-card-subtitle>
                <ion-card-title>12</ion-card-title>
              </div>
            </ion-col>
            <ion-col class="to_be_recieved">
              <div class="card-titles">
                <ion-card-subtitle>To be recieved</ion-card-subtitle>
                <ion-card-title>12</ion-card-title>
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-card>

      <!-- <ion-fab horizontal="end"  vertical="bottom" slot="fixed">
      <ion-fab-button @click="presentActionSheet()">
        <ion-icon :icon="addOutline"></ion-icon>
      </ion-fab-button>
      <ion-fab-list side="start"> </ion-fab-list>
    </ion-fab> -->
      <ion-fab horizontal="end" vertical="bottom" slot="fixed">
        <ion-fab-button @click="presentPane">
          <ion-icon :icon="addOutline"></ion-icon>
        </ion-fab-button>
      </ion-fab>
      <!-- <ion-fab-button horizontal="end" color="primary" vertical="bottom">
        <ion-icon :icon="addOutline"></ion-icon>
      </ion-fab-button> -->
    </ion-content>
     <ion-content v-else >
      <div>
        <ion-list>
          <ion-list-header class="mb-3">
            <ion-label>
              <ion-skeleton-text
                animated
                style="width: 20%"
              ></ion-skeleton-text>
            </ion-label>
          </ion-list-header>
          <ion-item lines="none" class="mb-3">
            <ion-avatar
              slot="start"
              style="height: 70px;
    width: 70px;"
            >
              <ion-skeleton-text animated></ion-skeleton-text>
            </ion-avatar>
            <ion-label>
              <h3>
                <ion-skeleton-text
                  animated
                  style="width: 20%"
                ></ion-skeleton-text>
              </h3>
              <p>
                <ion-skeleton-text
                  animated
                  style="width: 80%"
                ></ion-skeleton-text>
              </p>
            </ion-label>
          </ion-item>
          <ion-item lines="none" class="mb-3">
            <ion-avatar
              slot="start"
              style="height: 70px;
    width: 70px;"
            >
              <ion-skeleton-text animated></ion-skeleton-text>
            </ion-avatar>
            <ion-label>
              <h3>
                <ion-skeleton-text
                  animated
                  style="width: 20%"
                ></ion-skeleton-text>
              </h3>
              <p>
                <ion-skeleton-text
                  animated
                  style="width: 80%"
                ></ion-skeleton-text>
              </p>
            </ion-label>
          </ion-item>
          <ion-item lines="none" class="mb-3">
            <ion-avatar
              slot="start"
              style="height: 70px;
    width: 70px;"
            >
              <ion-skeleton-text animated></ion-skeleton-text>
            </ion-avatar>
            <ion-label>
              <h3>
                <ion-skeleton-text
                  animated
                  style="width: 20%"
                ></ion-skeleton-text>
              </h3>
              <p>
                <ion-skeleton-text
                  animated
                  style="width: 80%"
                ></ion-skeleton-text>
              </p>
            </ion-label>
          </ion-item>
          <ion-item lines="none" class="mb-3">
            <ion-avatar
              slot="start"
              style="height: 70px;
    width: 70px;"
            >
              <ion-skeleton-text animated></ion-skeleton-text>
            </ion-avatar>
            <ion-label>
              <h3>
                <ion-skeleton-text
                  animated
                  style="width: 20%"
                ></ion-skeleton-text>
              </h3>
              <p>
                <ion-skeleton-text
                  animated
                  style="width: 80%"
                ></ion-skeleton-text>
              </p>
            </ion-label>
          </ion-item>

          <ion-list-header class="mb-3">
            <ion-label>
              <ion-skeleton-text
                animated
                style="width: 50%"
              ></ion-skeleton-text>
            </ion-label>
          </ion-list-header>
          <ion-card id="uche">
            <ion-grid>
              <ion-row>
                <ion-col>
                  <div class="card-titles">
                    <ion-card-subtitle class="mb-3"
                      ><ion-skeleton-text
                        animated
                        style="width: 50%"
                      ></ion-skeleton-text
                    ></ion-card-subtitle>
                    <ion-card-title class="mb-3"
                      ><ion-skeleton-text
                        animated
                        style="width: 50%"
                      ></ion-skeleton-text
                    ></ion-card-title>
                  </div>
                </ion-col>
                <ion-col>
                  <div class="card-titles">
                    <ion-card-subtitle class="mb-3"
                      ><ion-skeleton-text
                        animated
                        style="width: 50%"
                      ></ion-skeleton-text
                    ></ion-card-subtitle>
                    <ion-card-title class="mb-3"
                      ><ion-skeleton-text
                        animated
                        style="width: 50%"
                      ></ion-skeleton-text
                    ></ion-card-title>
                  </div>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-card>
        </ion-list>
      </div>
    </ion-content>
  </base-layout>
</template>

<script>
import {
  IonPage,
  IonTitle,
  IonHeader,
  IonToolbar,
  IonContent,
  IonBackButton,
  IonButtons,
  IonIcon,
  IonRow,
  IonGrid,
  IonCol,
  IonText,
  IonMenuButton,
  actionSheetController,
  modalController,
  IonicSafeString,
} from "@ionic/vue";
import {
  cardOutline,
  addOutline,
  menuSharp,
  caretForwardCircle,
  close,
  heart,
  trash,
  share,
} from "ionicons/icons";
import EventBus from "@/EventBus";
import Drawer from "vue-simple-drawer";
import QRious from "qrious";
import { CupertinoPane } from "cupertino-pane";

import "@/theme/action.css";
import CreateCustomerModal from "@/components/Modals/CreateCustomerModal.vue";
import mcxDialog from "mcx-dialog-mobile";
export default {
  data() {
    return {
      cardOutline,
      addOutline,
      menuSharp,
      actionSheetStyles: [],
      urlEncoded: "",
      url: {
        name: "uchechukwu",
        surname: "chidiebere",
        age: "26",
        time: "time",
      },
      drawer: {},
      IonicSafeString,
      showData: false,
    };
  },

  mounted() {
    EventBus().emitter.on("closeModal", (data) => {
      this.closeModal();
      console.log("text-event", data);
    });

    this.urlEncoded = this.getQrl();
    console.log(this.urlEncoded);

    setTimeout(() => {
      this.showData = true
    }, 3000);
  },
  components: {
    // DessetModal,
    Drawer,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonHeader,
    IonToolbar,
    IonContent,
    IonBackButton,
    IonButtons,
    IonIcon,
    IonRow,
    IonGrid,
    IonCol,
    IonText,
  },

  methods: {
    presentPane() {
      this.drawer = new CupertinoPane(".panel", this.settings);
      setTimeout(() => this.drawer.present({ animate: true }));
    },
    getQrl() {
      let qrcode = new QRious({
        size: 1000,
      });
      qrcode.value = `${this.url.name}, ${this.url.surname}, ${this.url.text}`;
      return qrcode.toDataURL();
    },

    async presentActionSheet() {
      let inputNode = document.createElement("input");
      inputNode.setAttribute("type", "file");
      inputNode.setAttribute("accept", "image/png, image/jpg");
      inputNode.setAttribute(
        "style",
        "position: relative; z-index: 99999; width: 100%; height: 100%; opacity: 0"
      );
      inputNode.addEventListener("change", (event) => {
        this.loadImageFromDevice2(event);
      });
      const actionSheet = await actionSheetController.create({
        header: "Albums",
        cssClass: "custome_css",
        icon: "<img src='/assets/icon/lorry.png'>",
        buttons: [
          {
            text: "annekd",
            cssClass: "EditIcon",

            icon: "<img src='/assets/icon/lorry.png'>",

            handler: () => {
              this.openModal();
            },
          },
          {
            text: new IonicSafeString("<ion-button>Hello!</ion-button>"),
            icon: "<img src='/assets/icon/lorry.png'>",
            cssClass: "custome_css",
            handler: () => {
              console.log("Share clicked");
            },
          },
          {
            text: "Sales Order",
            cssClass: "EditIcon",
            icon: "<img src='/assets/icon/lorry.png'>",
            handler: () => {
              console.log("Play clicked");
            },
          },
          {
            text: "Purchase",
            cssClass: "EditIcon",
            icon: "<img src='/assets/icon/lorry.png'>",
            handler: () => {
              console.log("Favorite clicked");
            },
          },
          {
            text: "Cancel",

            cssClass: "EditIcon",
            icon: close,
            role: "cancel",
            handler: () => {},
          },
        ],
      });
      return actionSheet.present();
    },

    async openModal() {
      const modal = await modalController.create({
        component: CreateCustomerModal,
      });
      return modal.present();
    },
    async closeModal() {
      const modal = await modalController;
      return modal.dismiss();
    },
  },
};
</script>

<style scoped>
.action-sheet-wrapper.sc-ion-action-sheet-md {
  margin-left: unset;
  margin-right: unset;
  -webkit-margin-start: auto;
  margin-inline-start: auto;
  -webkit-margin-end: auto;
  margin-inline-end: auto;
  margin-left: 80px;
  border-radius: 20px !important;
}
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@600&display=swap");
ion-toolbar {
  --background: #343a40;
}
.menu-icon {
  font-size: 35px;
}
#ion-text-center {
  padding-left: 0px;
  padding-right: 38px;
}
ion-content {
  --background: #24292e0d;
}

div.card-titles {
  margin-left: 30px;
}
ion-card {
  border-radius: 10px;
  box-shadow: none !important;
}
ion-card-title {
  color: black;
  font-weight: 800;
  font-size: 38px;
  font-family: "Raleway", sans-serif;
  opacity: 0.8;
}
ion-card-subtitle {
  color: black;
  font-family: "Raleway", sans-serif;
  opacity: 0.7;
  /* font-weight: 800;
   font-size:28px */
}
.space-under {
  margin-top: 70px;
}
ion-card {
  --box-shadow: none;
}
img {
  height: 30%;
  width: 20%;
}
.sale-activity {
  margin-top: 12px;
  margin-left: 12px;
  color: var(--primary);
}

.in_hand {
  border-left: #3c1ef2 2px solid;
  margin-left: 10px;
}
.to_be_recieved {
  border-left: #fd2626 2px solid;
}
.EditIcon {
  --color: #fd2626 !important;
}
ion-list {
  background: none !important;
}
ion-item {
  margin-left: 10px;
  margin-right: 10px;

  border-radius: 10px;
}
</style>
