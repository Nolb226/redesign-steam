export type FilterProps = {
  onFilter: (tags: string[]) => void;
};
export type FilterAccordionProps = AccordionItem;
export type AccordionItem = {
  children: string;
  panel: string[];
};

export type FilterContextProps = {
  tags: string[];
  searchValue: string | undefined;
  onClickTag: (tag: string) => void;
};
