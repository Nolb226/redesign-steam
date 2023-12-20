import { IApp } from "../../types/apps";

export type CardProps = {
  variant?: "sale-off" | "update" | "play-now" | "default" | "live";
  app: IApp;
  direction?: "vertical" | "horizontal";
};
