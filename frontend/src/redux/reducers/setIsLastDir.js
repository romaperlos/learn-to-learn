import { SET_ISLASTDIR } from '../actionTypes';

const setIsLastReducer = (state = { isLast: false }, action) => {
  switch (action.type) {
    case SET_ISLASTDIR:
      return { ...state, isLast: action.payload };

    default:
      return state;
  }
};

export default setIsLastReducer;
