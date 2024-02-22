import React from "react";
import Button from "../../../components/buttons/Button";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Card from "../../../components/Card";
import { IApp } from "../../../types/apps";

const apps: any[] = [
  {
    poster: "/images/image 66.png",
    name: "Baldur's Gate",
    price: 100,
  },
  {
    poster: "/images/image 67.png",
    name: "Rust",
    price: 100,
  },
  {
    poster: "/images/image 68.png",
    name: "Call of Duty®",
    price: 100,
  },
  {
    poster: "/images/image 69.png",
    name: "Fallout 76",
    price: 100,
  },
  {
    poster: "/images/image 70.png",
    name: "Metal Gear & Metal Gear 2: Solid Snake",
    price: 100,
  },
  {
    poster: "/images/image 71.png",
    name: "Red Dead Redemption 2",
    price: 100,
  },
];

function TopSellers() {
  return (
    <section className="">
      <div className="flex justify-between">
        <h2 className="heading-small">Top Sellers</h2>
        <Button variant="tertiary">See more</Button>
      </div>
      <div className="mt-[30px] flex items-center gap-[14px] rounded-[5px] bg-main/20 px-[15px] py-5">
        <div className="">
          <ChevronLeftIcon className="h-6 w-6" />
        </div>
        <div className="grid flex-1 grid-cols-2 grid-rows-3 gap-4 rounded-[5px] p-[15px]">
          {apps.map((app) => (
            <Card key={app.name} app={app} direction="horizontal" />
          ))}
        </div>
        <div className="">
          <ChevronRightIcon className="h-6 w-6" />
        </div>
      </div>
    </section>
  );
}

export default TopSellers;
