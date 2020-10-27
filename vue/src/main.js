import Vue from "vue";
import App from "./App.vue";
import router from './routes'
import store from './store'
const axios = require("axios");
import './scss/main.scss'

Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    this.$store.dispatch('getClients')
    setInterval(() => {
      this.$store.dispatch('getClients')
    }, 60000)
  }
}).$mount("#app");
