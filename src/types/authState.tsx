export interface User {
  email: string;
}

export interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  user: User | null; // ✅ Add user
  error: string | null;
}