import React from "react";
import { FriendProps } from "./Friend.type";

// const statuses ={
//     'away':
// }

function Friend({ avatar, name, isOnline, status }: FriendProps) {
  return (
    <div className="flex gap-[8px]">
      <div className="bg-[#76808C] p-[2px]">
        <img
          src={avatar}
          alt={name}
          className="h-[46px] w-[46px] object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <p className="text-primary">{name}</p>
        <div className="flex  items-center gap-1">
          <span className="text-primary body-medium">Counter-Strike 2</span>
        </div>
      </div>
    </div>
  );
}

export default Friend;
