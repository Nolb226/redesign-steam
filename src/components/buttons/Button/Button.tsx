import React from "react";
import { ButtonProps } from "./Button.type";
const variants = {
  primary: "",
  secondary: "",
  tertiary: "",
};

function Button({ variant = "primary", children }: ButtonProps) {
  return (
    <button className="rounded-[3px] border border-[#76808C]/20 px-5 py-[7px] text-dim body-large hover:border-[#76808C]/40 hover:text-main">
      {children}
    </button>
  );
}

export default Button;
