const {
  CREATE_DIRECTORY, ADD_DIRECTORY, GET_DIRECTORIES, SET_DIRECTORIES, EDIT_DIRECTORY, SET_CURRENT_DIRECTORY,
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
      console.log(action.payload, ' <<<< action payload set');
      return [...action.payload];
    case EDIT_DIRECTORY:
      return [...state.map((item) => {
        if (item._id === action.payload.id) {
          item.title = action.payload.title;
          item.description = action.payload.description;
          return item;
        }
        return item;
      })];

    default:
      return state;
  }
};

export default directoryReducer;
