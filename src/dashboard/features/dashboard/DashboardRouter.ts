import { RouteConfig }from "vue-router";

import DashboardPage from "./pages/DashboardPage.vue"


const DashboardRouter: (prefix?: string) => Array<RouteConfig> = (prefix = "Dashboard") => [
    {
        name: "DashboardPage",
        path: prefix,
        component: DashboardPage,
    }
];

export default DashboardRouter;
