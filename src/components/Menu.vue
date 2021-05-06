<template>
  <ion-menu contentId="main-content" menu-id="main-content" type="overlay">
    <ion-header>
     <ion-toolbar>
                    <ion-title>
                        <div class="title_inner d-flex">
                            <div class="close_button">
                                <ion-menu-toggle auto-hide="false">
                                    <ion-icon :icon="icons.closeCircle" class="zmdi zmdi-close"></ion-icon>
                                </ion-menu-toggle>
                            </div>
                            <!-- <span class="ion-text-center"> Menu</span> -->
                        </div>
                    </ion-title>
                </ion-toolbar>
    <div class="banner">
      <div class="profile_details d-flex">
        <ion-menu-toggle
          class="d-flex"
          auto-hide="false"
          style="align-items: flex-start !important;"
        >
          <div class="img_box center_img">
            <div id="profileImage"></div>
            <img src="https://via.placeholder.com/150" class="crop_img" />
          </div>
          <div class="text_box">
            <h2 id="store_name">
              Nicon Net<br />
              
            </h2>
            <p>08102343377</p>
          </div>
        </ion-menu-toggle>
      </div>
    </div>
    </ion-header>
    <ion-content>
      <!-- <div class="menu-top">
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
    </div> -->
      <div class="main-list">
        <ion-list id="inbox-list">
          <ion-menu-toggle :auto-hide="false">
          <ion-item
            class="hydrated"
            @click="
              selectedIndex = 'dashboard';
              $router.push('/dashboard');
            "
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
                @click="(selectedIndex = 'items'), $router.push('/items')"
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
              <ion-item
                disabled
                readonly
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
            </ion-menu-toggle>
          </div>
          <ion-menu-toggle :auto-hide="false">
              <ion-item
                @click="(selectedIndex = 'tasks'), $router.push('/tasks')"
                router-direction="root"
                :router-link="'/dashboard'"
                lines="none"
                detail="false"
                class="hydrated"
                :class="{ selected: selectedIndex === 'tasks' }"
              >
               <ion-icon slot="start" :icon="icons.listOutline"></ion-icon>
                <ion-label>Task</ion-label>
              </ion-item>
            </ion-menu-toggle>
          <ion-menu-toggle :auto-hide="false">
            <ion-item
              @click="
                selectedIndex = 'customers';
                $router.push('/allcustomers');
              "
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
              @click="
                selectedIndex = 'salesorder';
                $router.push('/salesorder');
              "
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
              @click="(selectedIndex = 'packages'), $router.push('/packages')"
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
              @click="
                selectedIndex = 'invoices';
                $router.push('/invoices');
              "
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
              @click="selectedIndex = 'settings';$router.push('/settings');"
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
              @click="selectedIndex = 'feedback';"
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
          </ion-menu-toggle>
        </ion-list>

        <ion-button fill="clear" color="dark" @click="closeMenu()">
          <ion-icon :icon="closeCircleOutline"></ion-icon>
        </ion-button>
      </div>
    </ion-content>
  </ion-menu>
  <ion-router-outlet id="main-content"></ion-router-outlet>
</template>

<script>
import {
  IonContent,
  IonItem,
  IonList,
  IonMenu,
  IonRouterOutlet,
  menuController,
  // IonSplitPane,
  IonLabel,
  IonMenuToggle,
  IonIcon,
  IonButton,
} from "@ionic/vue";
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
  cartSharp,
} from "ionicons/icons";
import { defineComponent, reactive, ref } from "vue";
import { closeCircleOutline } from "ionicons/icons";
import { useRouter } from "vue-router";
export default defineComponent({
  components: {
    IonContent,
    IonItem,
    IonList,
    IonMenu,
    IonRouterOutlet,
    // IonSplitPane,
    IonLabel,
    IonMenuToggle,
    IonIcon,
    IonButton,
  },
  data() {
    return {
      selectedIndex: "dashboard",
      showItemThings: false,
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
    };
  },
  mounted(){

  const fullName = document.getElementById('store_name').textContent;
const intials = fullName.split(' ').map(name => name[0]).join('').toUpperCase();
document.getElementById('profileImage').innerHTML = intials;
  },

  methods: {
    openMenu() {
      menuController.enable(true, "main-content");
      menuController.open("main-content");
    },
    closeMenu() {
      /*   menuController.enable(false, "main-content");
      menuController.close("main-content"); */
      menuController.toggle();
    },
    itemsMethods() {
      this.showItemThings = !this.showItemThings;
      this.selectedIndex = "items";
    },
  },
});
</script>

<style>
ion-menu {
  --width: 100%;
}
.main-list {
  /* height: 100%;
  display: flex;
  justify-content: center;
  align-items: center; */
}
.main-list ion-list {
  width: 100%;
}
.main-list ion-list ion-item {
  font-size: 18px;
  font-weight: 100;
}
.main-list ion-list .selected {
  border-left: 5px solid var(--ion-color-primary);
  color: var(--ion-color-primary);
}
.main-list ion-button {
  position: absolute;
  bottom: 10%;
  right: 10%;
  font-size: 24px;
  --ripple-color: transparent;
}
ion-menu.md ion-item.selected {
  --background: rgba(var(--ion-color-primary-rgb), 0.14);
}

ion-menu.md ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

.menu-top-list {
  background: var(--primary);
  color: white;
  margin-left: 10px;
}
ion-list-header,
ion-note {
  color: white !important;
}
.menu-top {
  background: var(--primary);
}
.banner {
  background: var(--white);
  padding: 10px 18px 18px 18px;
  margin-top: -10px;
}
.banner .profile_details {
  width: 100%;
  align-items: flex-start;
}
.banner .profile_details .img_box {
  width: 100%;
  max-width: 155px;
  min-width: 155px;
  height: 155px;
  border-radius: 10px;
  margin-right: 20px;
}
.banner .profile_details .text_box {
  padding-top: 5px;
}
.banner .profile_details .text_box h2 {
  margin: 0;
  color: var(--text-dark);
  font-size: 1.53rem;
  font-weight: 600;
  line-height: 31px;
  padding-bottom: 10px;
}
.banner .profile_details .text_box p {
  margin: 0;
  color: var(--text-light2);
  font-size: 0.94rem;
  font-weight: 400;
  padding-bottom: 10px;
}
.zmdi-close{
  font-size: 30px;
    margin-bottom: -12px;
    color: var(--primary);
}
#profileImage {
 font-family: Arial, Helvetica, sans-serif;
    width: 10rem;
    height: 10rem;
    /* border-radius: 50%; */
    background: var(--primary);
    font-size: 3.5rem;
    color: #fff;
    text-align: center;
    line-height: 10rem;
    margin: 2rem 0;
    position: absolute;
    min-width: 100%;
    min-height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 1;
}
</style>
