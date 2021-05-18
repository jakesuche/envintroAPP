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
    customer: null,
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
    createCustomer(context, customerData) {
      return axiosInstance
        .post("/api/v1/customers/createcustomer", customerData)
        .then((res) => {
          
          const customer = res.data;
          context.commit("setNewCustomer", customer);
        });
    },
    getCustomers(context) {
      return axiosInstance.get("/api/v1/customers/getcustomers").then((res) => {
        const customer = res.data;
       
        context.commit("setCustomers", customer);
      });
    },
    getCustomerDetails(context, customerId) {
      return axiosInstance
        .get(`/api/v1/customers/getcustomer/${customerId}/`)
        .then((res) => {
          const customerId = res.data;
         
          context.commit("setCustomerDetails", customerId);
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
  mutations: {
    setUser(state, userData) {
      return (state.user = userData);
    },
    setCustomers(state, customer) {
      state.customer = customer;
    },
    setNewCustomer(state, customer) {
      state.customer.unshift(customer);
    },
    setCustomerDetails(state, customerId) {
      state.customerDetails = customerId;
    },
  },
};
