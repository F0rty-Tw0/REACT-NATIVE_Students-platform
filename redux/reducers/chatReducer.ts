import {
  ADD_MESSAGE,
  EDIT_MESSAGE,
  LIKE_MESSAGE,
  DELETE_MESSAGE,
} from '@/redux/types';

import { MessageInterface } from '@/models/interfaces/messageInterface';
import { ChatInterface } from '@/models/interfaces/chatInterface';

const initialState: ChatInterface[] = [
  {
    chatId: 0,
    name: 'General Chat',
    messages: [
      {
        chatId: 0,
        messageId: 0,
        text: 'Welcome to the General Chat!',
        isFavorite: false,
      },
    ],
  },
];

interface ActionInterface {
  type: string;
  payload: MessageInterface;
}

export const chatReducer = (
  state = initialState,
  action: ActionInterface = { type: '', payload: {} as MessageInterface }
) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const lastMessageId: number =
        state[action.payload.chatId].messages.length > 0
          ? state[action.payload.chatId].messages[
              state[action.payload.chatId].messages.length - 1
            ].messageId
          : 0;
      return state.map((chat: ChatInterface) => ({
        ...chat,
        messages: [
          ...chat.messages,
          {
            chatId: action.payload.chatId,
            messageId: lastMessageId + 1,
            text: action.payload.text,
            isFavorite: false,
          },
        ],
      }));

    case DELETE_MESSAGE:
      return state.map((chat: ChatInterface) => ({
        ...chat,
        messages: chat.messages.filter(
          (message: MessageInterface) =>
            message.messageId !== action.payload.messageId
        ),
      }));

    case LIKE_MESSAGE:
      return state.map((chat: ChatInterface) => {
        return {
          ...chat,
          messages: chat.messages.map((message: MessageInterface) =>
            message.messageId === action.payload.messageId
              ? {
                  ...message,
                  isFavorite: !message.isFavorite,
                }
              : message
          ),
        };
      });

    case EDIT_MESSAGE:
      return state.map((chat: ChatInterface) => {
        return {
          ...chat,
          messages: chat.messages.map((message: MessageInterface) =>
            message.messageId === action.payload.messageId
              ? {
                  ...message,
                  text: action.payload.text,
                }
              : message
          ),
        };
      });

    default:
      return state;
  }
};
