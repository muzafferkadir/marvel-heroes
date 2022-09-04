<template>
  <div class="min-vh-100 d-flex flex-column">
    <TheNavbar />
    <div class="default-layout flex-grow-1" ref="content">
      <TheLoader />
      <router-view />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from "../components/TheNavbar.vue";
import TheFooter from "../components/TheFooter.vue";
import TheLoader from "../components/TheLoader.vue";

export default {
  components: {
    TheNavbar,
    TheFooter,
    TheLoader,
  },
};
</script>

<style>
.default-layout {
  margin-top: 15px;
}
body {
  background-color: aliceblue;
}
</style>
