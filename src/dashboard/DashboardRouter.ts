import { RouteConfig }  from "vue-router";
import ChildRouterView from "../common/components/ChildRouterView.vue"
import AuthRouter from "./features/auth/AuthRouter"
import AppLayout from "../common/components/AppLayout.vue"
import OverViewRouter from "./features/overview/OverViewRouter";
import ForgetRouter from "./features/forgetpassword/ForgetRouter"
import DashboardRouter from "./features/dashboard/DashboardRouter"
import AdminRouter from "./features/admin/AdminRouter"

const DashboardRoutes: (prefix?: string) => Array<RouteConfig> = (prefix = "dashboard") => [
  {
    // name: "AuthRoutes",
    path: `${prefix}/auth`,
    redirect: "/dashboard/Overview",
    component: ChildRouterView,
    children: [...AuthRouter()],
  },
  {
    // name: "OverViewRouter",
    path: prefix,
    redirect: "/dashboard/Overview",
    component: AppLayout,
    children: [...OverViewRouter()],
  },
  {
    // name: "DashboardRouter",
    path: prefix,
    redirect: "/dashboard/Dashboard",
    component: AppLayout,
    children: [...DashboardRouter()],
  },
  {
    // name: "AdminRouter",
    path: prefix,
    redirect: "/dashboard/Admin",
    component: AppLayout,
    children: [...AdminRouter()],
  },
  {
    // name: "ForgetRouter",
    path: `${prefix}/auth`,
    redirect: "/dashboard/Overview",
    component: ChildRouterView,
    children: [...ForgetRouter()],
  }
];

export default DashboardRoutes;
