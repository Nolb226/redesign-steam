import React from "react";
import { ReviewsBarProps } from "./ReviewsBar.type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
function ReviewsBar({ negative, positive }: ReviewsBarProps) {
  const total = negative + positive;
  const positivePercent = positive / total;
  const negativePercent = negative / total;

  const negativeLabel = Math.floor(negativePercent * 100);
  const positiveLabel = Math.round(positivePercent * 100);

  return (
    <div>
      <div className="flex justify-between">
        <div className="">
          <span className="text-primary body-small">{positiveLabel}%</span>{" "}
          <FontAwesomeIcon className="text-primary" icon={faThumbsUp} />
        </div>
        <div className="">
          <span className="text-accent-red body-small">{negativeLabel}%</span>{" "}
          <FontAwesomeIcon className="text-accent-red" icon={faThumbsDown} />
        </div>
      </div>
      <div className="flex min-w-[138px]  items-center gap-0.5">
        <div
          style={{
            width: `${positivePercent * 138}px`,
          }}
          className="h-2 rounded-lg bg-primary/80"
        ></div>
        <div
          style={{
            width: `${negativePercent * 138}px`,
          }}
          className="col-span-1 h-2 rounded-lg bg-accent-red/80"
        ></div>
      </div>
    </div>
  );
}

export default ReviewsBar;
