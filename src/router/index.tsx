import { createBrowserRouter } from "react-router-dom";

//Layouts
import MainLayouts from "~/layouts/MainLayouts";

//Pages
import ErrorPage from "~/pages/error-page/ErrorPage";
import HomePage from "~/pages/home-page/HomePage";
import PageNotFound from "~/pages/not-found-page/PageNotFound";
import SearchPage from "~/pages/search-page/SearchPage";

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
            path: "search",
            element: <SearchPage />,
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
