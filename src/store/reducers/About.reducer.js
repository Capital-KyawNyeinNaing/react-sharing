import * as types from "../types";

const initialState = {
  about_data: null,
};

const about = (state = initialState, action) => {
  switch (action.type) {
    case types.HOME_KEY:
      return {
        ...state,
        about_data: action.payload,
      };
    default:
      return state;
  }
};

export default about;
