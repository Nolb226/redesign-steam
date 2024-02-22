import { ENDPOINTS, getEndPoint } from "../../constants/endpoint";
import { Axios } from "../../utils/axios";

export const AppService = {
  getAllApp: () => {
    return Axios.axiosGet(ENDPOINTS.GAME.LIST);
  },

  getAppById: (id: string) => {
    return Axios.axiosGet(
      getEndPoint(ENDPOINTS.GAME.DETAIL, {
        appId: id,
      }),
    );
  },
};
