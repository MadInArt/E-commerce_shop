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
export const checkUserSession = () => ({
  type: userActions.CHECK_USER_SESSION,
});
export const signOutStart = () => ({
  type: userActions.SIGN_OUT_START,
});
export const signOutSuccess = () => ({
  type: userActions.SIGN_OUT_SUCCESS,
});
export const signOutFailure = (error) => ({
  type: userActions.SIGN_OUT_FAILURE,
  payload: error,
});
