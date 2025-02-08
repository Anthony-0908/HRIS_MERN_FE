// authService.ts
import axios from 'axios';

const API_URL = "http://localhost:3000/api/login/login";

interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

export const login = async ({ email, password }: LoginCredentials): Promise<LoginResponse> => {
  const response = await axios.post<LoginResponse>(API_URL, { email, password });
  return response.data;
};
