import { ChevronDownIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import React, { ForwardedRef, useState } from "react";
import Friend from "./components/Friend";
import useOutsideClick from "../../hooks/useOutsideClick";

const friends = [
  {
    avatar: "/avatar/KwengAvatar.jpg",
    isOnline: true,
    status: "away",
    name: "yunjin-",
  },
  {
    avatar: "/avatar/PolsAvatar.jpg",
    isOnline: true,
    status: "away",
    name: "Pols",
  },
];

function FriendList() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOpen(() => !isOpen);
  };

  const ref = useOutsideClick(() => setIsOpen(false));

  return (
    <div className="relative" ref={ref as ForwardedRef<HTMLDivElement>}>
      <div
        onClick={handleToggle}
        className="flex w-[45px] items-center justify-center rounded bg-highlight py-[6px] text-dim hover:cursor-pointer"
      >
        <UsersIcon className="h-5 w-5" />
      </div>
      {isOpen && (
        <div className="absolute mt-[8px] w-[338px] rounded-[5px] bg-highlight bg-gradient-to-b from-secondary-color to-[#1E2329] p-4 shadow-[0_0_4px_1px_rgba(0,0,0,0.25)]">
          <div className="flex items-start gap-[8px]">
            <div className="bg-[#76808C] p-[2px]">
              <img
                src="./avatar1.jpg"
                alt=""
                className="h-[46px] w-[46px] object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col">
              <p className="heading-small">Khánh Hoàng</p>
              <div className="flex  items-center gap-1">
                <div className="h-[11px] w-[11px] rounded-full bg-primary"></div>
                <span className="text-primary body-medium">Online</span>
                <ChevronDownIcon className="h-3 w-3" />
              </div>
            </div>
            <div className="">
              <div className="bg-[#76808C]/5">
                <PlusCircleIcon className="h-5 w-5" />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="flex gap-[7px]">
              <div className="flex-1  rounded-t-md bg-hover py-[10px] text-center">
                <p className="body-large">Friends</p>
              </div>
              <div className="flex-1  rounded-t-md bg-main py-[10px] text-center">
                <p className="text-dim body-large">Activity</p>
              </div>
            </div>
            <div className="bg-hover p-4">
              <div className="">
                <p className="text-dim body-medium">Online({friends.length})</p>
                <div className="mt-5 min-h-[120px]">
                  <ul className="flex flex-col gap-5">
                    {friends.map((friend) => (
                      <li>
                        <Friend {...friend} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-[30px]">
                <p className="text-dim body-medium">Offline(0)</p>
                <div className="mt-5 min-h-[120px]"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FriendList;
