export const PARAMS = {
  APP: ":appId",
};

export const PATHS = {
  HOME: "",
  STORE: {
    BROWSE: {
      IDENTITY: "browse",
    },
    APPS: {
      IDENTITY: "apps",
      DETAILS: PARAMS.APP,
    },
    DISCOVER: {
      IDENTITY: "discover",
    },
    POINT_SHOP: {
      IDENTITY: "pshop",
    },
    WISHLIST: {
      IDENTITY: "wishlist",
    },
    CART: {
      IDENTITY: "cart",
    },
  },
  SETTINGS: {
    IDENTITY: "settings",
    ACCOUNT: "",
    PRIVACY: "privacy",
    PROFILES: "profile-settings",
  },
};
