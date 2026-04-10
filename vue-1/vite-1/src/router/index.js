import { createRouter, createWebHistory } from "vue-router";


const routes = [
  {
    path: "/about",
    name: "about",
    component: import("@/views/AboutView.vue") ,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
