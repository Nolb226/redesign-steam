import React from "react";
import { CategoryProps } from "./Category.type";

const colors = [
  {
    from: "[#171124]/70",
    to: "[#171124]",
  },
  {
    from: "[#0E1325]/50",
    to: "[#0E1325]",
  },
  {
    from: "[#23374B]/40",
    to: "[#23374B]",
  },
  {
    from: "[#163F24]/60",
    to: "[#163F24]",
  },
  {
    from: "[#583C1A]/50",
    to: "[#583C1A]",
  },
];

function Category({ category, color }: CategoryProps) {
  const chose = colors[color];
  return (
    <div className="relative w-full overflow-hidden rounded-[5px] hover:cursor-pointer">
      <div
        //    @ts-ignore
        style={{ "--image-url": `url('${category.image}')` }}
        className={`h-60 w-full bg-[image:var(--image-url)] bg-cover bg-center bg-no-repeat`}
      ></div>
      <div
        className={`absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-[#D9D9D9]/10 bg-gradient-to-b from-[#171124]/70 to-[#171124]`}
      >
        <span className=" heading-medium">{category.name}</span>
      </div>
    </div>
  );
}

export default Category;
