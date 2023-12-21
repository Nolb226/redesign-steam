import React from "react";
import { PanelProps } from "./Panel.type";

function Panel({ children, header }: PanelProps) {
  return (
    <div className="rounded-[3px] bg-main p-5">
      <h2 className="text-dim heading-medium">{header}</h2>
      <div className="mt-[35px]">{children}</div>
    </div>
  );
}

export default Panel;
