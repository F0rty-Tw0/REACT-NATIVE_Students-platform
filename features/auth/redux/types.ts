import { AuthUserInterface } from '../models/interfaces/authInterface';

export const LOGIN_LOADING = 'LOGIN_LOADING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const REGISTER_LOADING = 'REGISTER_LOADING';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const LOGOUT = 'LOGOUT';

export interface LoginLoading {
  type: typeof LOGIN_LOADING;
}
export interface LoginSuccess {
  type: typeof LOGIN_SUCCESS;
  payload: AuthUserInterface;
}

export interface LoginFailure {
  type: typeof LOGIN_FAILURE;
}

export interface RegisterLoading {
  type: typeof REGISTER_LOADING;
}
export interface RegisterSuccess {
  type: typeof REGISTER_SUCCESS;
  payload: AuthUserInterface;
}

export interface RegisterFailure {
  type: typeof REGISTER_FAILURE;
}

export interface Logout {
  type: typeof LOGOUT;
}

export type AuthDispatchTypes =
  | LoginLoading
  | LoginSuccess
  | LoginFailure
  | RegisterLoading
  | RegisterSuccess
  | RegisterFailure
  | Logout;
