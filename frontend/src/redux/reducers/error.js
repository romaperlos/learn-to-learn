const { GET_ERROR } = require('../actionTypes');

const errorReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ERROR:
      return { error: action.payload };
    default:
      return state;
  }
};

export default errorReducer;
