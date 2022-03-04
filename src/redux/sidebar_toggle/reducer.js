import { CLICK_BUTTON } from "./types";

const initialState = {
  toggle: false,
};

const sidebarToggleReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_BUTTON:
      return {
        ...state,
        toggle: !state.toggle,
      };

    default:
      return state;
  }
};

export default sidebarToggleReducer;
