const { GET_ERROR } = require('../actionTypes');

const errorReducer = (state = {}, action) => {
  console.log(typeof action.payload, '<<<< payload');
  console.log(state, '<<<< state');
  switch (action.type) {
    case GET_ERROR:
      return {error: action.payload};
    default:
      return state;
  }
};

export default errorReducer;
