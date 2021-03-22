import { RouteConfig }from "vue-router";

import AdminPage from "./pages/AdminPage.vue"


const AdminRouter: (prefix?: string) => Array<RouteConfig> = (prefix = "Admin") => [
    {
        name: "AdminPage",
        path: prefix,
        component: AdminPage,
    }
];

export default AdminRouter;
