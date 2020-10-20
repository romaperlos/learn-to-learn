const {
  CREATE_DIRECTORY, ADD_DIRECTORY, GET_DIRECTORIES, SET_DIRECTORIES, EDIT_DIRECTORY, DELETE_DIRECTORY, TRY_DELETE_ITEM,
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
    case EDIT_DIRECTORY:
      return [...state.map((item) => {
        if (item._id === action.payload.id) {
          item.title = action.payload.title;
          item.description = action.payload.description;
          return item;
        }
        return item;
      })];
    case TRY_DELETE_ITEM:
      return state;
    case DELETE_DIRECTORY:
      return [...state.filter((el) => el._id !== action.payload)];

    default:
      return state;
  }
};

export default directoryReducer;
