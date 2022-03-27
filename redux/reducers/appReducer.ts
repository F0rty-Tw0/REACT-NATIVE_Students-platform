import { LOGIN_SUCCESS, REGISTER_SUCCESS } from '@/features/auth/redux/types';

const initialState = {
  appState: null,
};

interface ActionInterface {
  type: string;
}

export const appReducer = (
  state = initialState,
  action: ActionInterface = {
    type: '',
  }
) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        appState: LOGIN_SUCCESS,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        appState: REGISTER_SUCCESS,
      };
    default:
      return state;
  }
};
