import { ADD_BREADCRUMB_LINK, DELETE_BREADCRUMB_LINK } from '../actionTypes';

const initialState = [{
  id: '',
  title: 'Main',
}];

const breadcrumbsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BREADCRUMB_LINK:
      return [...state, action.payload];
    case DELETE_BREADCRUMB_LINK:
      const newArr = state;
      newArr.splice(newArr.findIndex((item) => item.id === action.payload) + 1);
      return newArr;
      // return [...state.splice(state.findIndex((item) => item.id === action.payload) + 1)];
    default:
      return state;
  }
};

export default breadcrumbsReducer;
