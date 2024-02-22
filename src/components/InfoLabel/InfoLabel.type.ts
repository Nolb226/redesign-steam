import { HTMLProps } from "react";

export type InfoLabelProps = HTMLProps<HTMLDivElement> & {
  title: string;
  children: string;
  className?: string;
};
