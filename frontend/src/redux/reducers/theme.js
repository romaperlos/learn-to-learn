import { SET_THEME } from '../actionTypes';

const themeReducer = (state = { primary: '#3f51b5', secondary: '#f44336' }, action) => {
  switch (action.type) {
    case SET_THEME:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default themeReducer;
