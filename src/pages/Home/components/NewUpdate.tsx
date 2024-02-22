import React from "react";
import Button from "../../../components/buttons/Button";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { IApp } from "../../../types/apps";
import Card from "../../../components/Card";

const apps: any[] = [
  {
    poster: "/images/image 56.png",
    name: "Destiny 2",
    price: 100,
  },
  {
    poster: "/images/image 57.png",
    name: "Halo Infinite",
    price: 100,
  },
  {
    poster: "/images/image 58.png",
    name: "Team Fortress 2",
    price: 100,
  },
  {
    poster: "/images/image 58.png",
    name: "Team Fortress 2",
    price: 100,
  },
];

function NewUpdate() {
  return (
    <section className="">
      <div className="flex justify-between">
        <h2 className="heading-small">Recently Updated</h2>
        <Button variant="tertiary">See more</Button>
      </div>
      <div className="mt-[30px] flex items-center gap-[14px] rounded-[5px] bg-main/20 px-[15px] py-5">
        <div className="">
          <ChevronLeftIcon className="h-6 w-6" />
        </div>
        <div className="grid flex-1 grid-cols-4 gap-4 rounded-[5px] p-[15px]">
          {apps.map((app) => (
            <Card key={app.name} app={app} variant="update" />
          ))}
        </div>
        <div className="">
          <ChevronRightIcon className="h-6 w-6" />
        </div>
      </div>
    </section>
  );
}

export default NewUpdate;
