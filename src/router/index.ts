import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Main",
    component: () => import("@/views/MainPage.vue"),
  },
  {
    path: "/scan-page",
    name: "Scan",
    component: () => import("@/views/ScanPage.vue"),
  },
  {
    path: "/products/:id",
    name: "Products",
    component: () => import("@/views/products/ProductsPage.vue"),
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('@/views/CartPage.vue')
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('@/views/OrderPage.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
