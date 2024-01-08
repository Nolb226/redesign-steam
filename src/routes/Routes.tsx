import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../components/layouts/HomeLayout";
import Home from "../pages/Home";
import Settings from "../pages/Settings";
import { PATHS } from "../constants/path";
import AccountSettings from "../pages/Settings/components/AccountSettings";
import PrivacySettings from "../pages/Settings/components/PrivacySettings";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: PATHS.SETTINGS.IDENTITY,
        element: <Settings />,
        children: [
          {
            path: PATHS.SETTINGS.ACCOUNT,
            element: <AccountSettings />,
          },
          {
            path: PATHS.SETTINGS.PRIVACY,
            element: <PrivacySettings />,
          },
        ],
      },
    ],
  },
]);
