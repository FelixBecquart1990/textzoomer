// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

var VueTouch = require("vue-touch");
Vue.use(VueTouch, { name: "v-touch" });

Vue.use(Vuetify, {
  theme: {
    primary: "#082129",
    secondary: "#424242",
    accent: "#82B1FF",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107"
  }
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>",
  created() {
    // banner
    let self = this;
    window.addEventListener("beforeinstallprompt", function(event) {
      event.preventDefault();
      return false;
    });
  }
});
