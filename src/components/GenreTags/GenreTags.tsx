import React from "react";
import { GenreTagsProps } from "./GenreTags.type";
import { PlusIcon } from "@heroicons/react/24/solid";

const Tag = ({ genre }: { genre: string }) => (
  <li className="rounded-[3px] bg-highlight px-[13px] py-[8px] text-dim body-small hover:cursor-pointer hover:bg-hover">
    {genre}
  </li>
);

function GenreTags({ genres, limit }: GenreTagsProps) {
  const displayedGenres = limit ? genres.slice(0, 3) : genres;
  return (
    <div className="">
      <ul className="flex flex-wrap gap-1">
        {displayedGenres.map((genre, i) => (
          <Tag key={`genre-${i}`} genre={genre} />
        ))}

        {limit && (
          <li className="flex items-center justify-center rounded-[3px] bg-highlight px-[13px] py-[8px] text-dim hover:cursor-pointer hover:bg-hover">
            <PlusIcon className="h-4 w-4" />
          </li>
        )}
      </ul>
    </div>
  );
}

export default GenreTags;
