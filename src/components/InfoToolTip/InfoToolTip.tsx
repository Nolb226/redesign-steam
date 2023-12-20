import { InformationCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import { InfoToolTipProps } from "./InfoToolTip.type";

function InfoToolTip({ info }: InfoToolTipProps) {
  return (
    <div className="group/tooltip relative w-fit">
      <div className="absolute bottom-0 left-[10px] mb-10 hidden  min-w-fit translate-x-[-50%]  group-hover/tooltip:block ">
        <div className="z-10 rounded-[3px] bg-highlight px-4 py-2 shadow-[0_0_4px_1px_rgba(0,0,0,0.25)] body-small">
          <p className="whitespace-nowrap ">{info}</p>
        </div>
        <div className="absolute left-[50%] right-[50%]  h-3 w-3 translate-x-[-50%] translate-y-[-50%] rotate-[45deg] bg-highlight"></div>
      </div>
      <InformationCircleIcon className="h-5 w-5 stroke-[2.5] text-dim" />
    </div>
  );
}

export default InfoToolTip;
