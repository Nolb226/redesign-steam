import { TSystems } from "../Requirements/Requirements.type";

export type SystemButtonProps = {
  system: TSystems;
  children: string;
  onClick: (value: TSystems) => void;
  currentSys: TSystems;
};
