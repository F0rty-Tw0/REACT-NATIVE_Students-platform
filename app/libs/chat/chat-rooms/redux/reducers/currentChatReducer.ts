import { SET_CURRENT_CHAT_ROOM } from '@libs/chat/shared/redux/types/sharedTypes';

import { ChatInterface } from '@libs/chat/chat-rooms/models/interfaces/chatInterface';

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
