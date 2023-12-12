import React from "react";
import { GenreTagsProps } from "./GenreTags.type";
import { PlusIcon } from "@heroicons/react/24/solid";

function GenreTags({ genres }: GenreTagsProps) {
  return (
    <div className="">
      <ul className="flex flex-wrap gap-1">
        {genres.map((genre) => (
          <li className="rounded-[3px] bg-highlight px-[13px] py-[8px] text-dim body-small">
            {genre}
          </li>
        ))}
        <li className="flex items-center justify-center rounded-[3px] bg-highlight px-[13px] py-[8px] text-dim">
          <PlusIcon className="h-4 w-4" />
        </li>
      </ul>
    </div>
  );
}

export default GenreTags;
