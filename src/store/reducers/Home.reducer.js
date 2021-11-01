import * as types from "../types";

const initialState = {
  isLoading: false,
};

const home = (state = initialState, action) => {
  switch (action.type) {
    case types.HOME_KEY:
      return {
        ...state,
        home_data: action.payload,
      };
    default:
      return state;
  }
};

export default home;
