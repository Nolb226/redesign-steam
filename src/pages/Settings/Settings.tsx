import React, { useEffect, useState } from "react";
import Search from "../../components/inputs/Search";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { PATHS } from "../../constants/path";
import clsx from "clsx";

const MenuItems = [
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
  {},

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
  {},
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
];

function Settings() {
  const location = useLocation();
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const path = location.pathname;
    const nestedPath = path.split("/")[2];

    setActive(nestedPath);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Settings</title>
      </Helmet>
      <div className=" bg-highlight bg-gradient-to-b from-[#0E141B]/80 to-[#0E141B]/80 pb-[332px] pt-10">
        <div className="container mx-auto">
          <h1 className="heading-large">Settings</h1>
          <div className="mt-8 flex gap-4">
            <div className="flex flex-col gap-[10px] bg-main p-[15px]">
              <Search />
              {MenuItems.map((item, index) => {
                const regex = new RegExp(`^${active || "account"}$`);
                const isActive = regex.test(item.to || "account");
                if (!item.name) return <div className="h-[1px] bg-hover"></div>;

                return (
                  <Link
                    to={item.to}
                    key={item.name}
                    className={clsx(
                      "rounded-[3px] px-[13px] py-2 body-large ",
                      {
                        "bg-hover": isActive,
                        "hover:bg-highlight": !isActive,
                      },
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
            <div className="flex flex-1 flex-col gap-5">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
