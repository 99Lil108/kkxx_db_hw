import { createStore } from "vuex";

export default createStore({
  state: {
    loginStatus: 0,
    token: "",
    baseUrl: "http://127.0.0.1:9902",
  },
  mutations: {
    changeLoginStatus(state, newLoginStatus) {
      state.loginStatus = newLoginStatus;
    },
    updateToken(state, token) {
      state.token = token;
      localStorage.setItem("token", token);
    },
  },
  actions: {},
});
