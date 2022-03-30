import { ChatInterface } from '@/features/chat/models/interfaces/chatInterface';
import {
  ChatDispatchTypes,
  CREATE_CHAT_ROOM,
  CREATE_CHAT_ROOM_LOADING,
  CREATE_CHAT_ROOM_SUCCESS,
  DELETE_CHAT_ROOM,
  GET_ALL_CHAT_ROOMS_FAILURE,
  GET_ALL_CHAT_ROOMS_LOADING,
  GET_ALL_CHAT_ROOMS_SUCCESS,
  SET_CURRENT_CHAT,
  SET_CURRENT_CHAT_MESSAGES,
} from '@/features/chat/redux/types';
import { Dispatch } from 'redux';
import {
  createDBChatRoom,
  getAllChatRooms,
} from '@/features/chat/services/chatServices';

export const createChatRoom = (chatRoomName: string) => ({
  type: CREATE_CHAT_ROOM,
  payload: { name: chatRoomName },
});

export const deleteChatRoom = (chatRoomId: number) => ({
  type: DELETE_CHAT_ROOM,
  payload: chatRoomId,
});

export const setCurrentChat = (chatRoom: ChatInterface) => ({
  type: SET_CURRENT_CHAT,
  payload: chatRoom,
});

export const getAllChatRoomsAction =
  () => async (dispatch: Dispatch<ChatDispatchTypes>) => {
    try {
      dispatch({ type: GET_ALL_CHAT_ROOMS_LOADING });
      const chatRooms = await getAllChatRooms();
      dispatch({ type: GET_ALL_CHAT_ROOMS_SUCCESS, payload: chatRooms });
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_ALL_CHAT_ROOMS_FAILURE });
    }
  };

export const createAndGetChatRoom =
  (chatRoomName: string) => async (dispatch: Dispatch<ChatDispatchTypes>) => {
    try {
      dispatch({ type: CREATE_CHAT_ROOM_LOADING });
      const newChatRoom = await createDBChatRoom(chatRoomName);
      dispatch({ type: CREATE_CHAT_ROOM_SUCCESS, payload: newChatRoom });
      dispatch({ type: SET_CURRENT_CHAT, payload: newChatRoom });
      dispatch({
        type: SET_CURRENT_CHAT_MESSAGES,
        payload: newChatRoom.messages,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_ALL_CHAT_ROOMS_FAILURE });
    }
  };
