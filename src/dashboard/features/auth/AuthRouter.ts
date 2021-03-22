import { RouteConfig }from "vue-router";

import AuthLoginPage from "./pages/AuthLoginPage.vue"


const AuthRouter: (prefix?: string) => Array<RouteConfig> = (prefix = "") => [
    {
        name: "AuthLoginPage",
        path: "login",
        component: AuthLoginPage,
    }
];

export default AuthRouter;
