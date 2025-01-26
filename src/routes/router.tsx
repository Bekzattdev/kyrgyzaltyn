import Layout from "../components/layout/Layout";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ui/error/ErrorPage";

export const router: ReturnType<typeof createBrowserRouter> =
  createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "about",
          element:""
        },
      ],
    },

    { path: "*", element: <ErrorPage /> },
  ]);