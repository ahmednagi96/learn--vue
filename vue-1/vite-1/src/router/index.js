import ContactView from "@/views/ContactView.vue";
import { createRouter, createWebHistory } from "vue-router";


const routes = [
  {
    path: "/about",
    name: "about",
    component: import("@/views/AboutView.vue") ,
  },
  {
    path:"/contact",
    name:"contact",
    component:ContactView
  }
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
