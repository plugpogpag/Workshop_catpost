import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import AppShell from "../common/components/AppShell.vue"
import DashboardRoutes from "../dashboard/DashboardRouter";
import NotFoundPage from "../common/components/NotFoundPage.vue"
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
 {
   path: "",
   redirect: "/dashboard/Overview",
   component: AppShell,
   children: [...DashboardRoutes()],
 },
 {
   path:"*",
   component: NotFoundPage,
 }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
