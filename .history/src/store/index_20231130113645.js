import { createStore } from "vuex";

export default createStore({
  state: {
    ismain: false,
  },
  mutations: {
    setIsMain(state, newIsMain) {
      state.ismain = newIsMain;
    },
  },
  actions: {},
});
