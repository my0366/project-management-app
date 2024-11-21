import { createBrowserRouter } from 'react-router-dom';
import { createElement } from 'react';
import { SignInPageUi } from '../pages/sign-in/sign-in-page.ui.tsx';
import { SignUpPageUi } from '../pages/sign-up/sign-up-page.ui.tsx';
import { DashboardPageUi } from '../pages/dashboard/dashboard-page.ui.tsx';
import { Layout } from '../widgets/layout.tsx';
import { CreateProject } from '../features/project/create-project/create-project.ui.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: createElement(Layout),
    children: [
      {
        path: 'auth',
        children: [
          {
            path: 'sign-in',
            element: createElement(SignInPageUi),
          },
          {
            path: 'sign-up',
            element: createElement(SignUpPageUi),
          },
        ],
      },
      {
        path: 'dashboard',
        element: createElement(DashboardPageUi),
      },
      {
        path: 'project',
        children: [
          {
            path: 'create',
            element: createElement(CreateProject),
          },
        ],
      },
    ],
  },
]);
