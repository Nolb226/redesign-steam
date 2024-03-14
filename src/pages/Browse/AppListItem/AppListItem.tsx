import React from "react";
import { AppListItemProps } from "./AppListItem.type";
import GenreTags from "../../../components/GenreTags";
import { util } from "../../../utils";
import ReviewsBar from "../../../components/ReviewsBar";
import WishList from "../../../components/buttons/WishList";
import MainCTA from "../../../components/MainCTA";
import { Link } from "react-router-dom";
import clsx from "clsx";

function AppListItem({ app, view = "list" }: AppListItemProps) {
  return (
    <Link
      to={`/apps/${app.id}`}
      target="_blank"
      className={clsx(
        "flex gap-[17px] rounded-[3px] bg-main p-3.5 hover:cursor-pointer hover:bg-hover",
        {
          "flex-col": view === "grid",
        },
      )}
    >
      <img
        src={app.header_image}
        className={clsx({ "max-w-[292px]": view === "list" })}
        alt=""
      />
      <div
        className={clsx("flex flex-1", {
          "flex-col": view === "grid",
          " items-center justify-between": view === "list",
        })}
      >
        <div className="flex flex-1 flex-col justify-end gap-2.5">
          <h3 className="mb-2 max-w-[300px] truncate heading-medium">
            {app.name}
          </h3>
          <GenreTags genres={Object.keys(app?.tags || {}) || []} limit />
          <p className="text-dim body-medium">
            {util.formatDate(app.release_date)}
          </p>
          <div className="mt-auto flex items-center gap-3.5">
            <ReviewsBar positive={app.positive} negative={app.negative} />
            <span className="text-secondary-color body-medium">
              {app.negative + app.positive} Reviews
            </span>
          </div>
        </div>
        <div
          className={clsx("flex  items-end justify-between", {
            "h-full flex-col": view === "list",
            // "mt-auto": view === "grid",
          })}
        >
          <WishList />
          <MainCTA price={app.price} />
        </div>
      </div>
    </Link>
  );
}

export default AppListItem;
