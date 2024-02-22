import React from "react";
import Button from "../../../components/buttons/Button";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Card from "../../../components/Card";
import { IApp } from "../../../types/apps";

const apps: any[] = [
  {
    name: "The Last of Us: Part 1",
    poster: "/images/image 53.png",
    price: 59.99,
    sale: 20,
  },

  {
    name: "Iratus: Lord of the Dead",
    poster: "/images/image 54.png",
    price: 29.99,
    sale: 87,
  },
  {
    name: "Beyond: Two Souls",
    poster: "/images/image 55.png",
    price: 19.99,
    sale: 60,
  },
];

function SpecialOffers() {
  return (
    <section>
      <div className="flex justify-between">
        <p className="heading-small">Special Offers</p>
        <p className="">
          <Button variant="tertiary">See more</Button>
        </p>
      </div>
      <div className="mt-[30px] flex items-center gap-[14px] rounded-[5px] bg-main/20 px-[15px] py-5">
        <div className="">
          <ChevronLeftIcon className="h-6 w-6" />
        </div>
        <div className="grid flex-1 grid-cols-3 gap-[20.75px] rounded-[5px] p-[15px]">
          {apps.map((app) => (
            <Card app={app} variant="sale-off" />
          ))}
        </div>
        <div className="">
          <ChevronRightIcon className="h-6 w-6" />
        </div>
      </div>
    </section>
  );
}

export default SpecialOffers;
