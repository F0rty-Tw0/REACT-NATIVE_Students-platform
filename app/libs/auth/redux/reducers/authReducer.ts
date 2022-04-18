// MODELS
import { AuthStateInterface as InitialStateInterface } from '@libs/auth/models/interfaces/authInterface';
import {
  AuthDispatchTypes,
  CLEAN_AUTH_ERRORS,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REHYDRATE_USER,
  LOGOUT,
} from '@libs/auth/redux/authStoreTypes';

const initialState: InitialStateInterface = {
  user: null,
  isLoading: false,
  error: '',
  isLoggedIn: false,
};

export const authReducer = (
  state: InitialStateInterface = initialState,
  action: AuthDispatchTypes
): InitialStateInterface => {
  switch (action.type) {
    case LOGIN_LOADING:
    case REGISTER_LOADING:
      return { ...state, isLoading: true };
    case REHYDRATE_USER:
      return { ...state, user: action.user };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.user,
        isLoading: false,
        isLoggedIn: true,
      };
    case LOGIN_FAILURE:
    case REGISTER_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case CLEAN_AUTH_ERRORS:
      return {
        ...state,
        error: '',
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
