import React, { useEffect, useState } from "react";
import Search from "../../components/inputs/Search";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import clsx from "clsx";
import { SettingsProps } from "./Settings.type";

function Settings({ MenuItems = [] }: SettingsProps) {
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
                if (!item) return <div className="h-[1px] bg-hover"></div>;
                const regex = new RegExp(`^${active || "account"}$`);
                const isActive = regex.test(item!.to || "account");

                return (
                  <Link
                    to={item!.to}
                    key={item!.name}
                    className={clsx(
                      "rounded-[3px] px-[13px] py-2 body-large ",
                      {
                        "bg-hover": isActive,
                        "hover:bg-highlight": !isActive,
                      },
                    )}
                  >
                    {item!.name}
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
