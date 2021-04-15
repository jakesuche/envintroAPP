import { createRouter, createWebHistory } from '@ionic/vue-router';
// import { RouteRecordRaw } from 'vue-router';



const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path:'/home',
    component:()=>import('../pages/home.vue')
  },
  {
    path:'/login',
    component:()=>import('../pages/loginPage.vue')
  },
  {
    path:'/register',
    component:()=>import('../pages/RegisterPage.vue')
  },
  {
    path:'/dashboard',
    component:()=>import('../pages/dashBoard.vue')
  },
  {
    path:'/packages',
    component:()=>import('../pages/packages.vue')
  },
  {
    path:'/customer',
    component:()=>import('@/components/Modals/CreateCustomerModal.vue')
  },
  {
    path:'/customerdetail',
    component:()=>import('../pages/CustomersDetails.vue')
  },
  {
    path:'/allcustomers',
    component:()=>import('../pages/allCustomers.vue')
  },
  {
    path:'/invoices',
    component:()=>import('../pages/allinvoice.vue')
  },
  {
    path:'/items',
    component:()=>import('../pages/items.vue')
  },
  {
    path:'/createinvoice',
    component:()=>import('../pages/createInvoice.vue')
  },
  {
    path:'/pane',
    component:()=>import('../pages/ex1.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
