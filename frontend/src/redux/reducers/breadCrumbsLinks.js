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
      console.log(action.payload, '    <<<<<< ACTION PAYLOAD');
      // return [...state.filter((item) => item.id !== action.payload)];
      // console.log(state.findIndex((item) => item.id === action.payload), '   <<<<< INDEX');
      console.log(state, '   <<<< state');
      console.log(...state, ' <<<< state spred');
      console.log([...state], ' <<<<< state in arr');
      const newArr = state;
      console.log(newArr.findIndex((item) => item.id === action.payload), '  <<<< index');
      newArr.splice(newArr.findIndex((item) => item.id === action.payload) + 1);
      return newArr;
      // return [...state.splice(state.findIndex((item) => item.id === action.payload) + 1)];
    default:
      return state;
  }
};

export default breadcrumbsReducer;
