<template>
  <nav class="navbar navbar-light bg-light justify-content-between">
    <div class="container">
      <router-link to="/" class="navbar-brand">
        <img src="../assets/marvel.png" alt="" height="60px" loading="lazy"
      /></router-link>
      <div class="d-flex">
        <vs-input
          v-model="searchInput"
          v-on:keyup.enter="search()"
          placeholder="Enter a character name"
        />
        <vs-button @click="search()" icon :color="$defaultColor">
          <ph-magnifying-glass :size="30" />
        </vs-button>
      </div>
    </div>
  </nav>
</template>

<script>
import { PhMagnifyingGlass } from "phosphor-vue";
export default {
  components: {
    PhMagnifyingGlass,
  },

  data() {
    return {
      searchInput: "",
    };
  },

  methods: {
    search() {
      this.$store.dispatch("searchCharacter", { name: this.searchInput });
    },
  },
};
</script>

<style lang="scss">
.navbar.bg-light {
  background: #e62429 !important;
}

.vs-input {
  background-color: white !important;
  color: black !important;
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

  .navbar .vs-input {
    width: 100%;
  }

  .vs-tooltip-content .vs-button__content {
    padding: 4px 6px;
  }

  .vs-tooltip-content .vs-button__content span {
    font-size: 12px;
  }

  .vs-input-parent {
    width: 100%;
  }
}
</style>
