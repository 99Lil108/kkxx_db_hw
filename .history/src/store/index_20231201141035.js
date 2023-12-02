import { createStore } from "vuex";

export default createStore({
  state: {
    loginStatus: 0,
    token: "",
    baseUrl: "http://127.0.0.1:9902",
    id: "",
  },
  mutations: {
    changeLoginStatus(state, newLoginStatus) {
      state.loginStatus = newLoginStatus;
    },
    updateToken(state, { token, id }) {
      state.token = token;
      state.id = id;
      if (token) localStorage.setItem("token", token);
      else localStorage.removeItem("token");
    },
    loadToken(state, _) {
      try {
        token = localStorage.getItem("token");
        if (token) state.token = token;
      } catch (error) {}
    },
    loadUserInfo(state, userInfo) {
      state.loginStatus = userInfo.status;
      state.id = userInfo.id;
    },
  },
  actions: {},
});