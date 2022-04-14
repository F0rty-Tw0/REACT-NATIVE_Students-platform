import { Dispatch } from 'redux';
//MODELS
import { AuthCredentialsInterface } from '@libs/auth/models/interfaces/authInterface';
import {
  AuthDispatchTypes,
  CLEAN_AUTH_ERRORS,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '@libs/auth/redux/authStoreTypes';
//SERVICES
import { login, register } from '@libs/auth/services/authService';
export const logout = () => ({
  type: LOGOUT,
});

export const cleanAuthErrors = () => ({
  type: CLEAN_AUTH_ERRORS,
});

export const registerFailure = (error: string) => ({
  type: REGISTER_FAILURE,
  payload: error,
});

export const loginAndSetUser =
  ({ email, password }: AuthCredentialsInterface) =>
  async (dispatch: Dispatch<AuthDispatchTypes>) => {
    try {
      dispatch({ type: LOGIN_LOADING });
      const user = await login({ email, password });
      dispatch({ type: LOGIN_SUCCESS, payload: user });
    } catch (error: any) {
      dispatch({ type: LOGIN_FAILURE, payload: error.message });
      throw new Error('Login failed');
    }
  };

export const registerAndSetUser =
  ({ email, password }: AuthCredentialsInterface) =>
  async (dispatch: Dispatch<AuthDispatchTypes>) => {
    try {
      dispatch({ type: REGISTER_LOADING });
      const user = await register({ email, password });
      dispatch({ type: REGISTER_SUCCESS, payload: user });
    } catch (error: any) {
      dispatch({ type: REGISTER_FAILURE, payload: error.message });
      throw new Error('Register failed');
    }
  };
