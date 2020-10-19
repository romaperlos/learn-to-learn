const {
  CREATE_DIRECTORY, ADD_DIRECTORY, GET_DIRECTORIES, SET_DIRECTORIES, EDIT_DIRECTORY,
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
      // console.log(action.payload, ' <<<<< action payload');
      // console.log(state, ' <<<<< state');
      // console.log(state.indexOf({ _id: action.payload.id }), ' <<<<< indexOf');
      const index = state.findIndex((item) => item._id === action.payload.id);
      // console.log({ ...state[index], title: action.payload.title, description: action.payload.description }, ' <<<< index');
      console.log(state[index], 'index');
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
