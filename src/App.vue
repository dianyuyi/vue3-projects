<template>
  <Navbar />
  <div class="w-full flex flex-wrap">
    <router-view> </router-view>
  </div>
  <teleport to="body">
    <LoginModal />
    <Loading />
  </teleport>
</template>

<script>
import Navbar from "./components/Navbar";
import LoginModal from "./components/LoginModal";
import Loading from "./components/Loading";
import firebase from "./utilities/firebase";

export default {
  components: {
    Navbar,
    LoginModal,
    Loading,
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.commit("setIsLoggedIn", true);
        this.$store.commit("setLoginModal", false);
        this.$store.commit("setAuthUser", user);
      } else {
        this.$store.commit("setIsLoggedIn", false);
        this.$store.commit("setAuthUser", {});
      }
    });
  },
};
</script>
