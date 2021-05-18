import axios from "axios";
const myAxios = axios.create({
  baseURL: "http://localhost:3000",
});
import { Plugins } from "@capacitor/core";
import axiosInstance from "@/service/axios";
const { Storage } = Plugins;

export default {
  namespaced: true,
  state: {
    sales: null,
    customerDetails: null,
    isAuthResolved: false,
  },
  getters: {
    isShow(state) {
      if (state.customer != null && state.customer.length > 0) {
        return true;
      }
      return false;
    },
  },
  actions: {
    createSales(context, sales) {
      return axiosInstance
        .post("/api/v1/sales/createsales", sales)
        .then((res) => {
          
          const sales = res.data;
          context.commit("setSales", sales);
        });
    },
   
  },
  mutations: {
    setUser(state, sales) {
      state.sales.unshift(sales)
    },
    
   
  },
};
