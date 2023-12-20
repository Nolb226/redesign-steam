import React from "react";
import { CTAButtonProps } from "./CTAButton.type";
import {
  ArrowDownTrayIcon,
  PauseIcon,
  PlayIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";

const icons = {
  play: <PlayIcon className="h-5 w-5" />,
  install: <ArrowDownTrayIcon className="h-5 w-5" />,
  pause: <PauseIcon className="h-5 w-5" />,
};

function CTAButton({
  children,
  variant = "play",
  hasIcon = false,
}: CTAButtonProps) {
  return (
    <button
      className={
        "flex items-center justify-between gap-[10px] rounded-[3px] bg-accent-green text-black heading-small hover:bg-gradient-to-r hover:from-white/10  hover:to-white/10 " +
        clsx({
          "p-[14.5px]": hasIcon,
          "px-[16.5px] py-[11px]": !hasIcon,
        })
      }
    >
      {hasIcon && icons[variant]}
      {children}
    </button>
  );
}

export default CTAButton;
