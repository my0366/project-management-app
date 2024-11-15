import {createBrowserRouter} from "react-router-dom";
import {createElement} from "react";
import {SignInPage} from "../pages/sign-in/SignInPage.tsx";
import {AppLayout} from "../widgets/AppLayout.tsx";
import {DashboardPage} from "../pages/dashboard/DashboardPage.tsx";
import {SignUpPage} from "../pages/sign-up/SignUpPage.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: createElement(AppLayout),
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