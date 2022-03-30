import {
  SET_CURRENT_CHAT_ROOM_MESSAGES,
  ADD_MESSAGE_TO_CURRENT_CHAT_ROOM,
} from '@/features/chat/redux/types/sharedTypes';

import { MessageInterface } from '@/features/chat/models/interfaces/messageInterface';

const initialState: MessageInterface[] = [];

interface ActionInterface {
  type: string;
  payload: MessageInterface;
}

export const messageReducers = (
  state = initialState,
  action: ActionInterface = { type: '', payload: {} as MessageInterface }
) => {
  switch (action.type) {
    case SET_CURRENT_CHAT_ROOM_MESSAGES:
      const currentChatMessages: MessageInterface[] = [];
      if (action.payload) {
        for (const [messageId, messages] of Object.entries(action.payload)) {
          currentChatMessages.push({
            ...(messages as MessageInterface),
            messageId,
          });
        }
      }
      return currentChatMessages;
    case ADD_MESSAGE_TO_CURRENT_CHAT_ROOM:
      return [...state, action.payload];
    default:
      return state;
  }
};
