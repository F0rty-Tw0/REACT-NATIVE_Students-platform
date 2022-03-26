import { LOGIN, REGISTER } from '@/redux/types';

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
    case LOGIN:
      return {
        ...state,
        appState: LOGIN,
      };
    case REGISTER:
      return {
        ...state,
        appState: REGISTER,
      };
    default:
      return state;
  }
};
