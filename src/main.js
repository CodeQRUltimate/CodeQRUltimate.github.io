import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import { sync } from "vuex-router-sync";

import "./importBaseComponents";

import dayjs from "dayjs";
import "dayjs/locale/fr";
dayjs.locale("fr");

import "./assets/styles/index.css";

Vue.config.productionTip = false;

sync(store, router);

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
