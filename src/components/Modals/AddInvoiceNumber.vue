<template>
  <ion-page>
    <ion-content>
      <ion-card >
        <ion-card-header>
            <ion-button size="large" expand="full" @click="generateInvoiceNumber">
                Click to generate invoice
            </ion-button>
          
        </ion-card-header>
        <ion-card-content>
          <ion-grid>
            <ion-row>
              <ion-col size="5">
                <ion-item lines="none">
                  <ion-label position="stacked">Prefix</ion-label>
                  <ion-input></ion-input>
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
        </ion-card-content>
      </ion-card>
      <ion-grid>
          <ion-row>
              <ion-col>
                  <ion-button  expand="full" fill="clear" size="large" @click="closeModal">
                      CANCEL
                  </ion-button>
              </ion-col>
              <ion-col>
                  <ion-button class="btn-save" expand="full" size="large">
                      SAVE
                  </ion-button>
              </ion-col>
              
          </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
  IonButton,
  IonInput,
  IonLabel,
  IonCard,
  IonCardContent,
  IonItem,
  IonCardHeader,
  modalController,
  loadingController
} from "@ionic/vue";

export default {
  data() {
    return {
        invoiceNumber:''
    };
  },
  mounted(){
      
  },
  components: {
    IonPage,
    IonContent,
    IonButton,
    IonInput,
    IonLabel,
    IonCard,
    IonCardContent,
    IonItem,
    IonCardHeader,
  },
  methods:{
      async closeModal(){
     await modalController.dismiss()
  },
  async createLoading(){
      let loading = await loadingController.create({
          message:'generating'
      })
      loading.present()
  },
  generateInvoiceNumber(){
      this.createLoading()
      setTimeout(() => {
          this.invoiceNumber =  `${345}${Math.floor(Math.random() * 9999999999) }`
            loadingController.dismiss()
      },3000);


      
     

  }
  }
  
};
</script>

<style scoped>
ion-input {
  border: 1px solid #616060;
  min-height:50px;
 
  --padding-start: 4px !important;
}
ion-label {
  margin-bottom: 15px !important;
  font-size: 23px !important;
}
ion-col{
    padding-left: 0;
    padding-right: 0;
}
ion-card{
    --border:none!important;
    box-shadow:none!important
}
h4, .h4 {
    font-size: 1.3rem;
    /* opacity: 1; */
    color: #24292ed1;
}
.btn-save{
    margin-right: -8px
}
ion-button{
    margin-bottom: 0px;
}


</style>
