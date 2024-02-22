import React from "react";
import { InputProps } from "./Input.type";

function Input({ id, ...props }: InputProps) {
  return (
    <label
      htmlFor={id}
      className="rounded border border-[#313843] bg-main px-[15px] py-3"
    >
      <input
        type="text"
        className="w-full border-none bg-transparent outline-none placeholder:text-[#313843]"
        id={id}
        {...props}
      />
    </label>
  );
}

export default Input;
