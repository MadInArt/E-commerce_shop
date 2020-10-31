import userActions from "./user-constants";

export const googleSignInStart = () => ({
  type: userActions.GOOGLE_SIGN_IN_START,
});
export const emailSignInStart = (emailAndPassword) => ({
  type: userActions.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const signInSuccess = (user) => ({
  type: userActions.SIGN_IN_SUCCESS,
  payload: user,
});
export const signInFailure = (error) => ({
  type: userActions.SIGN_IN_FAILURE,
  payload: error,
});
