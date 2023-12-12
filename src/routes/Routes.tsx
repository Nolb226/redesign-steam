import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../components/layouts/HomeLayout";
import Home from "../pages/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [{ path: "/", element: <Home /> }],
  },
]);
