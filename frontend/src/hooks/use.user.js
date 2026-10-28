import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, signup, getUser, logout } from '../services/user.api';
import { setUser, clearUser } from '../lib/redux/blogSlice';

export function useUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleSignup({ username, email, password }) {
    try {
      const res = await signup({ username, email, password });
      if (res.status === 'success') {
        dispatch(setUser(res.data));
        navigate('/Home');
        return { success: true, data: res.data };
      }
      return { success: false, error: res.message || 'Signup failed' };
    } catch (err) {
      const errorMsg =
        err.response?.data?.message ||
        err.response?.data?.errors?.[0]?.message ||
        err.message ||
        'Failed to create account';
      return { success: false, error: errorMsg };
    }
  }

  async function handleLogin({ username, email, password }) {
    try {
      const payload = { password };
      if (username) payload.username = username;
      if (email) payload.email = email;

      const res = await login(payload);
      if (res.status === 'success') {
        dispatch(setUser(res.data));
        navigate('/Home');
        return { success: true, data: res.data };
      }
      return { success: false, error: res.message || 'Login failed' };
    } catch (err) {
      const errorMsg =
        err.response?.data?.message ||
        err.response?.data?.errors?.[0]?.message ||
        err.message ||
        'Invalid credentials';
      return { success: false, error: errorMsg };
    }
  }

  async function handleGetUser() {
    try {
      const res = await getUser();
      if (res && res.status === 'success') {
        dispatch(setUser(res.data));
        return { success: true, data: res.data };
      }
      return { success: false };
    } catch {
      return { success: false };
    }
  }

  async function handleLogout() {
    try {
      await logout();
    } catch (err) {
      console.warn('Logout API error:', err);
    } finally {
      dispatch(clearUser());
      navigate('/Signin');
    }
  }

  return { handleSignup, handleLogin, handleGetUser, handleLogout };
}
