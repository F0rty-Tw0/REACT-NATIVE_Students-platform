import { SET_USER, LOGOUT } from '@/features/auth/redux/types';
import { AuthUserInterface } from 'features/auth/models/interfaces/authInterface';
import { Dispatch } from 'redux';
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

// const login = () => async (_dispatch: Dispatch, getState) => {
//   dispatch({})
//   const { user } = await signInWithEmailAndPassword(auth, email, password);
// };
