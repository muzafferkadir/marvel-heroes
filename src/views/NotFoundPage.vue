<template>
  <div class="my-auto">
    <section class="error-container">
      <span>4</span>
      <span>0</span>
      <span>4</span>
    </section>
    <div class="link-container">
      <h3>Content Not Found</h3>
      <vs-button href="/" icon :color="$defaultColor" class="mx-auto">
        <ph-house-simple :size="32" />
        <span>Go to Homepage</span>
      </vs-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  created() {
    this.$store.commit("SET_LOADING", false);
  },
};
</script>

<style>
.error-container {
  text-align: center;
  font-size: 180px;
  font-family: "Catamaran", sans-serif;
  font-weight: 800;
  margin: 20px 15px;
}
.link-container {
  text-align: center;
}
</style>
