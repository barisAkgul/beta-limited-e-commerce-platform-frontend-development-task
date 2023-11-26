import { createBrowserRouter } from "react-router-dom";

import MainLayouts from "~/layouts/MainLayouts";

import ErrorPage from "~/pages/error-page/ErrorPage";
import HomePage from "~/pages/home-page/HomePage";
import PageNotFound from "~/pages/not-found-page/PageNotFound";

export const router = createBrowserRouter([
  {
    element: <MainLayouts />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
          {
            path: "*",
            element: <PageNotFound />,
          },
        ],
      },
    ],
  },
]);
