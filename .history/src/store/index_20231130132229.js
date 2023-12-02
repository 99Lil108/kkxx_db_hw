import { createStore } from "vuex";

export default createStore({
  state: {
    loginStatus: 0,
  },
  mutations: {
    changeLoginStatus(state, newLoginStatus) {
      state.loginStatus = newLoginStatus;
    },
  },
  actions: {},
});
