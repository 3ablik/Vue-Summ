import { createRouter, createWebHistory } from "vue-router";
import Main from "./views/Main.vue";
import About from "./views/About.vue";
import Product from "./views/Product.vue";
import Catalog from "./views/Catalog.vue";
import ProductsCategory from "./components/catalog/ProductsCategory.vue";
import ContactList from "./views/ContactList.vue";
import Sales from "./views/SaleList.vue";

const routes = [
  { path: "/", component: Main },
  { path: "/catalog", component: Catalog },
  { path: "/catalog/:category", component: ProductsCategory, props: true },
  { path: "/about", component: About },
  { path: "/contacts", component: ContactList },
  { path: "/sales", component: Sales },
  { path: "/product/:id", component: Product, props: true },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
