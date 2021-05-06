import { createStore } from 'vuex'
import auth from '../store/modules/auth'
import customer from '../store/modules/customer'

const store = createStore({
    modules:{
        auth,
        customer
    }
    // state(){
        
    // },
    // getters:{
       
    // },
    // actions:{
    //     addMemory({commit,state}, memoryData){
            
    //         commit('addMemory', memoryData)
    //     }
    // },
    // mutations:{
    //     addMemory(state, memoryData){
    //         const newMemory = {
    //             id: new Date().toISOString(),
    //             title:memoryData.title,
    //             image:memoryData.imageUrl,
    //             description:memoryData.description
    //         }
    //         state.memories.unshift(newMemory)
           
    //     }
    // }
})

export default store;