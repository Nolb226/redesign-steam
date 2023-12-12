import React from "react";

function Price() {
  return (
    <div className="flex gap-[10px]">
      <div className="bg-accent-green flex items-center justify-center rounded-[3.25px] px-[14px] py-[8px]">
        <span className="text-[19px] font-bold text-black">-20%</span>
      </div>
      <div className=" heading-small">
        <s className="text-[#313843]">$59.99</s>
        <p>$49.99</p>
      </div>
    </div>
  );
}

export default Price;
