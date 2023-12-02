import { createStore } from "vuex";

export default createStore({
  state: {
    loginStatus: 0,
    token: "",
    baseUrl: "http://127.0.0.1:9902",
    isLogin: false,
    info: {},
  },
  mutations: {
    logout(state, _) {
      state.isLogin = false;
      state.info = {};
      state.token = "";
      localStorage.removeItem("token");
    },
    changeLoginStatus(state, newLoginStatus) {
      state.loginStatus = newLoginStatus;
    },
    updateToken(state, payload) {
      try {
        if (payload) {
          state.token = payload.token;
          state.info = payload.info;
          state.isLogin = true;
          localStorage.setItem("token", state.token);
        }
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
      state.info = userInfo;
    },
  },
  actions: {},
});
