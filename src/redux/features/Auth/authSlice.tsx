import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {jwtDecode} from 'jwt-decode';

interface User {
  email: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
}

const token = localStorage.getItem('token');
const initialUser = token ? jwtDecode<User>(token) : null;

const initialState: AuthState = {
  user: initialUser,
  token: token || null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.user = jwtDecode<User>(action.payload);
      localStorage.setItem('token', action.payload);
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem('token');
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
