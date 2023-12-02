import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import "./assets/base.css";

// router.beforeEach((to, from, next) => {
// 	// console.log(to.fullPath);
// 	const main = /main/,
// 		home = /home/;

// 	if (main.test(to.fullPath)) {
// 		store.commit("setIsMain", true);
// 	}
// 	if (home.test(to.fullPath)) {
// 		store.commit("setIsMain", false);
// 	}
// 	next();
// });

createApp(App).use(router).use(store).mount("#app");
