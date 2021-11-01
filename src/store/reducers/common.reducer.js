import * as types from "../types";

const initialState = {
  openRedux: false,
};

const home = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN":
      return {
        ...state,
        openRedux: action.payload,
      };
    default:
      return state;
  }
};

export default home;
