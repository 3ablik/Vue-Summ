import { createRouter, createWebHistory } from "vue-router";
import Main from "./views/Main.vue";
import About from "./views/About.vue";
import User from "./views/User.vue";
import Catalog from "./views/Catalog.vue";
import ContactList from "./views/ContactList.vue";
import Sales from "./views/SaleList.vue";

const routes = [
  { path: "/", component: Main },
  { path: "/catalog", component: Catalog },
  { path: "/about", component: About },
  { path: "/contacts", component: ContactList },
  { path: "/sales", component: Sales },
  { path: "/user/:id", component: User, props: true },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
