import { createStore } from "vuex";

export default createStore({
  state: {
    login_status: 0,
  },
  mutations: {
    setIsMain(state, newIsMain) {
      state.ismain = newIsMain;
    },
  },
  actions: {},
});
