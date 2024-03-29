import { PARAMS } from "./path";

export const ENDPOINTS = {
  GAME: {
    LIST: "games",
    DETAIL: `games/${PARAMS.APP}`,
  },
};

export const getEndPoint = (endpoint: string, arg: Object) => {
  let newEndpoint = "";
  Object.keys(arg).forEach((key) => {
    const regex = new RegExp("(:" + key + ")", "g");
    //@ts-ignore
    newEndpoint = endpoint.replace(regex, arg[key]);
  });
  return newEndpoint;
};
