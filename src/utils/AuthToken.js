import api from "../api/axios";

export const setUserAuthToken = (userAuthToken) => {
  if (userAuthToken) {
    api.defaults.headers.common["Bearer"] = userAuthToken;
    localStorage.setItem("usertoken", userAuthToken);
  } else {
    delete api.defaults.headers.common["Bearer"];
    localStorage.removeItem("usertoken");
  }
};
