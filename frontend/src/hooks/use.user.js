import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, signup, getUser, logout } from '../services/user.api';
import { setUser, clearUser } from '../lib/redux/blogSlice';

export function useUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleSignup({ username, email, password }) {
    const res = await signup({ username, email, password });
    if (res.status === 'success') {
      dispatch(setUser(res.data));
      navigate('/Home');
    }
    return res;
  }

  async function handleLogin({ username, email, password }) {
    const res = await login({ username, email, password });
    if (res.status === 'success') {
      dispatch(setUser(res.data));
      navigate('/Home');
    }
    return res;
  }

  async function handleGetUser() {
    try {
      const res = await getUser();
      if (res.status === 'success') {
        dispatch(setUser(res.data));
      }
      return res;
    } catch {
      return null;
    }
  }

  async function handleLogout() {
    const res = await logout();
    dispatch(clearUser());
    navigate('/Signin');
    return res;
  }

  return { handleSignup, handleLogin, handleGetUser, handleLogout };
}
