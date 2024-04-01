import { IApp } from "../../types/apps";

export type MainCTAProps = {
  price: number;
  app?: IApp;
  handOnClick?: () => void;
};
