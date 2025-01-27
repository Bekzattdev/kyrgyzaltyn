import Layout from "../components/layout/Layout";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ui/error/ErrorPage";
import HomePage from "../components/pages/HomePage";
import AboutPage from "../components/pages/RoutePages/About/AboutPage";

export const router: ReturnType<typeof createBrowserRouter> =
  createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
      ],
    },
    // { path: "*", element: <ErrorPage /> },
  ]);
