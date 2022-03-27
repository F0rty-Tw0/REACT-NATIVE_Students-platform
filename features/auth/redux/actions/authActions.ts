import { AuthUserInterface } from 'features/auth/models/interfaces/authInterface';
import { SET_USER, LOGOUT, LOGIN_SUCCESS, REGISTER_SUCCESS } from '@/features/auth/redux/types';

export const setUser = (user: AuthUserInterface) => ({
  type: SET_USER,
  payload: user,
});

export const login = () => ({
  type: LOGIN_SUCCESS,
});

export const register = () => ({
  type: REGISTER_SUCCESS,
});

export const logout = () => ({
  type: LOGOUT,
});
