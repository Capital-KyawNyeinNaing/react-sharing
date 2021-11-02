import * as types from "../types";

const initialState = {
  openRedux_data: false,
};

const home = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN":
      return {
        ...state,
        openRedux_data: action.payload,
      };
    default:
      return state;
  }
};

export default home;
