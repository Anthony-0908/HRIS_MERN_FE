import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {jwtDecode} from 'jwt-decode';
import { AuthState } from '../../../types/authState';



interface User {
  email: string;
}

// Get token from localStorage
const token = localStorage.getItem("token");

// Decode token if it exists
const initialUser = token ? jwtDecode<User>(token) : null;


// Initial state
const initialState: AuthState = {
  token: token,
  isAuthenticated: !!token,
  user: initialUser, // ✅ Store decoded user
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.user = jwtDecode<User>(action.payload); // ✅ Decode JWT
      state.isAuthenticated = true;
      localStorage.setItem("token", action.payload);
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;