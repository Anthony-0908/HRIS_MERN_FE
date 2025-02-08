export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: string; // JWT Token
}

interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  payload: string; // Error message
}

interface LogoutAction {
  type: typeof LOGOUT;
}

export type AuthActionTypes = LoginSuccessAction | LoginFailureAction | LogoutAction;
