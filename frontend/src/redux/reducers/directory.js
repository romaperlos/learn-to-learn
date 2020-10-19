const {
  CREATE_DIRECTORY, ADD_DIRECTORY, GET_DIRECTORIES, SET_DIRECTORIES,
} = require('../actionTypes');

const directoryReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_DIRECTORY:
      return state;
    case CREATE_DIRECTORY:
      return [...state, action.payload];
    case GET_DIRECTORIES:
      return state;
    case SET_DIRECTORIES:
      return [...action.payload];

    default:
      return state;
  }
};

export default directoryReducer;
