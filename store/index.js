import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({  
    state: {  
        userName: 'weichen'  
    },  
    mutations: {  
        changeName(state,name) {  
            state.userName = name;  
        }  
    }  
})
export default store
