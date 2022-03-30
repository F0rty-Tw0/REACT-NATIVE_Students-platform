import { Dispatch } from 'redux';

import {
  ChatDispatchTypes,
  SET_CURRENT_CHAT_ROOM_MESSAGES,
  ADD_MESSAGE_TO_CURRENT_CHAT_ROOM,
} from '@/features/chat/redux/types/sharedTypes';
import { MessageInterface } from '@/features/chat/models/interfaces/messageInterface';
import {
  MessageDispatchTypes,
  ADD_MESSAGE_LOADING,
  ADD_MESSAGE_SUCCESS,
  ADD_MESSAGE_FAILURE,
} from '@/features/chat/redux/types/messageTypes';
import { addMessageToChat } from '@/features/chat/services/messageServices';

export const setCurrentChatMessages = (messages: MessageInterface[]) => ({
  type: SET_CURRENT_CHAT_ROOM_MESSAGES,
  payload: messages,
});

export const addAndGetNewMessage =
  (chatId: string, message: string) =>
  async (dispatch: Dispatch<MessageDispatchTypes | ChatDispatchTypes>): Promise<void> => {
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
