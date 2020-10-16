import { LOADING_TEST, GET_TEST_TEXT } from './actionTypes';

export const reducer = (state, action) => {
  switch (action.type) {

    case LOADING_TEST:
      return {
        ...state,
        loadingTest: true,
      }

    case GET_TEST_TEXT:
      return {
          ...state,
          loadingTest: false,
          test: action.payload,
        }

    default:
      return state
  }
}
