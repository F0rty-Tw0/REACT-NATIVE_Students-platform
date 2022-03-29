import { Dispatch } from 'redux';
//MODELS
import {
  AuthCredentialsInterface,
  AuthUserInterface,
} from '@/features/auth/models/interfaces/authInterface';
import {
  LOGOUT,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  AuthDispatchTypes,
} from '@/features/auth/redux/types';
//SERVICES
import { login } from '@/features/auth/services/authService';

export const registerLoading = () => ({
  type: REGISTER_LOADING,
});

export const registerSuccess = (user: AuthUserInterface) => ({
  type: REGISTER_SUCCESS,
  payload: user,
});

export const registerFailure = () => ({
  type: REGISTER_FAILURE,
});

export const logout = () => ({
  type: LOGOUT,
});

export const  loginAndGetUser =
  ({ email, password }: AuthCredentialsInterface) =>
  async (dispatch: Dispatch<AuthDispatchTypes>) => {
    try {
      dispatch({ type: LOGIN_LOADING });
      const user = await login({ email, password });
      dispatch({ type: LOGIN_SUCCESS, payload: user });
    } catch (error) {
      console.log(error)
      dispatch({ type: LOGIN_FAILURE });
    }
  };
