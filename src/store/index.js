import { createStore } from 'vuex'

const store = createStore({
    state(){
        return{
            memories: [
                {
                  id: "m1",
                  title: "A trip into the mountains",
                  description: "A very good trip",
                  image:'https://images.unsplash.com/photo-1595849036584-46b59a2d8ab9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
                },
                {
                  id: "m2",
                  title: "Hikings in aba",
                  description: "An amazing trip",
                  image:'https://images.unsplash.com/photo-1565971988118-73c03cd1949c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=60'
                },
                {
                  id: "m3",
                  title: "Nysc",
                  description: "triping for good",
                 image:'https://images.unsplash.com/photo-1565971988118-73c03cd1949c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=60'
                },
                {
                  id: "m4",
                  title: "Journey to lekki",
                  description: "A very good trip",
                   image:'https://images.unsplash.com/photo-1565971988118-73c03cd1949c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=60'
               
                },
              ],
        }
    },
    getters:{
        memories(state){
            return state.memories
        },
        memory(state){
            
            return (memoryId) =>{
                
               return state.memories.find((memory) => memory.id === memoryId)

            }
        }
    },
    actions:{
        addMemory({commit,state}, memoryData){
            
            commit('addMemory', memoryData)
        }
    },
    mutations:{
        addMemory(state, memoryData){
            const newMemory = {
                id: new Date().toISOString(),
                title:memoryData.title,
                image:memoryData.imageUrl,
                description:memoryData.description
            }
            state.memories.unshift(newMemory)
           
        }
    }
})

export default store;