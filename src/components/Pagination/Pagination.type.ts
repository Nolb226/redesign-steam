import { ComponentPropsWithoutRef } from "react";

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onChangePage?: (page: number) => void;
  perPage: number;
};

export interface PaginationButtonProps
  extends ComponentPropsWithoutRef<"button"> {}
