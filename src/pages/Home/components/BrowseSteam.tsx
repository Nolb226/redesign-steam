import React from "react";
import Button from "../../../components/buttons/Button";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Category from "../../../components/Category";
import { ICategory } from "../../../types/category";

const categories: ICategory[] = [
  {
    image: "/images/image 122.png",
    name: "Action",
  },
  {
    image: "/images/image 123.png",
    name: "RPG",
  },
  {
    image: "/images/image 124.png",
    name: "Free-to-Play",
  },
  {
    image: "/images/image 125.png",
    name: "Anime",
  },
  {
    image: "/images/image 126.png",
    name: "Co-Op",
  },
];

function BrowseSteam() {
  return (
    <section className="">
      <div className="flex justify-between">
        <h2 className="heading-small">Browse Steam</h2>
        <Button variant="tertiary">See more</Button>
      </div>
      <div className="mt-[30px] flex items-center gap-[14px] rounded-[5px] bg-main/20 px-[15px] py-5">
        <div className="">
          <ChevronLeftIcon className="h-6 w-6" />
        </div>
        <div className="grid flex-1 grid-cols-5 gap-4 rounded-[5px] p-[15px]">
          {categories.map((category, i) => (
            <Category category={category} key={`${category.name}`} color={i} />
          ))}
        </div>
        <div className="">
          <ChevronRightIcon className="h-6 w-6" />
        </div>
      </div>
    </section>
  );
}

export default BrowseSteam;
