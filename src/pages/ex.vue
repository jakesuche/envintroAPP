
<template>
  <ion-menu content-id="main-content" type="overlay">
    <div class="menu-top">
      <ion-list
        id="inbox-list"
        class="menu-top-list ion-no-border"
        lines="none904"
      >
        <ion-avatar>
          <img
            src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
          />
        </ion-avatar>
        <ion-list-header>Company</ion-list-header>
        <ion-note>uchechidi@gmail.com</ion-note>
      </ion-list>
    </div>
    <ion-content>
      <ion-list id="inbox-list">
         <ion-menu-toggle >
          <ion-item
           
            @click="selectedIndex = 'dashboard'; $router.push('/dashboard')"
            router-direction="root"
            router-link="/dashboard"
            lines="none"
            detail="false"
            
            :class="{ selected: selectedIndex === 'dashboard' }"
          >
            <ion-icon slot="start" :icon="homeSharp"></ion-icon>
            <ion-label>Dashboard</ion-label>
          </ion-item>
          </ion-menu-toggle>
           <ion-item
            @click="itemsMethods"
            
           
            lines="none"
            detail="false"
           
            :class="{ selected: selectedIndex === 'item' }"
          >
            <ion-icon slot="start" :icon="basketSharp"></ion-icon>
            <ion-label>Items</ion-label>
          </ion-item>
           <div class="classItems" v-if="showItemThings">
             <ion-menu-toggle :auto-hide="false">
            <ion-item
              @click="selectedIndex = 'itemgroup'"
              router-direction="root"
              :router-link="'/dashboard'"
              lines="none"
              detail="false"
              class="hydrated"
              :class="{ selected: selectedIndex === 'itemgroup' }"
            >
              <ion-icon slot="start"></ion-icon>
              <ion-label>Item Groups</ion-label>
            </ion-item>
            </ion-menu-toggle>
            <ion-menu-toggle :auto-hide="false">
            <ion-item
              @click="selectedIndex = 'items', $router.push('/items')"
              router-direction="root"
              :router-link="'/dashboard'"
              lines="none"
              detail="false"
              class="hydrated"
              :class="{ selected: selectedIndex === 'items' }"
            >
              <ion-icon slot="start"></ion-icon>
              <ion-label>Items</ion-label>
            </ion-item>
            </ion-menu-toggle>
            <ion-menu-toggle :auto-hide="false">
            <ion-item disabled readonly
              @click="selectedIndex = 'inventoryadjustment'"
              router-direction="root"
              :router-link="'/dashboard'"
              lines="none"
              detail="false"
              class="hydrated"
              :class="{ selected: selectedIndex === 'inventoryadjustment' }"
            >
              <ion-icon slot="start"></ion-icon>
              <ion-label>Inventory Adjustments</ion-label>
            </ion-item>
            </ion-menu-toggle >
           
          </div>
          <ion-menu-toggle :auto-hide="false">
           <ion-item
            @click="selectedIndex = 'customers'; $router.push('/allcustomers')"
            router-direction="root"
            :router-link="'/dashboard'"
            lines="none"
            detail="false"
            class="hydrated"
            :class="{ selected: selectedIndex === 'customers' }"
          >
            <ion-icon slot="start" :icon="peopleSharp"></ion-icon>
            <ion-label>Customers</ion-label>
          </ion-item>
          <ion-item
            @click="selectedIndex = 'salesorder'; $router.push('/salesorder')"
            router-direction="root"
            :router-link="'/dashboard'"
            lines="none"
            detail="false"
            class="hydrated"
            :class="{ selected: selectedIndex === 'salesorder' }"
          >
            <ion-icon slot="start" :icon="cartSharp"></ion-icon>
            <ion-label>Sales Order</ion-label>
          </ion-item>
          <ion-item
            @click="selectedIndex = 'packages',$router.push('/packages')"
            router-direction="root"
            :router-link="'/dashboard'"
            lines="none"
            detail="false"
            class="hydrated"
            :class="{ selected: selectedIndex === 'packages' }"
          >
            <ion-icon slot="start" :icon="bagOutline"></ion-icon>
            <ion-label>Packages</ion-label>
          </ion-item>
          <ion-item
            @click="selectedIndex = 'invoices'; $router.push('/invoices')"
            router-direction="root"
            :router-link="'/dashboard'"
            lines="none"
            detail="false"
            class="hydrated"
            :class="{ selected: selectedIndex === 'invoices' }"
          >
            <ion-icon slot="start" :icon="documentTextSharp"></ion-icon>
            <ion-label>Invoices</ion-label>
          </ion-item>
          <ion-item
            @click="selectedIndex = 'return'"
            router-direction="root"
            :router-link="'/dashboard'"
            lines="none"
            detail="false"
            class="hydrated"
            :class="{ selected: selectedIndex === 'return' }"
          >
            <ion-icon slot="start" :icon="returnUpBackSharp"></ion-icon>
            <ion-label>Sales Return</ion-label>
          </ion-item>
          <ion-item
            @click="selectedIndex = 'vendors'"
            router-direction="root"
            :router-link="'/dashboard'"
            lines="none"
            detail="false"
            class="hydrated"
            :class="{ selected: selectedIndex === 'vendors' }"
          >
            <ion-icon slot="start" :icon="storefrontSharp"></ion-icon>
            <ion-label>Vendors</ion-label>
          </ion-item>
          <ion-item
            @click="selectedIndex = 'purchaseorder'"
            router-direction="root"
            :router-link="'/dashboard'"
            lines="none"
            detail="false"
            class="hydrated"
            :class="{ selected: selectedIndex === 'purchaseorder' }"
          >
            <ion-icon slot="start" :icon="newspaperSharp"></ion-icon>
            <ion-label>Purchase Orders</ion-label>
          </ion-item>
          <ion-item
            @click="selectedIndex = 'bills'"
            router-direction="root"
            :router-link="'/dashboard'"
            lines="none"
            detail="false"
            class="hydrated"
            :class="{ selected: selectedIndex === 'bills' }"
          >
            <ion-icon slot="start" :icon="cardOutline"></ion-icon>
            <ion-label>Bills</ion-label>
          </ion-item>
          <ion-item
            @click="selectedIndex = 'settings'"
            router-direction="root"
            :router-link="'/dashboard'"
            lines="none"
            detail="false"
            class="hydrated"
            :class="{ selected: selectedIndex === 'settings' }"
          >
            <ion-icon slot="start" :icon="settingsSharp"></ion-icon>
            <ion-label>Setting</ion-label>
          </ion-item>
          <ion-item
            @click="selectedIndex = 'feedback'"
            router-direction="root"
            :router-link="'/dashboard'"
            lines="none"
            detail="false"
            class="hydrated"
            :class="{ selected: selectedIndex === 'feedback' }"
          >
            <ion-icon slot="start" :icon="chatboxEllipsesSharp"></ion-icon>
            <ion-label>Feedback</ion-label>
          </ion-item>
          </ion-menu-toggle >

      
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<script>
import {
  homeSharp,
  basketSharp,
  peopleSharp,
  cardOutline,
  storefrontSharp,
  settingsSharp,
  documentTextSharp,
  chatboxEllipsesSharp,
  returnUpBackSharp,
  newspaperSharp,
  bagOutline,
  cartSharp
} from "ionicons/icons";
// import { homeSharp, person, cartSharp, basketSharp,paperPlane, returnUpForward,settingsSharp, mail} from 'ionicons/icons';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";

export default {
  data() {
    return {
      selectedIndex: "dashboard",
      homeSharp,
      basketSharp,
      peopleSharp,
      cardOutline,
      storefrontSharp,
      settingsSharp,
      documentTextSharp,
      chatboxEllipsesSharp,
      returnUpBackSharp,
      newspaperSharp,
      bagOutline,
  cartSharp,

      showItemThings: false,
    };
  },
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
  },
  methods:{
    itemsMethods(){
      this.showItemThings = !this.showItemThings;
      this.selectedIndex = 'items'

    }
  }
};
</script>

<style scoped>
ion-list {
  border: none !important;
}
.menu-top-list {
  background: #343a40;
  color: white;
  margin-left: 10px;
}
ion-list-header,
ion-note {
  color: white !important;
}
.menu-top {
  background: #343a40;
}
ion-menu ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, #fff));
}

ion-menu.md ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-top: 20px;
  --padding-bottom: 20px;
}

ion-menu.md ion-list {
  padding: 20px 0;
}

ion-menu.md ion-note {
  margin-bottom: 30px;
}

ion-menu.md ion-list-header,
ion-menu.md ion-note {
  padding-left: 10px;
}

ion-menu.md ion-list#inbox-list {
   border-bottom: 1px solid var(--ion-color-step-150, #d7d8da); 
}

ion-menu.md ion-list#inbox-list ion-list-header {
  font-size: 22px;
  font-weight: 600;

  min-height: 20px;
}

ion-menu.md ion-list#labels-list ion-list-header {
  font-size: 16px;

  margin-bottom: 18px;

  color: #757575;

  min-height: 26px;
}

ion-menu.md ion-item {
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 4px;
}

ion-menu.md ion-item.selected {
  --background: rgba(var(--ion-color-primary-rgb), 0.14);
}

ion-menu.md ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.md ion-item ion-icon {
  color: #616e7e;
}

ion-menu.md ion-item ion-label {
  font-weight: 500;
}

ion-menu.ios ion-content {
  --padding-bottom: 20px;
}

ion-menu.ios ion-list {
  padding: 20px 0 0 0;
}

ion-menu.ios ion-note {
  line-height: 24px;
  margin-bottom: 20px;
}

ion-menu.ios ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --min-height: 50px;
}

ion-menu.ios ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.ios ion-item ion-icon {
  font-size: 24px;
  color: #73849a;
}

ion-menu.ios ion-list#labels-list ion-list-header {
  margin-bottom: 8px;
}

ion-menu.ios ion-list-header,
ion-menu.ios ion-note {
  padding-left: 16px;
  padding-right: 16px;
}

ion-menu.ios ion-note {
  margin-bottom: 8px;
}

ion-note {
  display: inline-block;
  font-size: 16px;

  color: var(--ion-color-medium-shade);
}

ion-item.selected {
  --color: var(--ion-color-primary);
}

ion-item.item-has-focus > ion-label{
  color: red !important;
}
</style>


 