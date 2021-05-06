import axios from 'axios'
const myAxios = axios.create({
    baseURL:"http://localhost:3000"
})
import { Plugins } from '@capacitor/core'
const { Storage } = Plugins

export default {
    namespaced:true,
    state:{
    customer:null,
    isAuthResolved:false
    },
    getters:{
        isAuthenticated(state){
            return !!state.user
        }
    },
    actions:{
        createCustomer(context, customerData){
            return myAxios.post('/api/v1/customers/createcustomer', customerData)
        },
       


    },
    mutations:{
        setUser(state, userData){
            return state.user = userData
        }
    }
}