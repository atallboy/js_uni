import App from './App'
import '@/utils/request.js'

// #ifndef VUE3
import {VueJsonp} from 'vue-jsonp'
Vue.use(VueJsonp)
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif