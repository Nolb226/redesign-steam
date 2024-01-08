import React from "react";
import { ButtonProps } from "./Button.type";
import clsx from "clsx";
const variants = {
  primary:
    "rounded-[3px] bg-secondary-color px-7 py-3.5 hover:bg-primary hover:text-black",
  secondary:
    "bg-highlight hover:bg-hover rounded-[3px] min-w-[120px] py-[12.5px] body-large",
  tertiary:
    "rounded-[3px] border border-[#76808C]/20  py-[7px] min-w-[120px] text-dim body-large hover:border-[#76808C]/40 hover:text-main",
  ghost: "body-large min-w-[120px] hover:underline",
  danger:
    "bg-accent-red rounded-[3px] min-w-[120px] py-[12.5px] body-large hover:bg-gradient-to-r hover:from-white/10  hover:to-white/10",
};

function Button({ variant = "primary", children, className }: ButtonProps) {
  return (
    <button className={clsx(variants[variant], className)}>{children}</button>
  );
}

export default Button;
