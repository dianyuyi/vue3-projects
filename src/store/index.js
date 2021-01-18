import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      isLoggedIn: false,
      isLoginNotice: false,
      authUser: {},
      isLoginOpen: false,
      isWebLoading: false,
    };
  },
  mutations: {
    setLoginNotice(state, payload) {
      state.isLoginNotice = payload;
    },
    setIsLoggedIn(state, payload) {
      state.isLoggedIn = payload;
    },
    setAuthUser(state, payload) {
      state.authUser = payload;
    },
    setLoginModal(state, payload) {
      state.isLoginOpen = payload;
    },
    setWebLoading(state, payload) {
      state.isWebLoading = payload;
    },
  },
});

export default store;
