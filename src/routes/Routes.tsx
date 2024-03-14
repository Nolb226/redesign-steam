import { createBrowserRouter, defer } from "react-router-dom";
import HomeLayout from "../components/layouts/HomeLayout";
import Home from "../pages/Home";
import Settings from "../pages/Settings";
import { PARAMS, PATHS } from "../constants/path";
import AccountSettings from "../pages/Settings/components/AccountSettings";
import PrivacySettings from "../pages/Settings/components/PrivacySettings";
import ProfileSetting from "../pages/Profile/Settings";
import AppDetail from "../pages/App/Details";
import { AppService } from "../services/app";
import Browse from "../pages/Browse";
import StoreLayout from "../components/layouts/StoreLayout";
import { BrowseLoader } from "../pages/Browse/loader";
import Cart from "../pages/Cart";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <StoreLayout />,
        children: [
          { path: "/", element: <Home /> },
          {
            path: "browse",
            element: <Browse />,

            loader: BrowseLoader,
          },
          {
            path: `/apps/${PARAMS.APP}`,
            element: <AppDetail />,
            loader: async ({ params }) => {
              const { data } = await AppService.getAppById(params.appId!);

              return data;
            },
          },
          {
            path: PATHS.STORE.CART.IDENTITY,
            element: <Cart />,
          },
        ],
      },
      {
        path: PATHS.SETTINGS.IDENTITY,
        element: (
          <Settings
            MenuItems={[
              {
                to: PATHS.SETTINGS.ACCOUNT,
                name: "Account",
              },
              {
                to: "Friends & Chat",
                name: "Friends & Chat",
              },
              {
                to: "Family",
                name: "Family",
              },
              {
                to: "Security",
                name: "Security",
              },
              {
                to: PATHS.SETTINGS.PRIVACY,
                name: "Privacy",
              },
              {
                to: "Wallet & Purchases",
                name: "Wallet & Purchases",
              },
              {
                to: "Store Preferences",
                name: "Store Preferences",
              },
              {
                to: "Language",
                name: "Language",
              },
              undefined,

              {
                to: "Language",
                name: "Notifications",
              },
              {
                to: "Language",
                name: "Interface",
              },
              {
                to: "Language",
                name: "Library",
              },
              {
                to: "Language",
                name: "Downloads",
              },
              {
                to: "Language",
                name: "Storage",
              },
              {
                to: "Language",
                name: "Cloud",
              },
              {
                to: "Language",
                name: "In Game",
              },
              {
                to: "Language",
                name: "Browsing Data",
              },
              undefined,
              {
                to: "Language",
                name: "Controller",
              },
              {
                to: "Language",
                name: "Voice",
              },
              {
                to: "Language",
                name: "Remote Play",
              },
              {
                to: "Language",
                name: "Broadcast",
              },
              {
                to: "Language",
                name: "Music",
              },
            ]}
          />
        ),
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
      {
        path: "/",
        element: (
          <Settings
            MenuItems={[
              {
                name: "About",
                to: "",
              },
              {
                name: "Avatar",
                to: "#",
              },
              {
                name: "Profile Background",
                to: "#",
              },
              {
                name: "Mini Profile",
                to: "#",
              },
              {
                name: "Theme",
                to: "#",
              },
              {
                name: "Special Profile",
                to: "#",
              },
              {
                name: "Featured Badge",
                to: "#",
              },
              {
                name: "Featured Showcase",
                to: "#",
              },
              undefined,
              {
                name: "Privacy Settings",
                to: `/settings/${PATHS.SETTINGS.PRIVACY}`,
              },
              {
                name: "Points Shop",
                to: "#",
              },
            ]}
          />
        ),
        children: [
          {
            path: PATHS.SETTINGS.PROFILES,
            element: <ProfileSetting />,
          },
        ],
      },
    ],
  },
]);
