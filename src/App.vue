<template>
  <Navbar />
  <div class="w-full flex">
    <router-view> </router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  components: {
    Navbar,
  },
};
</script>
