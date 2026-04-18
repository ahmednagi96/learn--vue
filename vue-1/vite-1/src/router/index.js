import ContactView from "@/views/ContactView.vue";
import CounterView from "@/views/CounterView.vue";
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
  },
  {
    path:"/counter",
    name:"counter",
    component:CounterView
  }
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
