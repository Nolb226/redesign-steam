import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Search from "../../../components/inputs/Search";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/solid";
import {
  AccordionItem,
  FilterAccordionProps,
  FilterContextProps,
  FilterProps,
} from "./Filter.type";
import { createContext, useContext, useMemo, useState } from "react";
import clsx from "clsx";

const FilterContext = createContext<FilterContextProps | undefined>(undefined);

const FilterAccordion = ({ children, panel }: FilterAccordionProps) => {
  const { searchValue, tags, onClickTag } = useContext(FilterContext!)!;
  const displayPanel = useMemo(() => {
    return searchValue
      ? panel.filter((string) => {
          const regex = new RegExp(searchValue, "g");
          return regex.test(string);
        })
      : panel;
  }, [panel, searchValue]);

  return (
    <div className="">
      <Disclosure>
        <Disclosure.Button className="flex w-full items-center justify-between py-[15px] body-large">
          <span>{children}</span>
          <ChevronDownIcon className="h-5 w-5" />
        </Disclosure.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Disclosure.Panel as="ul" className="flex flex-col gap-[7px]">
            {displayPanel.map((row) => {
              const isTagged = tags.includes(row);

              return (
                <li
                  key={row}
                  className={clsx(
                    "rounded-[3px] px-[13px] py-2 body-small hover:cursor-pointer ",
                    {
                      "hover:bg-hover": !isTagged,
                      "bg-hover": isTagged,
                    },
                  )}
                  onClick={() => onClickTag(row)}
                >
                  {row}
                </li>
              );
            })}
          </Disclosure.Panel>
        </Transition>
      </Disclosure>
    </div>
  );
};

const TagsList: AccordionItem[] = [
  {
    children: "Top-Level Genres",
    panel: ["Adventure", "Casual", "RPG", "Strategy", "Simulation"],
  },
  {
    children: "Genres",
    panel: [
      "Shooter",
      "Puzzle",
      "Arcade",
      "Platformer",
      "Visual Novel",
      "Sandbox",
      "Point & Click",
      "Card Game",
      "Interactive Fiction",
      "Walking Simulator",
      "Education",
      "Dating Sim",
      "Roguelike",
      "JRPG",
    ],
  },
  {
    children: "Sub-Genres",
    panel: [
      "Exploration",
      "Clicker",
      "Idler",
      "Hack and Slash",
      "Choose Your Own Adventure",
    ],
  },
];

function Filter({ onFilter }: FilterProps) {
  const [tags, setTags] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  const onClickTag = (tag: string) => {
    const alreadyIn = tags.includes(tag);
    let updatedTags = tags;

    if (!alreadyIn) {
      updatedTags = [...tags, tag];
    } else {
      updatedTags = tags.filter((x) => x !== tag);
    }

    setTags(updatedTags);
    onFilter(updatedTags);
  };

  const onRemoveTag = (tag: string) => {
    const removedTags = tags.filter((x) => x !== tag);
    setTags(removedTags);
    onFilter(removedTags);
  };

  return (
    <div className="rounded-[3px] bg-main p-[15px]">
      <div className="flex flex-col gap-[15px]">
        <div className="flex items-center justify-between">
          <p className="body-medium">FILTERS</p>
          <FontAwesomeIcon
            icon={faFilter}
            className="h-4 w-4 bg-[#76808C]/5 p-[7px] text-dim"
          />
        </div>
        <Search
          placeholder="Search for a tag..."
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <div className="flex flex-wrap gap-[3px]">
          {tags.map((tag) => (
            <div
              onClick={() => onRemoveTag(tag)}
              className="flex items-center gap-[10px] rounded-[3px] bg-hover px-[13px] py-2 hover:cursor-pointer hover:bg-highlight"
            >
              <span className="body-small">{tag}</span>
              <XMarkIcon className="h-3 w-3 text-dim" />
            </div>
          ))}
        </div>
        <div className="flex flex-col divide-y divide-[#1E2329]">
          <FilterContext.Provider value={{ searchValue, tags, onClickTag }}>
            {TagsList.map((tags) => (
              <FilterAccordion key={tags.children} panel={tags.panel}>
                {tags.children}
              </FilterAccordion>
            ))}
          </FilterContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default Filter;
