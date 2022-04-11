import { NAV_TOGGLE } from "../constants/types";
const initialState = {
  toggle: false,
};

function toggleNav(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case NAV_TOGGLE: {
      return {
        ...state,
        toggle: true,
      };
    }
    default:
      return state;
  }
}

export default toggleNav;
