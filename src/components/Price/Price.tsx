import React from "react";
import { PriceProps } from "./Price.type";
import clsx from "clsx";

function Price({ price, sale }: PriceProps) {
  return (
    <div className={clsx("flex gap-[10px]", { "items-center": !sale })}>
      {sale && (
        <div className="flex items-center justify-center rounded-[3.25px] bg-accent-green px-[14px] py-[8px]">
          <span className="text-[19px] font-bold text-black">-{sale}%</span>
        </div>
      )}
      <div className="heading-small">
        {sale ? (
          <>
            <s className="text-[#313843]">${price}</s>
            <p>${Math.floor((price - price * (sale / 100)) * 100) / 100}</p>
          </>
        ) : (
          <p>${price}</p>
        )}
      </div>
    </div>
  );
}

export default Price;
