import React from "react";
import { InfoLabelProps } from "./InfoLabel.type";
import InfoToolTip from "../../../../components/InfoToolTip";

function InfoLabel({ children, title }: InfoLabelProps) {
  return (
    <div className="flex items-center gap-1">
      <p className="heading-small">{children}</p> <InfoToolTip info={title} />{" "}
    </div>
  );
}

export default InfoLabel;
