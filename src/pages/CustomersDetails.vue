<template>
  <base-layout PageTitle="Jake Uche">
    <template v-slot:ion-menu-btn>
      <ion-back-button default-href="allcustomers"></ion-back-button>
    </template>
    <ion-content class="bg_color">
      <ion-segment :value="0" ref="ion-segment" :swipe-gesture="true" scrollable>
        <ion-segment-button
          :value="i"
          v-for="(label, i) in labels"
          :key="i"
          @click="segmentSelected(i)"
        >
          <ion-label>{{ label }}</ion-label>
        </ion-segment-button>
      </ion-segment>
      <!-- <ion-segment mode="ios" lines="none" @ionChange="segmentChanged()" [(ngModel)]="segment">
        <ion-segment-button mode="ios" value="0">
            <ion-label>
                Later Task
            </ion-label>
        </ion-segment-button>
        <ion-segment-button mode="ios" value="1">
            <ion-label>
                Completed Task
            </ion-label>
        </ion-segment-button>
    </ion-segment> -->
      <ion-slides @ionSlideDidChange="ionSlideDidChange($event)" ref="slides">
        <ion-slide>
           <div class="d-block">
            <ion-card class="mb-3">
              <ion-card-header>
               
                <div class="mb-3">
                  <div class="d-flex justify-content-start">
                    <ion-icon
                      class=" d-inline p-2 icon-first-segment"
                      :icon="personOutline"
                    >
                    </ion-icon>
                    <div class="d-inline p-2   "> {{ `${customer().lastname} ${customer().firstname}`}}</div>
                  </div>
                  <div class="d-flex justify-content-start">
                    <ion-icon
                      class=" d-inline p-2 icon-first-segment"
                      :icon="mailOutline"
                    >
                    </ion-icon>

                    <div class="d-inline p-2  ">{{customer().email}}</div>
                  </div>
                </div>
              </ion-card-header>
              <ion-card-content>
                <ion-grid>
                  <ion-row>
                    <ion-col size="4">
                      <ion-icon
                        class="icon-inside-grid"
                        :icon="phonePortraitSharp"
                      >
                      </ion-icon>
                    </ion-col>
                  
                    <ion-col size="4">
                      <ion-icon :icon="callSharp" class="icon-inside-grid">
                      </ion-icon>
                    </ion-col>
                    <ion-col size="4">
                      <ion-icon :icon="mailSharp" class="icon-inside-grid">
                      </ion-icon>
                    </ion-col>
                  </ion-row>
                </ion-grid>
              </ion-card-content>
            </ion-card>
            <ion-card>
              <ion-card-header>
                <div
                
                  class="d-flex justify-content-between accordion"
                  data-toggle="collapse"
                  href="#collapseExample1"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample1"
                >
                  <ion-card-title>
                    <ion-icon :icon="locationOutline"> </ion-icon>
                    Billing & Shipping Address
                  </ion-card-title>
                  <ion-icon :icon="chevronDown" > </ion-icon>
                </div>
              </ion-card-header>
              <ion-card-content>
                <div class="collapse" id="collapseExample1">
                  <div>
                    <ion-list>
                      <ion-list-header>
                        <ion-label class="address-billing">Billing Address</ion-label>
                      </ion-list-header>
                      <ion-item lines="none">
                        <ion-label>Attention</ion-label>
                      </ion-item>
                      <ion-item lines="none">
                        <ion-label>10 Joseph street</ion-label>
                      </ion-item>
                      <ion-item lines="none">
                        <ion-label>Ikeja, Lagos</ion-label>
                      </ion-item>
                      <ion-item lines="none">
                        <ion-label>Country - 10001</ion-label>
                      </ion-item>
                      <ion-item lines="none">
                        <ion-icon :icon="mapSharp" class="icon-inside-grid">

                        </ion-icon>
                      </ion-item>

                    </ion-list>
                  </div>
                  <div>
                    <ion-list>
                      <ion-list-header>
                        <ion-label class="address-billing">Shipping Address</ion-label>
                      </ion-list-header>
                      <ion-item lines="none">
                        <ion-label>Attention</ion-label>
                      </ion-item>
                      <ion-item lines="none">
                        <ion-label>10 Joseph street</ion-label>
                      </ion-item>
                      <ion-item lines="none">
                        <ion-label>Ikeja, Lagos</ion-label>
                      </ion-item>
                      <ion-item lines="none">
                        <ion-label>Country - 10001</ion-label>
                      </ion-item>
                      <ion-item lines="none">
                        <ion-icon :icon="mapSharp" class="icon-inside-grid">

                        </ion-icon>
                      </ion-item>
                       
                    </ion-list>
                  </div>
                </div>
              </ion-card-content>
            </ion-card>
            <ion-card>
              <ion-card-header>
                <div
                  class="d-flex justify-content-between accordion"
                  data-toggle="collapse"
                  href="#collapseExample2"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample2"
                >
                  <ion-card-title>
                    <ion-icon :icon="expandSharp"> </ion-icon>
                    More Information
                  </ion-card-title>
                  <ion-icon :icon="chevronDown"> </ion-icon>
                </div>
              </ion-card-header>
              <ion-card-content>
                <div class="collapse" id="collapseExample2">
                   <ion-list>
                      <ion-list-header>
                        <ion-label class="address-billing">Web </ion-label>
                      </ion-list-header>
                      <ion-item lines="none">
                        <ion-label>Jake.com</ion-label>
                      </ion-item>
                      <ion-list-header>
                        <ion-label class="address-billing">Payment Terms </ion-label>
                      </ion-list-header>
                      <ion-item lines="none">
                        <ion-label>Due end of the month</ion-label>
                      </ion-item>
                      
                       
                    </ion-list>
                </div>
              </ion-card-content>
            </ion-card>
            <ion-card>
              <ion-card-header>
                <div
                  class="d-flex justify-content-between accordion"
                  data-toggle="collapse"
                  href="#collapseExample3"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample3"
                >
                  <ion-card-title>
                    <ion-icon :icon="personOutline"> </ion-icon>
                    Contact Persons
                  </ion-card-title>
                  <ion-icon :icon="chevronDown"> </ion-icon>
                </div>
              </ion-card-header>
              <ion-card-content>
                <div class="collapse" id="collapseExample3">
                  <ion-list>
                     <ion-item lines="none">
                        <ion-label>Mr jake uche</ion-label>
                      </ion-item>
                      <ion-list-header>
                       <ion-icon :icon="mailSharp" >
                      </ion-icon>   <ion-label style="margin-left: 10px;" class="address-billing"> uchechidi@gmail.com </ion-label>
                      </ion-list-header>
                       <ion-list-header>
                       <ion-icon :icon="callSharp">
                      </ion-icon>  <ion-label style="margin-left: 10px;" class="address-billing"> 08102353377 </ion-label>
                      </ion-list-header>
                    </ion-list>
                </div>
              </ion-card-content>
            </ion-card>
          </div>
        </ion-slide>

        <ion-slide>
           <div class="d-block">
            <ion-card class="mb-3">
              <ion-card-header>
               
                <div class="mb-3">
                  <div class="d-flex justify-content-start">
                    <ion-icon
                      class=" d-inline p-2 icon-first-segment"
                      :icon="personOutline"
                    >
                    </ion-icon>
                    <div class="d-inline p-2   ">Jake Chidi</div>
                  </div>
                  <div class="d-flex justify-content-start">
                    <ion-icon
                      class=" d-inline p-2 icon-first-segment"
                      :icon="mailOutline"
                    >
                    </ion-icon>

                    <div class="d-inline p-2  ">Uchechidi9@gmail.com</div>
                  </div>
                </div>
              </ion-card-header>
              <ion-card-content>
                <ion-grid>
                  <ion-row>
                    <ion-col size="4">
                      <ion-icon
                        class="icon-inside-grid"
                        :icon="phonePortraitSharp"
                      >
                      </ion-icon>
                    </ion-col>

                    <ion-col size="4">
                      <ion-icon :icon="callSharp" class="icon-inside-grid">
                      </ion-icon>
                    </ion-col>
                    <ion-col size="4">
                      <ion-icon :icon="mailSharp" class="icon-inside-grid">
                      </ion-icon>
                    </ion-col>
                  </ion-row>
                </ion-grid>
              </ion-card-content>
            </ion-card>
            <ion-card>
              <ion-card-header>
                <div
                
                  class="d-flex justify-content-between accordion"
                  data-toggle="collapse"
                  href="#collapseExample1"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample1"
                >
                  <ion-card-title>
                    <ion-icon :icon="locationOutline"> </ion-icon>
                    Billing & Shipping Address
                  </ion-card-title>
                  <ion-icon :icon="chevronDown" > </ion-icon>
                </div>
              </ion-card-header>
              <ion-card-content>
                <div class="collapse" id="collapseExample1">
                  <div>
                    <ion-list>
                      <ion-list-header>
                        <ion-label class="address-billing">Billing Address</ion-label>
                      </ion-list-header>
                      <ion-item lines="none">
                        <ion-label>Attention</ion-label>
                      </ion-item>
                      <ion-item lines="none">
                        <ion-label>10 Joseph street</ion-label>
                      </ion-item>
                      <ion-item lines="none">
                        <ion-label>Ikeja, Lagos</ion-label>
                      </ion-item>
                      <ion-item lines="none">
                        <ion-label>Country - 10001</ion-label>
                      </ion-item>
                      <ion-item lines="none">
                        <ion-icon :icon="mapSharp" class="icon-inside-grid">

                        </ion-icon>
                      </ion-item>

                    </ion-list>
                  </div>
                  <div>
                    <ion-list>
                      <ion-list-header>
                        <ion-label class="address-billing">Shipping Address</ion-label>
                      </ion-list-header>
                      <ion-item lines="none">
                        <ion-label>Attention</ion-label>
                      </ion-item>
                      <ion-item lines="none">
                        <ion-label>10 Joseph street</ion-label>
                      </ion-item>
                      <ion-item lines="none">
                        <ion-label>Ikeja, Lagos</ion-label>
                      </ion-item>
                      <ion-item lines="none">
                        <ion-label>Country - 10001</ion-label>
                      </ion-item>
                      <ion-item lines="none">
                        <ion-icon :icon="mapSharp" class="icon-inside-grid">

                        </ion-icon>
                      </ion-item>
                       
                    </ion-list>
                  </div>
                </div>
              </ion-card-content>
            </ion-card>
            <ion-card>
              <ion-card-header>
                <div
                  class="d-flex justify-content-between accordion"
                  data-toggle="collapse"
                  href="#collapseExample2"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample2"
                >
                  <ion-card-title>
                    <ion-icon :icon="expandSharp"> </ion-icon>
                    More Information
                  </ion-card-title>
                  <ion-icon :icon="chevronDown"> </ion-icon>
                </div>
              </ion-card-header>
              <ion-card-content>
                <div class="collapse" id="collapseExample2">
                   <ion-list>
                      <ion-list-header>
                        <ion-label class="address-billing">Web </ion-label>
                      </ion-list-header>
                      <ion-item lines="none">
                        <ion-label>Jake.com</ion-label>
                      </ion-item>
                      <ion-list-header>
                        <ion-label class="address-billing">Payment Terms </ion-label>
                      </ion-list-header>
                      <ion-item lines="none">
                        <ion-label>Due end of the month</ion-label>
                      </ion-item>
                      
                       
                    </ion-list>
                </div>
              </ion-card-content>
            </ion-card>
            <ion-card>
              <ion-card-header>
                <div
                  class="d-flex justify-content-between accordion"
                  data-toggle="collapse"
                  href="#collapseExample3"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample3"
                >
                  <ion-card-title>
                    <ion-icon :icon="personOutline"> </ion-icon>
                    Contact Persons
                  </ion-card-title>
                  <ion-icon :icon="chevronDown"> </ion-icon>
                </div>
              </ion-card-header>
              <ion-card-content>
                <div class="collapse" id="collapseExample3">
                  <ion-list>
                     <ion-item lines="none">
                        <ion-label>Mr jake uche</ion-label>
                      </ion-item>
                      <ion-list-header>
                       <ion-icon :icon="mailSharp" >
                      </ion-icon>   <ion-label style="margin-left: 10px;" class="address-billing"> uchechidi@gmail.com </ion-label>
                      </ion-list-header>
                       <ion-list-header>
                       <ion-icon :icon="callSharp">
                      </ion-icon>  <ion-label style="margin-left: 10px;" class="address-billing"> 08102353377 </ion-label>
                      </ion-list-header>
                    </ion-list>
                </div>
              </ion-card-content>
            </ion-card>
          </div>
        </ion-slide>
         <ion-slide>
           <div class="d-block">
            <ion-card class="mb-3">
              <ion-card-header>
               
                <div class="mb-3">
                  <div class="d-flex justify-content-start">
                    <ion-icon
                      class=" d-inline p-2 icon-first-segment"
                      :icon="personOutline"
                    >
                    </ion-icon>
                    <div class="d-inline p-2   ">Jake Chidi</div>
                  </div>
                  <div class="d-flex justify-content-start">
                    <ion-icon
                      class=" d-inline p-2 icon-first-segment"
                      :icon="mailOutline"
                    >
                    </ion-icon>

                    <div class="d-inline p-2  ">Uchechidi9@gmail.com</div>
                  </div>
                </div>
              </ion-card-header>
              <ion-card-content>
                <ion-grid>
                  <ion-row>
                    <ion-col size="4">
                      <ion-icon
                        class="icon-inside-grid"
                        :icon="phonePortraitSharp"
                      >
                      </ion-icon>
                    </ion-col>

                    <ion-col size="4">
                      <ion-icon :icon="callSharp" class="icon-inside-grid">
                      </ion-icon>
                    </ion-col>
                    <ion-col size="4">
                      <ion-icon :icon="mailSharp" class="icon-inside-grid">
                      </ion-icon>
                    </ion-col>
                  </ion-row>
                </ion-grid>
              </ion-card-content>
            </ion-card>
            <ion-card>
              <ion-card-header>
                <div
                
                  class="d-flex justify-content-between accordion"
                  data-toggle="collapse"
                  href="#collapseExample1"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample1"
                >
                  <ion-card-title>
                    <ion-icon :icon="locationOutline"> </ion-icon>
                    Billing & Shipping Address
                  </ion-card-title>
                  <ion-icon :icon="chevronDown" > </ion-icon>
                </div>
              </ion-card-header>
              <ion-card-content>
                <div class="collapse" id="collapseExample1">
                  <div>
                    <ion-list>
                      <ion-list-header>
                        <ion-label class="address-billing">Billing Address</ion-label>
                      </ion-list-header>
                      <ion-item lines="none">
                        <ion-label>Attention</ion-label>
                      </ion-item>
                      <ion-item lines="none">
                        <ion-label>10 Joseph street</ion-label>
                      </ion-item>
                      <ion-item lines="none">
                        <ion-label>Ikeja, Lagos</ion-label>
                      </ion-item>
                      <ion-item lines="none">
                        <ion-label>Country - 10001</ion-label>
                      </ion-item>
                      <ion-item lines="none">
                        <ion-icon :icon="mapSharp" class="icon-inside-grid">

                        </ion-icon>
                      </ion-item>

                    </ion-list>
                  </div>
                  <div>
                    <ion-list>
                      <ion-list-header>
                        <ion-label class="address-billing">Shipping Address</ion-label>
                      </ion-list-header>
                      <ion-item lines="none">
                        <ion-label>Attention</ion-label>
                      </ion-item>
                      <ion-item lines="none">
                        <ion-label>10 Joseph street</ion-label>
                      </ion-item>
                      <ion-item lines="none">
                        <ion-label>Ikeja, Lagos</ion-label>
                      </ion-item>
                      <ion-item lines="none">
                        <ion-label>Country - 10001</ion-label>
                      </ion-item>
                      <ion-item lines="none">
                        <ion-icon :icon="mapSharp" class="icon-inside-grid">

                        </ion-icon>
                      </ion-item>
                       
                    </ion-list>
                  </div>
                </div>
              </ion-card-content>
            </ion-card>
            <ion-card>
              <ion-card-header>
                <div
                  class="d-flex justify-content-between accordion"
                  data-toggle="collapse"
                  href="#collapseExample2"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample2"
                >
                  <ion-card-title>
                    <ion-icon :icon="expandSharp"> </ion-icon>
                    More Information
                  </ion-card-title>
                  <ion-icon :icon="chevronDown"> </ion-icon>
                </div>
              </ion-card-header>
              <ion-card-content>
                <div class="collapse" id="collapseExample2">
                   <ion-list>
                      <ion-list-header>
                        <ion-label class="address-billing">Web </ion-label>
                      </ion-list-header>
                      <ion-item lines="none">
                        <ion-label>Jake.com</ion-label>
                      </ion-item>
                      <ion-list-header>
                        <ion-label class="address-billing">Payment Terms </ion-label>
                      </ion-list-header>
                      <ion-item lines="none">
                        <ion-label>Due end of the month</ion-label>
                      </ion-item>
                      
                       
                    </ion-list>
                </div>
              </ion-card-content>
            </ion-card>
            <ion-card>
              <ion-card-header>
                <div
                  class="d-flex justify-content-between accordion"
                  data-toggle="collapse"
                  href="#collapseExample3"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample3"
                >
                  <ion-card-title>
                    <ion-icon :icon="personOutline"> </ion-icon>
                    Contact Persons 
                  </ion-card-title>
                  <ion-icon :icon="chevronDown"> </ion-icon>
                </div>
              </ion-card-header>
              <ion-card-content>
                <div class="collapse" id="collapseExample3">
                  <ion-list>
                     <ion-item lines="none">
                        <ion-label>Mr jake uche</ion-label>
                      </ion-item>
                      
                      <ion-list-header>
                       <ion-icon :icon="mailSharp" >
                      </ion-icon>   <ion-label style="margin-left: 10px;" class="address-billing"> uchechidi@gmail.com </ion-label>
                      </ion-list-header>
                       <ion-list-header>
                       <ion-icon :icon="callSharp">
                      </ion-icon>  <ion-label style="margin-left: 10px;" class="address-billing"> 08102353377 </ion-label>
                      </ion-list-header>
                    </ion-list>
                </div>
              </ion-card-content>
            </ion-card>
          </div>
        </ion-slide>
      </ion-slides>
    </ion-content>

    <!-- ion menu here -->
    
  </base-layout>
</template>

<script>
import TaskModal from '@/components/Modals/CreateTaskModal.vue'
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
  IonCard,
  IonList,
  IonLabel,
  actionSheetController,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  modalController,
  IonSegmentButton,
  IonSegment,
  IonListHeader,
  IonItem,
  IonSlide,
  IonSlides,


} from "@ionic/vue";
import {
  expandSharp,
  callSharp,
  mailSharp,
  phonePortraitSharp,
  personOutline,
  mailOutline,
  chevronDown,
  locationOutline,
  mapSharp
} from "ionicons/icons";
export default {
  data() {
    return {
     labels: ["DETAILS", "RECENT SHIPMENTS", "COMMENTS & HISTORY"],
      callSharp,
      mailSharp,
      phonePortraitSharp,
      personOutline,
      locationOutline,
      mailOutline,
      chevronDown,
      expandSharp,
       mapSharp,
       isRotated:true
    };
  },
   mounted() {
    console.log(this.$refs["slides"].childNode);
  },
  created(){
    const customerId = this.$route.query.id;
    
    this.getCustomerById(customerId)
    
  },
 

  components: {
    // DessetModal,
    IonCard,
    IonSegmentButton,
  IonSegment,
  IonListHeader,
  IonItem,
  IonSlide,
  IonSlides,
    IonList,
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
    IonLabel,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
  },

  methods: {
    customer(){
      return this.$store.state.customer.customerDetails || { }
    },
    getCustomerById(customerId){
      this.$store.dispatch('customer/getCustomerDetails', customerId)
        
      },
    ionSlideDidChange(event) {
      this.$refs["slides"].getActiveIndex().then((res) => {
        this.$refs["ion-segment"].value = res;
      });
    },
    segmentSelected(i) {
      this.$refs["slides"].slideTo(i);
    },
    async openModal(){
      let modal = await modalController.create({
        component:TaskModal
      })
      modal.present()
    }
  },
};
</script>

<style scoped>


/* css for second */
.rotate{
  transform: rotate(180deg);
}
.address-billing{
  text-align: left;
    font-size: 16px;
    opacity:0.4;
}
.accordion ion-card-title {
  color: black;
}
.accordion ion-icon {
  font-size: 20px;
  color: rgb(24, 22, 22);
}
ion-content {
  --background: #dee2e694;
}
.p-2 {
  padding: 0.5rem !important;
  font-size: 20px;
  color: black;
}
.icon-first-segment {
  font-size: 30px;
}
.icon-inside-grid {
  font-size: 30px;
  color: var(--yellow);
}
ion-toolbar {
  --background: #343a40;
}
.label-ion {
  padding-left: 60px !important;
  padding-right: 70px !important;
}
ion-card {
  display: flex;
  flex-direction: column;
  /* margin: 0 !important; */
  width: 394px;
  border-radius: 10px;
  box-shadow: none;
}
ion-item{
 margin-top:-13px 
}

ion-segment{
  --color:red!important;
 
}
ion-segment-button{
  --color-checked:var(--primary);
  --border-color:var(--primary)

}


</style>

