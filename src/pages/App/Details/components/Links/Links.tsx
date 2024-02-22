import React from "react";
import { LinksProps } from "./Links.type";
import {
  CodeBracketIcon,
  FlagIcon,
  ShareIcon,
  TagIcon,
} from "@heroicons/react/24/solid";

const LinkItem = () => {
  return (
    <div className=" rounded-[3px] bg-highlight/[39] px-[13px] py-2 body-small hover:cursor-pointer hover:bg-hover">
      Workshop
    </div>
  );
};

function Links({}: LinksProps) {
  return (
    <div className="rounded-[5px] bg-main p-[25px]">
      <p className="text-dim body-large">Links</p>
      <div className="mt-3 flex flex-col gap-[7px]">
        <div className=" rounded-[3px] bg-highlight/[39] px-[13px] py-2 body-small hover:cursor-pointer hover:bg-hover">
          Workshop
        </div>
        <div className=" rounded-[3px] bg-highlight/[39] px-[13px] py-2 body-small hover:cursor-pointer hover:bg-hover">
          Discussion
        </div>
        <div className=" rounded-[3px] bg-highlight/[39] px-[13px] py-2 body-small hover:cursor-pointer hover:bg-hover">
          News
        </div>
        <div className=" rounded-[3px] bg-highlight/[39] px-[13px] py-2 body-small hover:cursor-pointer hover:bg-hover">
          Updates
        </div>
        <div className=" rounded-[3px] bg-highlight/[39] px-[13px] py-2 body-small hover:cursor-pointer hover:bg-hover">
          Community Groups
        </div>
        <div className=" rounded-[3px] bg-highlight/[39] px-[13px] py-2 body-small hover:cursor-pointer hover:bg-hover">
          Market Place
        </div>
        <div className="grid grid-cols-3 gap-x-[7px]">
          <div className="flex items-center gap-2 rounded-[3px] bg-highlight/[39] px-[13px] py-2 body-small hover:cursor-pointer hover:bg-hover">
            <ShareIcon className="h-4 w-4" />
            <span>Share</span>
          </div>
          <div className="flex items-center gap-2 rounded-[3px] bg-highlight/[39] px-[13px] py-2 body-small hover:cursor-pointer hover:bg-hover">
            <CodeBracketIcon className="h-4 w-4" />
            <span>Embed</span>
          </div>
          <div className="flex items-center gap-2 rounded-[3px] bg-highlight/[39] px-[13px] py-2 body-small hover:cursor-pointer hover:bg-hover">
            <FlagIcon className="h-4 w-4" />
            <span>Report</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Links;
