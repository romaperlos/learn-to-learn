import { SET_CURRENT_DIRECTORY } from '../actionTypes';

const setDirectoryReducer = (state = { id: '', isLast: false }, action) => {
  switch (action.type) {
    case SET_CURRENT_DIRECTORY:
      return { ...state, id: action.payload };

    default:
      return state;
  }
};

export default setDirectoryReducer;
