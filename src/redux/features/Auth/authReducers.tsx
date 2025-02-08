import { AuthState } from '../../../types/authState';
import { AuthActionTypes, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../../../types/authTypes';

const initialState: AuthState = {
  token: localStorage.getItem('token') || null,
  isAuthenticated: !!localStorage.getItem('token'),
  error: null,
};

export const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, token: action.payload, isAuthenticated: true, error: null };
    case LOGIN_FAILURE:
      return { ...state, token: null, isAuthenticated: false, error: action.payload };
    case LOGOUT:
      return { ...state, token: null, isAuthenticated: false, error: null };
    default:
      return state;
  }
};
