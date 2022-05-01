import {
  SET_CURRENT_CHAT_ROOM_MESSAGES,
  ADD_MESSAGE_TO_CURRENT_CHAT_ROOM,
  DELETE_MESSAGE_FROM_CURRENT_CHAT_ROOM,
  LIKE_MESSAGE_IN_CURRENT_CHAT_ROOM,
  TOGGLE_IS_LAST_MESSAGE_IN_CURRENT_CHAT_ROOM,
} from '@libs/chat/shared/redux/types/sharedTypes';

import { MessageInterface } from '@libs/chat/messages/models/interfaces/messageInterface';

const initialState: MessageInterface[] = [];

interface ActionInterface {
  type: string;
  payload: MessageInterface;
}

export const messageReducer = (
  state = initialState,
  action: ActionInterface = { type: '', payload: {} as MessageInterface }
) => {
  switch (action.type) {
    case SET_CURRENT_CHAT_ROOM_MESSAGES:
      return action.payload || [];
    case ADD_MESSAGE_TO_CURRENT_CHAT_ROOM:
      return [...state, action.payload];

    case TOGGLE_IS_LAST_MESSAGE_IN_CURRENT_CHAT_ROOM:
      return state.map((message) => {
        return message.messageId === action.payload.messageId
          ? { ...message, isLast: action.payload.isLast }
          : message;
      });

    case LIKE_MESSAGE_IN_CURRENT_CHAT_ROOM:
      return state.map((message) => {
        return message.messageId === action.payload.messageId
          ? {
              ...message,
              isFavorite: action.payload.isFavorite,
            }
          : message;
      });

    case DELETE_MESSAGE_FROM_CURRENT_CHAT_ROOM:
      return state.filter(
        (message: MessageInterface) =>
          message.messageId !== action.payload.messageId
      );
    default:
      return state;
  }
};
