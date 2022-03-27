import {
  ADD_MESSAGE,
  EDIT_MESSAGE,
  LIKE_MESSAGE,
  DELETE_MESSAGE,
} from '@/redux/types';

import { MessageInterface } from '@/models/interfaces/messageInterface';
import { ChatInterface } from '@/models/interfaces/chatInterface';

const initialState: ChatInterface[] = [];

interface ActionInterface {
  type: string;
  payload: MessageInterface;
}

export const messageReducer = (
  state = initialState,
  action: ActionInterface = { type: '', payload: {} as MessageInterface }
) => {
  const selectedChatId = action.payload?.chatId;
  switch (action.type) {
    case ADD_MESSAGE:
      return state.map((chat) => {
        return _addMessageToChat(chat, action.payload, selectedChatId);
      });

    case DELETE_MESSAGE:
      return state.map((chat: ChatInterface) => {
        return _deleteMessageFromChat(chat, action.payload, selectedChatId);
      });

    case LIKE_MESSAGE:
      return state.map((chat: ChatInterface) => {
        return _likeMessageFromChat(chat, action.payload, selectedChatId);
      });

    case EDIT_MESSAGE:
      return state.map((chat: ChatInterface) => {
        return _editMessageFromChat(chat, action.payload, selectedChatId);
      });

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
