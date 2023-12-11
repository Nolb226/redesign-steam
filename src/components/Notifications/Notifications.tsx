import { BellIcon, UsersIcon } from "@heroicons/react/24/solid";
import React, { ForwardedRef, useState } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";

function Notifications() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOnClick = () => {
    setIsOpen(() => !isOpen);
  };

  const ref = useOutsideClick(() => setIsOpen(false));

  return (
    <>
      <div className="relative">
        <div
          onClick={handleOnClick}
          className="flex w-[45px] items-center justify-center rounded bg-highlight py-[6px] text-dim hover:cursor-pointer"
        >
          <BellIcon className="h-5 w-5" />
        </div>
        {isOpen && (
          <div
            ref={ref as ForwardedRef<HTMLDivElement>}
            className="absolute mt-[15px] w-[338px] rounded-[5px] bg-highlight  p-5 shadow-[0_0_4px_1px_rgba(0,0,0,0.25)]"
          >
            <div className="flex items-center justify-between">
              <p className="heading-small">Notifications</p>
              <div className="flex items-center gap-[6.5px]">
                <div className="flex h-[27px] w-[27px] items-center justify-center bg-[#76808C]/5">
                  <img src="mark-email-read.png" alt="" className="" />
                </div>
                <div className="flex  h-[27px] w-[27px] items-center justify-center bg-[#76808C]/5">
                  <img
                    src="Settings.svg"
                    alt=""
                    className="h-[15px] w-[15px]"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4 bg-main/50 p-[10px]">
              <div className="flex text-dim">
                <div className="flex flex-1 gap-1">
                  <UsersIcon className="h-4 w-4" />
                  <span className="body-small">Community</span>
                </div>
                <div className="h-[11px] w-[11px] rounded-full bg-primary"></div>
              </div>
              <div className="mt-[8px]">
                <p>
                  <span className="text-primary">Your Friend</span> left a
                  comment on your profile
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="absolute right-0 top-0 flex h-4 w-4 translate-x-[50%] translate-y-[-50%] items-center justify-center rounded-full bg-primary ">
          <span className="text-black/60 body-small">1</span>
        </div>
      </div>
    </>
  );
}

export default Notifications;
