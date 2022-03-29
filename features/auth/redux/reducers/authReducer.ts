//MODELS
import { AuthUserInterface } from '@/features/auth/models/interfaces/authInterface';
//REDUX
import {
  LOGIN_SUCCESS,
  LOGIN_LOADING,
  LOGIN_FAILURE,
  LOGOUT,
  AuthDispatchTypes,
} from '@/features/auth/redux/types';

interface InitialStateInterface {
  loading: boolean;
  isLoggedIn: boolean;
  user?: AuthUserInterface;
}
const initialState: InitialStateInterface = {
  loading: false,
  isLoggedIn: false,
};

export const authReducer = (
  state: InitialStateInterface = initialState,
  action: AuthDispatchTypes
): InitialStateInterface => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
      };
    case LOGOUT:
      return {
        ...state,
      };
    default:
      return state;
  }
};
