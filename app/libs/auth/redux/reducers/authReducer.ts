//MODELS
import { AuthUserInterface } from '@libs/auth/models/interfaces/authInterface';
//REDUX
import {
  AuthDispatchTypes,
  CLEAN_AUTH_ERRORS,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '@libs/auth/redux/authStoreTypes';

interface InitialStateInterface {
  loading: boolean;
  isLoggedIn: boolean;
  error: string;
  user: AuthUserInterface | null;
}
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
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
      };
    case LOGIN_FAILURE:
    case REGISTER_FAILURE:
      return {
        ...state,
        error: action.payload,
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
