import {
  ADD_MESSAGE,
  DELETE_MESSAGE,
  EDIT_MESSAGE,
  LIKE_MESSAGE,
} from '@/redux/types';

import { MessageInterface } from '@/models/interfaces/messageInterface';

export const addMessage = (messageText: string) => ({
  type: ADD_MESSAGE,
  payload: messageText,
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
