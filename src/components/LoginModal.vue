<template>
  <div v-if="isLoginOpen" class="login-modal-container">
    <section @click="closeModal" class="overlay"></section>
    <div class="panel">
      <div class="wrapper">
        <div class="white-board">
          <div class="p-2 border">
            <h1>Login</h1>

            <GoogleLogin @close-login-from-google="closeModal" />

            <!-- <p v-if="isLoginNotice" class="text-red-700">
              Input should't be valid.
            </p> -->
            <form class="p-2 my-2" @submit.prevent="submitLogin">
              <div class="my-4">
                <label>Email or Username</label>
                <input
                  require
                  ref="emailRef"
                  v-model="userEmail"
                  placeholder="Enter your email or username"
                />
              </div>
              <div class="my-4">
                <label>Password</label>
                <input
                  require
                  v-model="userPassword"
                  placeholder="Enter your password"
                  type="password"
                />
              </div>
              <div>
                <button type="submit">
                  <span v-if="!isWebLoading">Login</span>
                  <span v-else>
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
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../components/styles/loginModal.scss";
import "../components/styles/spinner.scss";
import GoogleLogin from "../components/Login/GoogleLogin";
import firebase from "../utilities/firebase";
export default {
  components: { GoogleLogin },
  data() {
    return {
      userEmail: "user@test.com",
      userPassword: "123456",
    };
  },
  computed: {
    isLoginOpen() {
      return this.$store.state.isLoginOpen;
    },
    isLoginNotice() {
      return this.$store.state.isLoginNotice;
    },
    isWebLoading() {
      return this.$store.state.isWebLoading;
    },
  },
  methods: {
    submitLogin() {
      if (this.userEmail == "" || this.userPassword == "") {
        // this.$store.commit("setLoginNotice", true);
      } else {
        // this.$store.commit("setLoginNotice", false);
        this.$store.commit("setWebLoading", false);
        firebase
          .auth()
          .signInWithEmailAndPassword(this.userEmail, this.userPassword)
          .then(() => {
            this.userEmail = "";
            this.userPassword = "";
            this.closeModal();
            this.$store.commit("setWebLoading", false);
          })
          .catch((error) => {
            alert(error.message);
            this.$store.commit("setWebLoading", false);
          });
      }
    },
    closeModal() {
      this.$store.commit("setLoginModal", false);
    },
  },
};
</script>
