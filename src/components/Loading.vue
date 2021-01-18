<template>
  <div
    v-if="isWebLoading"
    class="z-30 fixed top-0 w-screen h-screen bg-gray-300 opacity-75"
  >
    <svg class="spinner" viewBox="0 0 50 50">
      <circle
        class="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke-width="5"
      ></circle>
    </svg>
  </div>
</template>

<script>
import "../components/styles/spinner.scss";
export default {
  computed: {
    isWebLoading() {
      return this.$store.state.isWebLoading;
    },
  },
};
</script>
