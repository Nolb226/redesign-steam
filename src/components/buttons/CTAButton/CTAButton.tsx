import React from "react";
import { CTAButtonProps } from "./CTAButton.type";

function CTAButton({ children }: CTAButtonProps) {
  return (
    <button className="rounded-[3px] bg-secondary-color px-7 py-3.5 hover:bg-primary hover:text-black">
      {children}
    </button>
  );
}

export default CTAButton;
