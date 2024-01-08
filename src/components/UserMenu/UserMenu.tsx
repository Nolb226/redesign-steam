import React, { ForwardedRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import useOutsideClick from "../../hooks/useOutsideClick";
import { Link } from "react-router-dom";

const MenuItems = [
  {
    name: "Accounts Detail",
    to: "",
  },
  {
    name: "Wallet",
    to: "",
  },
  {
    name: "Settings",
    to: "/settings",
  },
  {
    name: "Client Updates",
    to: "",
  },
  {
    name: "Go Offline",
    to: "",
  },
  {
    name: "Change Account",
    to: "",
  },
  {
    name: "Sign Out",
    to: "",
  },
  {
    name: "Exit",
    to: "",
  },
];

function UserMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useOutsideClick(() => setIsOpen(false));

  const handleOpenMenu = () => {
    setIsOpen(() => !isOpen);
  };

  return (
    <div className="relative">
      <div
        onClick={handleOpenMenu}
        ref={ref as ForwardedRef<HTMLDivElement>}
        className="flex items-center gap-2 rounded bg-highlight p-2 py-[6px] text-dim hover:cursor-pointer"
      >
        <img src="./avatar1.jpg" alt="" className="h-5 w-5 object-cover" />
        <div className="">
          <p className="text-sm text-main">Khánh Hoàng</p>
        </div>
        <div className="">
          <p className="text-sm">$100.2</p>
        </div>
        <div className="">
          <ChevronDownIcon className="h-4 w-4" />
        </div>
      </div>
      {isOpen && (
        <div className="absolute left-0 right-0 z-50 mt-[15px]  bg-highlight shadow-[0_0_4px_1px_rgba(0,0,0,0.25)]">
          <ul className="flex flex-col">
            {MenuItems.map((item, i) => (
              <li key={item.name} className="">
                <Link
                  className="block px-5 py-4 body-medium hover:cursor-pointer hover:bg-hover "
                  to={item.to}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default UserMenu;
