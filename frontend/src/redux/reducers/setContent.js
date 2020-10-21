import { GET_CONTENT_CATEGORY, SET_CONTENT_CATEGORY } from "../actionTypes";

const setContentReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CONTENT_CATEGORY:
      return state;
    case SET_CONTENT_CATEGORY:
      return [...action.payload];

    default:
      return state;
  }
};

export default setContentReducer;
