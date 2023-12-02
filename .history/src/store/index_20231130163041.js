import { createStore } from "vuex";

export default createStore({
  state: {
    loginStatus: 0,
    token: "",
  },
  mutations: {
    changeLoginStatus(state, newLoginStatus) {
      state.loginStatus = newLoginStatus;
    },
    updateToken(state, token) {
      state.token = token;
    },
  },
  actions: {},
});
