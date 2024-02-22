import React, { useState } from "react";
import { faList, faGrip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLoaderData } from "react-router-dom";
import { IApp } from "../../types/apps";
import Filter from "./Filter";
import AppListItem from "./AppListItem";

function Browse() {
  const data = useLoaderData() as IApp[];
  // console.log(data);
  const [apps, setApps] = useState<IApp[]>(data);

  return (
    <div className="container mx-auto">
      <h2 className="heading-large">Browse Steam</h2>
      <div className=" mb-4 mt-9 flex justify-between rounded-[3px] bg-main py-2 pl-3.5 pr-[26px]">
        <div className="flex items-center">
          <span className="mr-[11px] text-dim body-large">View</span>
          <FontAwesomeIcon
            className="mr-2  h-5 w-5 cursor-pointer rounded bg-[#76808C]/5 p-[7px] text-dim hover:bg-hover"
            icon={faList}
          />
          <FontAwesomeIcon
            className=" h-5 w-5 cursor-pointer rounded bg-[#76808C]/5 p-[7px] text-dim hover:bg-hover"
            icon={faGrip}
          />
        </div>
        <div className=""></div>
      </div>
      <div className="grid grid-cols-5 gap-x-2.5">
        <div className="col-span-1">
          <Filter
            onFilter={(tags: string[]) => {
              // if (!tags.length) return;
              console.log(tags);

              const duplicatedApp = [...data];
              const newList = duplicatedApp.filter((app) => {
                if (!app.tags) return false;
                const allAppTag = Object.keys(app.tags);

                return allAppTag.some((item) => tags.includes(item));
                // return !app.tags;
              });
              if (!newList.length && !tags.length) return setApps(data);
              setApps(newList);
            }}
          />
        </div>
        <div className="col-span-4 flex flex-col gap-[11px]">
          {apps.slice(0, 7).map((app) => (
            <AppListItem key={app.name} app={app} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Browse;
