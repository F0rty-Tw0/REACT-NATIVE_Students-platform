import { SET_USER, LOGOUT } from '@/redux/types';
import { AuthUserInterface } from '@/models/interfaces/authInterface';

const initialState = {
  user: null,
};

interface ActionInterface {
  type: string;
  payload: AuthUserInterface;
}

export const authReducer = (
  state = initialState,
  action: ActionInterface = {
    type: '',
    payload: {} as AuthUserInterface,
  }
) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};
