const { CREATE_DIRECTORY, ADD_DIRECTORY } = require('../actionTypes');

const directoryReducer = (state = [], action) => {
  console.log(state, '<<<< reducer directory');
  switch (action.type) {
    case ADD_DIRECTORY:
      return state;
    case CREATE_DIRECTORY:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default directoryReducer;
