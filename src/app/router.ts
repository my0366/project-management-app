import {createBrowserRouter} from "react-router-dom";
import {createElement} from "react";
import {SignInPage} from "../pages/sign-in/sign-in.page.tsx";
import {SignUpPage} from "../pages/sign-up/sign-up.page.tsx";
import {DashboardPage} from "../pages/dashboard/dashboard.page.tsx";
import {Layout} from "../widgets/layout.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: createElement(Layout),
        children: [
            {
                path: "auth",
                children: [
                    {
                        path: "sign-in",
                        element: createElement(SignInPage),
                    },
                    {
                        path: "sign-up",
                        element: createElement(SignUpPage),
                    },
                ],
            },
            {
                path: "core",
                children: [
                    {
                        path: "dashboard",
                        element: createElement(DashboardPage),
                    },
                ],
            },
        ],
    },
]);