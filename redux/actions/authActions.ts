import { AuthUserInterface } from '@/models/interfaces/authInterface';
import { SET_USER, LOGOUT, LOGIN, REGISTER } from '@/redux/types';

export const setUser = (user: AuthUserInterface) => ({
  type: SET_USER,
  payload: user,
});

export const login = () => ({
  type: LOGIN,
});

export const register = () => ({
  type: REGISTER,
});

export const logout = () => ({
  type: LOGOUT,
});
