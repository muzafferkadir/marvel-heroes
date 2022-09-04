<template>
  <div
    v-if="isLoading"
    class="loading-background position-fixed start-0 top-0 w-100 h-100"
  >
    <div class="position-relative w-100 h-100">
      <div
        class="loading-ring position-absolute start-0 top-0 w-100 h-100 d-flex justify-content-center align-items-center"
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div
        class="loading-ring position-absolute start-0 top-0 w-100 h-100 d-flex justify-content-center align-items-center"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { isLoading: true };
  },

  watch: {
    "$store.state.loading": function (loading) {
      if (!loading) {
        this.isLoading = false;
      } else {
        this.isLoading = true;
      }
    },
  },
};
</script>

<style lang="scss">
.loading-background {
  z-index: 10;
  backdrop-filter: blur(2px);
  background: rgba(255, 255, 255, 0.2);
}

.loading-ring {
  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 5px solid #e62429;
    border-radius: 50%;
    animation: loading-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #e62429 transparent transparent transparent;
  }
  & div:nth-child(1) {
    animation-delay: -0.45s;
  }
  & div:nth-child(2) {
    animation-delay: -0.3s;
  }
  & div:nth-child(2) {
    animation-delay: -0.3s;
  }
  & div:nth-child(3) {
    animation-delay: -0.15s;
  }

  @keyframes loading-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
