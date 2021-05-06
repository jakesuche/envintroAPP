import axios from 'axios'
const myAxios = axios.create({
    baseURL:"http://localhost:3000"
})
import { Plugins } from '@capacitor/core'
const { Storage } = Plugins

export default {
    namespaced:true,
    state:{
    user:null,
    isAuthResolved:false
    },
    getters:{
        isAuthenticated(state){
            return !!state.user
        }
    },
    actions:{
        registerUser(context, userData){
            
            return myAxios.post('/api/v1/users/register', userData)
        },
        verifyUser(context, otpCode){
            console.log(otpCode)
            return myAxios.post('/api/v1/users/verify', otpCode)
        },
        loginUser(context, userData){
            return myAxios.post('/api/v1/users/login', userData)
        },
        getLocalStoredUser(context){
            Storage.get({key:'user'})
            .then(userData => {
            if(userData.value == null){
                context.commit('setUser', null)
            }else{
                console.log(new Object(userData))
                console.log(userData)
                context.commit('setUser', userData)     
            }
            
            })
            
        }


    },
    mutations:{
        setUser(state, userData){
            return state.user = userData
        }
    }
}