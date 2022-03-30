import { SET_CURRENT_CHAT } from '@/features/chat/redux/types';

import { ChatInterface } from '@/features/chat/models/interfaces/chatInterface';

const initialState: ChatInterface | null = null;

interface ActionInterface {
  type: string;
  payload: ChatInterface | ChatInterface[];
}

export const currentChatReducers = (
  state = initialState,
  action: ActionInterface = {
    type: '',
    payload: {} as ChatInterface,
  }
) => {
  switch (action.type) {
    case SET_CURRENT_CHAT:
      return action.payload;
    default:
      return state;
  }
};
