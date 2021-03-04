import Vue from 'vue'
import App from './App'
import $api from './common/api/index.js'
import uView from "uview-ui";
import store from './store'  
Vue.use(uView);
Vue.prototype.$api = $api

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
