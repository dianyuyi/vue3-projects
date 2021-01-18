<template>
  <nav>
    <router-link to="/"> Vue3 projects </router-link>
    <!-- <router-link v-for="item in list" :key="item.link" :to="item.link">
      {{ item.title }}
    </router-link> -->
    <button v-if="isLoggedIn" @click="logout" class="mx-2">Logout</button>
    <button v-else class="mx-2" @click="openLogin">Login</button>
  </nav>
</template>

<script>
import "./styles/navbarStyle.scss";
import firebase from "../utilities/firebase";
export default {
  data() {
    return {
      list: [
        { title: "Note List", link: "/notelist" },
        { title: "Calendar", link: "/calendar" },
        { title: "Markdown", link: "/markdown" },
        {
          title: "Slider",
          link: "/slider",
        },
      ],
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
  },
  methods: {
    logout() {
      this.$store.commit("setWebLoading", true);
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$store.commit("setWebLoading", false);
        })
        .catch((error) => {
          console.log(error);
          this.$store.commit("setWebLoading", false);
        });
    },
    openLogin() {
      this.$store.commit("setLoginModal", true);
    },
  },
};
</script>

