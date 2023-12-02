import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/patient",

    component: () => import("../views/patient/Patient.vue"),
    children: [
      {
        path: "",
        name: "patient",
        redirect: { name: "time" },
      },
      {
        path: "time",
        name: "time",
        component: () => import("../views/subviews/Timer.vue"),
      },
      {
        path: "regis",
        name: "registration",
        component: () => import("../views/subviews/Registration.vue"),
      },
    ],
  },
  {
    path: "/doctor",
    name: "doctor",
    component: () => import("../views/doctor/Doctor.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/admin/Admin.vue"),
  },
];
// 	{
// 		path: "/main",
// 		name: "main",
// 		component: () => import("..iews/Main.vue"),
// 		children: [
// 			{
// 				path: "",
// 				// name: "time",
// 				component: () => import("..iews/main_child/Echarts.vue"),
// 			},
// 			{
// 				path: "time",
// 				// name: "time",
// 				component: () => import("..iews/Time.vue"),
// 			},
// 			{
// 				path: "patient",
// 				// name: "patient",
// 				component: () => import("..iews/Patient.vue"),
// 			},
// 			{
// 				path: "doctor2",
// 				// name: "doctor",
// 				component: () => import("..iews/Doctor2.vue"),
// 			},
// 			{
// 				path: "register",
// 				// name: "register",
// 				component: () => import("..iews/Register.vue"),
// 			},
// 		],
// 	},
// 	// {
// 	// 	path: "/time",
// 	// 	name: "time",
// 	// 	// component: Main,
// 	// 	component: () => import("..iews/Time.vue"),
// 	// },
// 	// {
// 	// 	path: "/patient",
// 	// 	name: "patient",
// 	// 	component: () => import("..iews/Try.vue"),
// 	// 	// component: Test,
// 	// },
// 	{
// 		path: "license",
// 		name: "license",
// 		component: () => import("..iews/License.vue"),
// 	},
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
