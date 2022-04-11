import { AuthUserInterface } from '../models/interfaces/authInterface';

export const LOGIN_LOADING = 'LOGIN_LOADING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const REGISTER_LOADING = 'REGISTER_LOADING';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const CLEAN_AUTH_ERRORS = 'CLEAN_AUTH_ERRORS';
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
  payload: string;
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
  payload: string;
}

export interface CleanAuthErrors {
  type: typeof CLEAN_AUTH_ERRORS;
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
  | CleanAuthErrors
  | Logout;
