<template>
  <div>
    <TheNavbar />
    <div class="defaul-layout">
      <router-view />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from "../components/TheNavbar.vue";
import TheFooter from "../components/TheFooter.vue";

export default {
  components: {
    TheNavbar,
    TheFooter,
  },
};
</script>

<style></style>
