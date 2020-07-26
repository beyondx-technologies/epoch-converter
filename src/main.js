import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/tailwind.css'
import store from "./store";
import VueClipboard from 'vue-clipboard2'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';
 
Vue.use(VueToast);
VueClipboard.config.autoSetContainer = true // add this line
Vue.use(VueClipboard,{})

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
