import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React from "react";
import { SearchProps } from "./Search.type";

function Search({}: SearchProps) {
  return (
    <label
      htmlFor="search"
      className=" flex  items-center rounded-[3px] bg-[#212B45]/20 py-3 pl-4 pr-3"
    >
      <input
        id="search"
        placeholder="Search Settings..."
        type="text"
        className="flex-1 border-none bg-transparent outline-none placeholder:text-secondary-color placeholder:body-medium"
      />
      <MagnifyingGlassIcon className="h-4 w-4 font-bold text-secondary-color" />
    </label>
  );
}

export default Search;
