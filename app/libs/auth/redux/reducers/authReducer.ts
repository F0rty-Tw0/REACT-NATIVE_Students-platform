// MODELS
import { AuthStateInterface as InitialStateInterface } from '@libs/auth/models/interfaces/authInterface';
import {
  AuthDispatchTypes,
  CLEAN_AUTH_ERRORS,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  LOGIN_LOADING,
  REGISTER_LOADING,
} from '@libs/auth/redux/authStoreTypes';

const initialState: InitialStateInterface = {
  user: null,
  loading: false,
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
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.user,
        loading: false,
        isLoggedIn: true,
      };
    case LOGIN_FAILURE:
    case REGISTER_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
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
