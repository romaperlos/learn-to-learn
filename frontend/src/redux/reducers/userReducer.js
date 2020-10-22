import { USER_AUTH } from '../actionTypes';

const userReducer = (state = { auth: false }, action) => {
  switch (action.type) {
    case USER_AUTH:
      return { ...state, auth: action.payload };
    default:
      return state;
  }
};

export default userReducer;
