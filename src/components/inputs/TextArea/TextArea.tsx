import React from "react";
import { TextAreaProps } from "./TextArea.type";
import clsx from "clsx";

function TextArea({ id, containerClassName, ...props }: TextAreaProps) {
  return (
    <label
      className={clsx(
        "rounded border border-[#313843] bg-main px-[15px] py-3",
        containerClassName,
      )}
      htmlFor={id}
    >
      <textarea
        className=" w-full resize-none border-none bg-transparent outline-none placeholder:text-[#313843]"
        id={id}
        {...props}
      ></textarea>
    </label>
  );
}

export default TextArea;
