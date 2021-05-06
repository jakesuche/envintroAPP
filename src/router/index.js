import { createRouter, createWebHistory } from '@ionic/vue-router';
// import { RouteRecordRaw } from 'vue-router';
import dashboard from '../pages/dashBoard.vue'
import store from '@/store'


const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path:'/home',
    component:()=>import('../pages/home.vue')
  },
  {
    path:'/login',
    component:()=>import('../pages/loginPage.vue'),
    meta:{onlyGuestUser:true}
  },
  {
    path:'/register',
    component:()=>import('../pages/RegisterPage.vue'),
    meta:{onlyGuestUser:true}
  },
  {
    path:'/verification',
    component:()=>import('../pages/verificationPage.vue')
  },
  {
    path:'/dashboard',
    component:dashboard,
    meta:{onlyAuthUser:true}
  },
  {
    path:'/packages',
    component:()=>import('../pages/packages.vue'),
    meta:{onlyAuthUser:true}
  },
  {
    path:'/customer',
    component:()=>import('@/components/Modals/CreateCustomerModal.vue'),
    meta:{onlyAuthUser:true},
  },
  {
    path:'/customerdetail',
    component:()=>import('../pages/CustomersDetails.vue'),
    meta:{onlyAuthUser:true}
  },
  {
    path:'/allcustomers',
    component:()=>import('../pages/allCustomers.vue'),
    meta:{onlyAuthUser:true}
  },
  {
    path:'/invoices',
    component:()=>import('../pages/allinvoice.vue'),
    meta:{onlyAuthUser:true}
  },
  {
    path:'/items',
    component:()=>import('../pages/items.vue'),
    meta:{onlyAuthUser:true}
  },
  {
    path:'/createinvoice',
    component:()=>import('../pages/createInvoice.vue'),
    meta:{onlyAuthUser:true}
  },
  {
    path:'/pane',
    component:()=>import('../pages/ex1.vue')
  },
  {
    path:'/vendors',
    component:()=>import('../pages/Vendor.vue'),
    meta:{onlyAuthUser:true}
  },
  {
    path:'/salesorder',
    component:()=>import('../pages/SalesOrder.vue'),
    meta:{onlyAuthUser:true}
  },
  {
    path:'/settings',
    component:()=>import('../pages/SettingsPage.vue'),
    meta:{onlyAuthUser:true}
  },
{
  path:'/tasks',
  component:()=>import('../pages/TaskPage.vue'),
  meta:{onlyAuthUser:true}
}


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  store.dispatch('auth/getLocalStoredUser')
  .then(()=> {
    if(to.meta.onlyAuthUser){
      if(store.getters['auth/isAuthenticated']){
        next()
      }else{
        next('/home')
      }
    }else if(to.meta.onlyGuestUser){
      if(store.getters['auth/isAuthenticated']){
        next('/dashboard')
      }else{
        next()

      }
      
    }
    else{
      next()
    }
  
  })
})

export default router
