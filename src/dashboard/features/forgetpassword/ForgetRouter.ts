import { RouteConfig } from "vue-router";

import ForgetPage from "./pages/ForgetPage.vue"


const ForgotRouter: (prefix?: string) => Array<RouteConfig> = (prefix = "") => [
    {
        name: "ForgotPage",
        path: "forget",
        component: ForgetPage,
    }
];

export default ForgotRouter;
