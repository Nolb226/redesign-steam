import React from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Notifications from "../../../Notifications/Notifications";
import FriendList from "../../../FriendList";

const navigate = [
  {
    to: "",
    text: "Store",
  },
  {
    to: "",
    text: "Community",
  },
  {
    to: "",
    text: "Library",
  },
  {
    to: "",
    text: "Download",
  },
];

function Header() {
  return (
    <header className="flex flex-col gap-4 bg-main p-4 lg:flex-row lg:items-center lg:gap-0 ">
      <div className="flex items-center">
        <div className="">
          <img src="./Steam.svg" className="h-[22px] w-[88px]" />
        </div>
        <div className="ml-[66px]">
          <ul className="flex items-center gap-[66px]">
            {navigate.map((n, i) => (
              <li key={i} className="hover:cursor-pointer hover:text-primary">
                <p className="uppercase heading-small">{n.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex lg:ml-[160px] lg:mr-auto">
        <div className="flex gap-[6px]">
          <FriendList />
          <Notifications />
          <div className="flex items-center gap-2  rounded bg-highlight p-2 py-[6px] text-dim">
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
        </div>
      </div>
    </header>
  );
}

export default Header;
