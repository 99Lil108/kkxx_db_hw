import { createStore } from "vuex";

export default createStore({
  state: {
    loginStatus: 0,
    token: "",
    baseUrl: "http://127.0.0.1:9902",
    id: "",
    isLogin: false,
  },
  mutations: {
    changeLoginStatus(state, newLoginStatus) {
      state.loginStatus = newLoginStatus;
    },
    updateToken(state, payload) {
      try {
        if (payload) {
          state.token = payload.token;
          state.id = payload.id;
          state.isLogin = true;
          localStorage.setItem("token", state.token);
        } else localStorage.removeItem("token");
      } catch (error) {}
    },
    loadToken(state, _) {
      try {
        state.token = localStorage.getItem("token");
      } catch (error) {
        console.log(error);
      }
    },
    loadUserInfo(state, userInfo) {
      state.isLogin = true;
      state.loginStatus = userInfo.status;
      state.id = userInfo.id;
    },
  },
  actions: {},
});
