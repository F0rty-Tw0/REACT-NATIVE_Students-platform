import { Dispatch } from 'redux';

import {
  ChatDispatchTypes,
  SET_CURRENT_CHAT_ROOM_MESSAGES,
  ADD_MESSAGE_TO_CURRENT_CHAT_ROOM,
  DELETE_MESSAGE_FROM_CURRENT_CHAT_ROOM,
  LIKE_MESSAGE_IN_CURRENT_CHAT_ROOM,
} from '@/features/chat/redux/types/sharedTypes';
import { MessageInterface } from '@/features/chat/models/interfaces/messageInterface';
import {
  MessageDispatchTypes,
  ADD_MESSAGE_LOADING,
  ADD_MESSAGE_SUCCESS,
  ADD_MESSAGE_FAILURE,
  DELETE_MESSAGE_LOADING,
  DELETE_MESSAGE_SUCCESS,
  DELETE_MESSAGE_FAILURE,
  LIKE_MESSAGE_LOADING,
  LIKE_MESSAGE_SUCCESS,
  LIKE_MESSAGE_FAILURE,
} from '@/features/chat/redux/types/messageTypes';
import {
  addMessageToChat,
  deleteMessageFromChat,
  toggleLikeToMessage,
} from '@/features/chat/services/messageServices';

export const setCurrentChatMessages = (messages: MessageInterface[]) => ({
  type: SET_CURRENT_CHAT_ROOM_MESSAGES,
  payload: messages,
});

export const addMessage =
  (chatId: string, message: string) =>
  async (
    dispatch: Dispatch<MessageDispatchTypes | ChatDispatchTypes>
  ): Promise<void> => {
    try {
      dispatch({ type: ADD_MESSAGE_LOADING });
      const newMessage = await addMessageToChat(chatId, message);
      dispatch({ type: ADD_MESSAGE_SUCCESS, payload: newMessage });
      dispatch({ type: ADD_MESSAGE_TO_CURRENT_CHAT_ROOM, payload: newMessage });
    } catch (error) {
      console.log(error);
      dispatch({ type: ADD_MESSAGE_FAILURE });
    }
  };

export const toggleLikeMessage =
  (chatId: string, messageId: string, isFavorite: boolean) =>
  async (
    dispatch: Dispatch<MessageDispatchTypes | ChatDispatchTypes>
  ): Promise<void> => {
    try {
      dispatch({ type: LIKE_MESSAGE_LOADING });
      await toggleLikeToMessage(chatId, messageId, isFavorite);
      dispatch({
        type: LIKE_MESSAGE_IN_CURRENT_CHAT_ROOM,
        payload: { messageId, isFavorite },
      });
      dispatch({ type: LIKE_MESSAGE_SUCCESS });
    } catch (error) {
      console.log(error);
      dispatch({ type: LIKE_MESSAGE_FAILURE });
    }
  };

export const deleteMessage =
  (chatId: string, messageId: string) =>
  async (
    dispatch: Dispatch<MessageDispatchTypes | ChatDispatchTypes>
  ): Promise<void> => {
    try {
      dispatch({ type: DELETE_MESSAGE_LOADING });
      await deleteMessageFromChat(chatId, messageId);
      dispatch({ type: DELETE_MESSAGE_SUCCESS });
      dispatch({
        type: DELETE_MESSAGE_FROM_CURRENT_CHAT_ROOM,
        payload: { messageId },
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: DELETE_MESSAGE_FAILURE });
    }
  };
