import { SET_CURRENT_CHAT_ROOM } from '@libs/chat/redux/types/sharedTypes';

import { ChatInterface } from '@libs/chat/models/interfaces/chatInterface';

const initialState: ChatInterface | null = null;

interface ActionInterface {
  type: string;
  payload: ChatInterface;
}

export const currentChatReducer = (
  state = initialState,
  action: ActionInterface = {
    type: '',
    payload: {} as ChatInterface,
  }
) => {
  switch (action.type) {
    case SET_CURRENT_CHAT_ROOM:
      return { name: action.payload.name, chatId: action.payload.chatId };
    default:
      return state;
  }
};
