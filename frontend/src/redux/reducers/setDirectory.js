import { setCurrentDirectory } from '../actions';
import { SET_CURRENT_DIRECTORY } from '../actionTypes';

const setDirectoryReducer = (state = { id: '' }, action) => {
  switch (action.type) {
    case SET_CURRENT_DIRECTORY:
      console.log(action.payload, ' <<<< current dir payload');
      return { ...state, id: action.payload };

    default:
      return state;
  }
};

export default setDirectoryReducer;
