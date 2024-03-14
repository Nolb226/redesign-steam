import { defer } from "react-router-dom";
import { AppService } from "../../services/app";

const getBrowseData = async () => {
  const { data } = await AppService.getAllApp();
  return data;
};
export const BrowseLoader = () => {
  return defer({
    apps: getBrowseData(),
  });
};
