import React from "react";
import { AppListItemProps } from "./AppListItem.type";
import GenreTags from "../../../components/GenreTags";
import { util } from "../../../utils";
import ReviewsBar from "../../../components/ReviewsBar";
import WishList from "../../../components/buttons/WishList";
import MainCTA from "../../../components/MainCTA";

function AppListItem({ app }: AppListItemProps) {
  return (
    <div className="flex gap-[17px] rounded-[3px] bg-main p-3.5">
      <img src={app.header_image} className="max-w-[292px]" alt="" />
      <div className="flex flex-1 items-center justify-between">
        <div className="flex flex-col gap-2.5">
          <h3 className="mb-2 heading-medium">{app.name}</h3>
          <GenreTags genres={Object.keys(app.tags)} limit />
          <p className="text-dim body-medium">
            {util.formatDate(app.release_date)}
          </p>
          <div className="flex gap-3.5">
            <ReviewsBar positive={app.positive} negative={app.negative} />
            <span className="text-secondary-color body-medium">
              {app.negative + app.positive} Reviews
            </span>
          </div>
        </div>
        <div className="flex h-full flex-col items-end justify-between">
          <WishList />
          <MainCTA price={app.price} />
        </div>
      </div>
    </div>
  );
}

export default AppListItem;
