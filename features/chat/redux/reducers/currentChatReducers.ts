import { SET_CURRENT_CHAT_ROOM } from '@/features/chat/redux/types/sharedTypes';

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
    case SET_CURRENT_CHAT_ROOM:
  console.log(action.payload)
      return action.payload;
    default:
      return state;
  }
};
