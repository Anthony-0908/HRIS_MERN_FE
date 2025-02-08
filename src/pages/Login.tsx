import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/features/Auth/authSlice';
import { login } from '../redux/features/Auth/authService';
import { useNavigate } from 'react-router-dom';


interface LoginError {
  message: string;
}

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await login({ email, password });
      dispatch(loginSuccess(data.token));
      navigate('/dashboard');
    } catch (error: unknown) {
      if (error && typeof error === 'object' && 'message' in error) {
        const typedError = error as LoginError; // Type assertion
        console.error('Login failed:', typedError.message);
      } else {
        console.error('Unknown error:', error);
      }
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
