import { USER_AUTH } from '../actionTypes';

const userReducer = (state = { auth: false }, action) => {
  console.log(action, ' <<<<<<<<<<  user reducer');
  switch (action.type) {
    case USER_AUTH:
      return { ...state, auth: action.payload };
    default:
      return state;
  }
};

export default userReducer;
