import { IRequirements } from "../../../../../types/apps";

export type TSystems = "windows" | "mac" | "linux";

export type RequirementsProps = {
  systems: {
    windows?: boolean;
    mac?: boolean;
    linux?: boolean;
  };
  requirements: {
    windows?: IRequirements;
    mac?: IRequirements;
    linux?: IRequirements;
  };
};
