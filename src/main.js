import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import './scss/main.scss';
import 'normalize.css';

import "./filter";
Vue.config.productionTip = false;

import VueGlide from 'vue-glide-js'

Vue.use(VueGlide)

new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
