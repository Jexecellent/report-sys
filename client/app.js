import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";
// import * as filters from "./filters";
import { sync } from "vuex-router-sync";

import axios from "./utils/axiosConfig";
import NProgress from "vue-nprogress";
import VeeValidate from "./utils/veeValidateConfig";
import storageHelper from "./utils/storageHelper";
import toastConfig from "./utils/toastConfig";

import ElementUI from "element-ui";
import "element-ui/lib/theme-default/index.css";

import { authMobile } from "./constants/app";
import { TOGGLE_SIDEBAR, USER_LOGIN } from "vuex-store/mutation-types";

Vue.router = router;

Vue.prototype.axios = axios;

Vue.use(NProgress);

toastConfig(Vue);

Vue.use(require("vue-moment"));

Vue.use(VeeValidate, {
  locale: "zh_CN"
});

// Enable devtools
Vue.config.devtools = true;

sync(store, router);

const nprogress = new NProgress({ parent: ".nprogress-container" });

const { state } = store;

// router.beforeEach((to, from, next) => {
//   if (state.app.device.isMobile && state.app.sidebar.opened) {
//     store.commit(TOGGLE_SIDEBAR, false);
//   }
//   if (!storageHelper.getItem(authMobile) && to.path !== "/login") {
//     next({ path: "/login" });
//   } else {
//     next();
//   }
// });

// Object.keys(filters).forEach(key => {
//   Vue.filter(key, filters[key]);
// });

Vue.use(ElementUI);

const app = new Vue({
  router,
  store,
  axios,
  nprogress,
  ...App
});

export { app, router, store };
