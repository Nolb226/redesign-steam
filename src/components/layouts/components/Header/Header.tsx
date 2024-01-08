import React from "react";
import Notifications from "../../../Notifications/Notifications";
import FriendList from "../../../FriendList";
import UserMenu from "../../../UserMenu";

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
          <img src="./Steam.svg" alt="logo" className="h-[22px] w-[88px]" />
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
          <UserMenu />
        </div>
      </div>
    </header>
  );
}

export default Header;
