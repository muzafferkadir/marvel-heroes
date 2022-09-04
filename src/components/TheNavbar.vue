<template>
  <nav class="navbar navbar-light bg-light justify-content-between">
    <div class="container">
      <router-link to="/" class="navbar-brand">
        <img src="../assets/marvel.png" alt="" height="60px" loading="lazy"
      /></router-link>
      <div class="d-flex"></div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss">
.navbar.bg-light {
  background: #e62429 !important;
}

@media screen and (max-width: 900px) {
  .navbar {
    padding-bottom: 16px;
  }

  .navbar .container > * {
    display: block;
    width: 100%;
  }

  .navbar-brand {
    text-align: center;
    margin-bottom: 8px;
  }
}
</style>
