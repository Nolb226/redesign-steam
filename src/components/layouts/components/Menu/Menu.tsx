import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";
import { PATHS } from "../../../../constants/path";

const items = [
  {
    text: "Home",
    to: PATHS.HOME,
  },
  {
    text: "Browse",
    to: PATHS.STORE.BROWSE.IDENTITY,
  },
  {
    text: "Discover",
    to: PATHS.STORE.DISCOVER.IDENTITY,
  },
  {
    text: "Points Shop",
    to: PATHS.STORE.POINT_SHOP.IDENTITY,
  },
  {
    text: "Curators",
    to: "#",
  },
  {
    text: "Gift Cards",
    to: "#",
  },
  {
    text: "News",
    to: "#",
  },
];

function Menu() {
  return (
    <div className="flex  items-center justify-between bg-tertiary px-[10px] py-[6px] ">
      <div className="">
        <ul className="flex items-center gap-[7px]   text-main">
          {items.map((item, i) => (
            <Link
              to={item.to}
              key={i}
              className="px-7 py-[10px] hover:rounded hover:bg-secondary-color"
            >
              <p className="md:body-medium lg:body-large">{item.text}</p>
            </Link>
          ))}
        </ul>
      </div>
      {/* <div className="lg:hidden">
        <Bars3Icon className="h-4 w-4" />
      </div> */}
      <div className="flex items-center">
        <label
          htmlFor="search"
          className=" flex h-[44px] w-[507px] items-center bg-[#0E141B]/20 py-3 pl-4 pr-3"
        >
          <input
            id="search"
            placeholder="Search..."
            type="text"
            className="flex-1 border-none bg-transparent outline-none placeholder:text-secondary-color placeholder:body-medium"
          />
          <MagnifyingGlassIcon className="h-4 w-4 font-bold text-secondary-color" />
        </label>
      </div>
      <div className="">
        <ul className="flex items-center">
          <Link to={PATHS.STORE.WISHLIST.IDENTITY} className="px-7 py-[10px]">
            <p className="body-large">Wishlist</p>
          </Link>
          <Link to={PATHS.STORE.CART.IDENTITY} className="px-7 py-[10px]">
            <p className="body-large">Cart</p>
          </Link>
          <li>
            <div className="flex h-10 w-10 items-center justify-center rounded bg-[#76808C]/10">
              <img src="./Settings.svg" alt="" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
