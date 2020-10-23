import { UPDATE_COMPANY, USER_AUTH } from '../actionTypes';

const userReducer = (state = { auth: false }, action) => {
  console.log(action, ' <<<<<<<<<<  user reducer');
  // console.log();
  switch (action.type) {
    case USER_AUTH:
      return { ...state, ...action.payload };
    case UPDATE_COMPANY:
      console.log({ ...state.company.company }, ' stateeeeeeeee');
      return { ...state, company: { ...state.company, company: { ...state.company.company, ...action.payload } } };
    default:
      return state;
  }
};

export default userReducer;
