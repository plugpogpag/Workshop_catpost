import { RouteConfig }from "vue-router";

import OverViewPage from "./pages/OverViewPage.vue"


const OverViewRouter: (prefix?: string) => Array<RouteConfig> = (prefix = "Overview") => [
    {
        name: "OverViewPage",
        path: prefix,
        component: OverViewPage,
    }
];

export default OverViewRouter;
