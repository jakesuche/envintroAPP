<template>
  <div class="custom-modal-bg" :class="{ 'bg-active': openLine }">
    <div class="custom-modal">
      <div class="form">
        <ion-button @click="closeModal" class="cancelBtn">
          <ion-icon :icon="icons.close"> </ion-icon>
        </ion-button>
        <ion-list lines="none">
          <ion-list-header>
            <ion-label>Add Line Item </ion-label>
          </ion-list-header>
          <div id="anime">
            <ion-item class="animate__animated animate__fadeInUp" lines="none">
              <div class="ite_inner d-flex">
                <!--				<ion-label position="fixed">{{'email_address' | translate}}</ion-label>-->
                <ion-input
                  v-model="form.item"
                  placeholder="Item"
                  type="name"
                ></ion-input>
              </div>
            </ion-item>
          </div>
          <div id="anime">
            <ion-item class="animate__animated animate__fadeInUp" lines="none">
              <div class="ite_inner d-flex">
                <!--				<ion-label position="fixed">{{'email_address' | translate}}</ion-label>-->
                <ion-input
                  v-model="form.description"
                  placeholder="Description"
                  type="name"
                ></ion-input>
              </div>
            </ion-item>
          </div>
          <ion-grid>
            <ion-row>
              <ion-col>
                <div id="anime">
                  <ion-item
                    class="animate__animated animate__fadeInUp"
                    lines="none"
                  >
                    <div class="ite_inner d-flex">
                      <!--				<ion-label position="fixed">{{'email_address' | translate}}</ion-label>-->
                      <ion-input
                        v-model="form.quantity"
                        placeholder="Quantity"
                        type="name"
                      ></ion-input>
                    </div>
                  </ion-item>
                </div>
              </ion-col>
              <ion-col>
                <div id="anime">
                  <ion-item
                    class="animate__animated animate__fadeInUp"
                    lines="none"
                  >
                    <div class="ite_inner d-flex">
                      <!--				<ion-label position="fixed">{{'email_address' | translate}}</ion-label>-->
                      <ion-input
                        v-model="form.rate"
                        placeholder="Rate"
                        type="name"
                      ></ion-input>
                    </div>
                  </ion-item>
                </div>
              </ion-col>
            </ion-row>
          </ion-grid>
          <ion-button
            @click="emitFormData"
            expand="block"
            class="btn animate__animated animate__fadeInUp"
          >
            Save Line Item
          </ion-button>

          <hr />
          <!-- social media section -->
        </ion-list>
      </div>
    </div>
  </div>
</template>

<script>
import { imageRotate } from "@/anime";

import {
  IonInput,
  IonCol,
  IonGrid,
  IonRow,
  IonList,
  IonItem,
  IonIcon,
  IonListHeader,
  IonLabel,
  IonButton,
} from "@ionic/vue";
export default {
  components: {
    IonInput,
    IonCol,
    IonGrid,
    IonRow,
    IonList,
    IonItem,
    IonIcon,
    IonListHeader,
    IonLabel,
    IonButton,
  },
  data() {
    return {
      openLine: false,
      form: {
        item: "",
        quantity: "",
        rate: "",
        description: "",
      },
    };
  },
 
  mounted() {
    let image = this.$refs["image"];
    imageRotate(image);
    this.$EventBus().emitter.on("OpenLine", (data) => {
      this.openLine = true;
    });
  },

  methods: {
    closeModal() {
      this.openLine = false;
    },
    emitFormData() {
      this.$EventBus().emitter.emit("addForm", this.form);
    },
  },
};
</script>

<style scoped>
ion-label {
  color: var(--primary) !important;
  font-size: 33px;
  text-align: center;
  margin-top: -20px;
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
  width: 98%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 12px;
  height: 500px;
}
.close-custom-modal {
  position: absolute;

  z-index: 111111;

  right: 10px;
}
.modal-card {
  box-shadow: none !important;
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
ion-button {
  height: 70px !important;
  --border-radius: 12px !important;
}
.cancelBtn {
  position: relative;
  top: -50px;
  width: 70px;
  right: -290px;
  margin-bottom: -30px;
  --background: var(--primary) !important;
}
</style>
