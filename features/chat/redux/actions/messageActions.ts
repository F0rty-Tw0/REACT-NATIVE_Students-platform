import {
  ADD_MESSAGE,
  DELETE_MESSAGE,
  EDIT_MESSAGE,
  LIKE_MESSAGE,
  SET_CURRENT_CHAT_MESSAGES
} from '@/features/chat/redux/types';

import { MessageInterface } from '@/features/chat/models/interfaces/messageInterface';

export const addMessage = (chatId: string, text: string) => ({
  type: ADD_MESSAGE,
  payload: { chatId, text },
});

export const editMessage = (message: MessageInterface) => ({
  type: EDIT_MESSAGE,
  payload: message,
});

export const deleteMessage = (message: MessageInterface) => ({
  type: DELETE_MESSAGE,
  payload: message,
});

export const likeMessage = (message: MessageInterface) => ({
  type: LIKE_MESSAGE,
  payload: message,
});


export const setCurrentChatMessages = (messages: MessageInterface[]) => ({
  type: SET_CURRENT_CHAT_MESSAGES,
  payload: messages,
});
