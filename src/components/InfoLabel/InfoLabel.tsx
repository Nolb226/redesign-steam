import React from "react";
import { InfoLabelProps } from "./InfoLabel.type";
import InfoToolTip from "../InfoToolTip";
import clsx from "clsx";

function InfoLabel({ children, title, className, ...props }: InfoLabelProps) {
  return (
    <div className={clsx("flex items-center gap-1", className)} {...props}>
      <p className="heading-small">{children}</p> <InfoToolTip info={title} />{" "}
    </div>
  );
}

export default InfoLabel;
