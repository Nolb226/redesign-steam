import { RouterProvider, useRoutes } from "react-router-dom";
import { routes } from "./Routes";

export default function AllRoutes() {
  return <RouterProvider router={routes} />;
}
