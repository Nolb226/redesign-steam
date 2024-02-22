import React from "react";
import { SystemButtonProps } from "./SystemButton.type";
import Button from "../../../../../components/buttons/Button";
import clsx from "clsx";

function SystemButton({
  currentSys,
  system,
  children,
  onClick,
}: SystemButtonProps) {
  return (
    <Button
      variant="secondary"
      className={clsx("min-w-fit px-5", {
        "bg-hover": currentSys === system,
        "bg-main/50": currentSys !== system,
      })}
      onClick={() => onClick(system)}
    >
      {children}
    </Button>
  );
}

export default SystemButton;
