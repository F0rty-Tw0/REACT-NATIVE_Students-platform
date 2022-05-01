import { Dispatch } from 'redux';

import {
  ChatDispatchTypes,
  SET_CURRENT_CHAT_ROOM_MESSAGES,
  ADD_MESSAGE_TO_CURRENT_CHAT_ROOM,
  DELETE_MESSAGE_FROM_CURRENT_CHAT_ROOM,
  LIKE_MESSAGE_IN_CURRENT_CHAT_ROOM,
  TOGGLE_IS_LAST_MESSAGE_IN_CURRENT_CHAT_ROOM,
} from '@libs/chat/shared/redux/types/sharedTypes';
import { MessageInterface } from '@libs/chat/messages/models/interfaces/messageInterface';
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
  TOGGLE_IS_LAST_MESSAGE_LOADING,
  TOGGLE_IS_LAST_MESSAGE_SUCCESS,
  TOGGLE_IS_LAST_MESSAGE_FAILURE,
} from '@libs/chat/messages/redux/types/messageTypes';
import {
  addMessageToChat,
  deleteMessageFromChat,
  toggleLikeToMessage,
  toggleIsLastToMessage,
} from '@libs/chat/messages/services/messageServices';

export const setCurrentChatMessages = (messages: MessageInterface[]) => ({
  type: SET_CURRENT_CHAT_ROOM_MESSAGES,
  payload: messages,
});

export const addMessage =
  (messageObject: MessageInterface) =>
  async (
    dispatch: Dispatch<MessageDispatchTypes | ChatDispatchTypes>
  ): Promise<void> => {
    try {
      dispatch({ type: ADD_MESSAGE_LOADING });
      const newMessage = await addMessageToChat(messageObject);
      dispatch({ type: ADD_MESSAGE_TO_CURRENT_CHAT_ROOM, payload: newMessage });
      dispatch({ type: ADD_MESSAGE_SUCCESS, payload: newMessage });
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

export const toggleLastMessage =
  (chatId: string, messageId: string, isLast: boolean) =>
  async (
    dispatch: Dispatch<MessageDispatchTypes | ChatDispatchTypes>
  ): Promise<void> => {
    try {
      console.log({ chatId, messageId, isLast });
      dispatch({ type: TOGGLE_IS_LAST_MESSAGE_LOADING });
      await toggleIsLastToMessage(chatId, messageId, isLast);
      dispatch({
        type: TOGGLE_IS_LAST_MESSAGE_IN_CURRENT_CHAT_ROOM,
        payload: { messageId, isLast },
      });
      dispatch({ type: TOGGLE_IS_LAST_MESSAGE_SUCCESS });
    } catch (error) {
      console.log(error);
      dispatch({ type: TOGGLE_IS_LAST_MESSAGE_FAILURE });
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
