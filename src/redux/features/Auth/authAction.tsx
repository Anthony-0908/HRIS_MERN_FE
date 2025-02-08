import axios, { AxiosError } from 'axios';
import { Dispatch } from 'redux';
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, AuthActionTypes } from '../../../types/authTypes';

// Login Action
export const login = (email: string, password: string) => async (dispatch: Dispatch<AuthActionTypes>) => {
  try {
    const response = await axios.post(`${process.env.VITE_API_URL}/login/login`, { email, password });

    const token = response.data.token;
    localStorage.setItem('token', token);

    dispatch({ type: LOGIN_SUCCESS, payload: token });
  } catch (error: unknown) {
    const err = error as AxiosError<{ message: string }>;

    dispatch({
      type: LOGIN_FAILURE,
      payload: err.response?.data?.message || 'Login failed',
    });
  }
};

// Logout Action
export const logout = () => (dispatch: Dispatch<AuthActionTypes>) => {
  localStorage.removeItem('token');
  dispatch({ type: LOGOUT });
};
