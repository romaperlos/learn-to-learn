/* eslint-disable import/prefer-default-export */
import { LOADING_DIR, GET_DIRECTORIES } from './actionTypes';

export const reducer = (state, action) => {
  switch (action.type) {
    case LOADING_DIR:
      return {
        ...state,
        loadingTest: true,
      };

    case GET_DIRECTORIES:
      return {
        ...state,
        loadingTest: false,
        directories: action.payload,
      };

    default:
      return state;
  }
};
