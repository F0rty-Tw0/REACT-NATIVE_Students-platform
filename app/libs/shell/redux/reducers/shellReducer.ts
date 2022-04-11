import { LOGIN, REGISTER } from '@libs/shell/redux/shellStoreTypes';

const initialState = {
  appState: null,
};

interface ActionInterface {
  type: string;
}

export const shellReducer = (
  state = initialState,
  action: ActionInterface = {
    type: '',
  }
) => {
  switch (action.type) {
    case LOGIN: {
      return { ...state, appState: LOGIN };
    }
    case REGISTER: {
      return { ...state, appState: REGISTER };
    }
    default:
      return state;
  }
};
