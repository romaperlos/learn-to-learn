import { UPDATE_COMPANY, USER_AUTH } from '../actionTypes';

const userReducer = (state = { auth: false }, action) => {
  switch (action.type) {
    case USER_AUTH:
      return { ...state, ...action.payload };
    case UPDATE_COMPANY:
      return { ...state, company: { ...state.company, company: { ...state.company.company, ...action.payload } } };
    default:
      return state;
  }
};

export default userReducer;
