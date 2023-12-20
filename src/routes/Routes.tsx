import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../components/layouts/HomeLayout";
import Home from "../pages/Home";
import Settings from "../pages/Settings";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
]);
