import userActions from "./user-constants";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActions.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case userActions.SIGN_IN_FAILURE:
      return {
        ...state,
        currentUser: action.payload,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
