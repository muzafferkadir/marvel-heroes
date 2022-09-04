import Vue from "vue";
import Vuesax from "vuesax";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import APIRequests from "./services/requests";
import "./filters";

import "vuesax/dist/vuesax.css"; //Vuesax styles
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

Vue.config.productionTip = false;

Vue.use(Vuesax, {});

Vue.prototype.$API = APIRequests;
Vue.prototype.$defaultColor = "#e62429";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
