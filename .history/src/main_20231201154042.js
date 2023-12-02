import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import "./assets/base.css";

router.beforeEach((to, from, next) => {
  if (store.state.isLogin) next();
  else next("/login");
});

createApp(App).use(router).use(store).mount("#app");
