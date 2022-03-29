import {
  ADD_MESSAGE,
  EDIT_MESSAGE,
  LIKE_MESSAGE,
  DELETE_MESSAGE,
  SET_CURRENT_CHAT_MESSAGES,
} from '@/features/chat/redux/types';

import { MessageInterface } from '@/features/chat/models/interfaces/messageInterface';
import { ChatInterface } from '@/features/chat/models/interfaces/chatInterface';

const initialState: MessageInterface[] = [];

interface ActionInterface {
  type: string;
  payload: MessageInterface;
}

export const messageReducer = (
  state = initialState,
  action: ActionInterface = { type: '', payload: {} as MessageInterface }
) => {
  const lastMessageId: number =
    state.length > 0 ? state[state.length - 1].messageId : 0;
  switch (action.type) {
    case ADD_MESSAGE:
      return [...state, { ...action.payload, messageId: lastMessageId + 1 }];

    case DELETE_MESSAGE:
      return state.filter(
        (message: MessageInterface) =>
          message.messageId !== action.payload.messageId
      );

    case LIKE_MESSAGE:
      return state.map((message: MessageInterface) =>
        message.messageId === action.payload.messageId
          ? {
              ...message,
              isFavorite: !message.isFavorite,
            }
          : message
      );

    case SET_CURRENT_CHAT_MESSAGES:
      return action.payload;
    default:
      return state;
  }
};

const _addMessageToChat = (
  chat: ChatInterface,
  payload: MessageInterface,
  selectedChatId: number
): ChatInterface => {
  if (chat.chatId === selectedChatId) {
    const lastMessageId: number =
      chat.messages.length > 0
        ? chat.messages[chat.messages.length - 1].messageId
        : 0;
    return {
      ...chat,
      messages: [
        ...chat.messages,
        { ...payload, messageId: lastMessageId + 1 },
      ],
    };
  }
  return chat;
};

const _deleteMessageFromChat = (
  chat: ChatInterface,
  payload: MessageInterface,
  selectedChatId: number
): ChatInterface => {
  if (chat.chatId === selectedChatId) {
    return {
      ...chat,
      messages: chat.messages.filter(
        (message: MessageInterface) => message.messageId !== payload.messageId
      ),
    };
  }
  return chat;
};

const _likeMessageFromChat = (
  chat: ChatInterface,
  payload: MessageInterface,
  selectedChatId: number
): ChatInterface => {
  if (chat.chatId === selectedChatId) {
    return {
      ...chat,
      messages: chat.messages.map((message: MessageInterface) =>
        message.messageId === payload.messageId
          ? {
              ...message,
              isFavorite: !message.isFavorite,
            }
          : message
      ),
    };
  }
  return chat;
};

const _editMessageFromChat = (
  chat: ChatInterface,
  payload: MessageInterface,
  selectedChatId: number
): ChatInterface => {
  if (chat.chatId === selectedChatId) {
    return {
      ...chat,
      messages: chat.messages.map((message: MessageInterface) =>
        message.messageId === payload.messageId
          ? {
              ...message,
              text: payload.text,
            }
          : message
      ),
    };
  }
  return chat;
};
