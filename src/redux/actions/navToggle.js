import { NAV_TOGGLE } from "../constants/types";

export const toggleNavbar = () => async (dispatch) => {
  try {
    dispatch({
      type: NAV_TOGGLE,
    });
  } catch (err) {
    console.log(err);
  }
};
