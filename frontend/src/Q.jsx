import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/layout',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <div>This is home page</div>,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/serve',
        element: <Serve />,
      },
      {
        path: '/pro',
        element: <Layout2 />,
        children: [
          {
            path: '/pro/set1',
            element: <div>This is set1</div>,
          },
          {
            path: '/pro/set2',
            element: <div>This is set2</div>,
          },
          {
            path: '/pro/set3',
            element: <div>This is set3</div>,
          },
        ],
      },
    ],
  },
]);

function Q() {
  return <RouterProvider router={router} />;
}

export default Q;
