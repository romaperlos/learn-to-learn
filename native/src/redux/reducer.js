/* eslint-disable import/prefer-default-export */
import {
  LOADING_DIR, GET_DIRECTORIES, LOADING_LOGIN, HANDLER_LOGIN, ERROR_LOGIN,
} from './actionTypes';

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

    case LOADING_LOGIN:
      return {
        ...state,
        loadingLogin: true,
      };

    case ERROR_LOGIN:
      return {
        ...state,
        errorLogin: true,
      };

    case HANDLER_LOGIN:
      return {
        ...state,
        loadingLogin: false,
        errorLogin: false,
        loginUser: true,
      };

    default:
      return state;
  }
};
