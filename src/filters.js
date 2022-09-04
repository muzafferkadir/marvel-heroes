import Vue from "vue";

Vue.filter(
  "capitalize",
  (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
);
