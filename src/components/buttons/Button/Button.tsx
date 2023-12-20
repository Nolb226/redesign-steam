import React from "react";
import { ButtonProps } from "./Button.type";
import clsx from "clsx";
const variants = {
  primary:
    "rounded-[3px] bg-secondary-color px-7 py-3.5 hover:bg-primary hover:text-black",
  secondary:
    "bg-highlight hover:bg-hover rounded-[3px] min-w-[120px]  body-large",
  tertiary:
    "rounded-[3px] border border-[#76808C]/20  py-[7px] min-w-[120px] text-dim body-large hover:border-[#76808C]/40 hover:text-main",
};

function Button({ variant = "primary", children, className }: ButtonProps) {
  return (
    <button className={clsx(variants[variant], className)}>{children}</button>
  );
}

export default Button;
