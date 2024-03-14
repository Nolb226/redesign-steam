import { IApp } from "../../../types/apps";

export type AppListItemProps = {
  app: IApp;
  view?: "list" | "grid";
};
