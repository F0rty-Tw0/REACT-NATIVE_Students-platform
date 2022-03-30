import { ChatInterface } from '@/features/chat/models/interfaces/chatInterface';
import {
  ChatDispatchTypes,
  SET_CURRENT_CHAT_ROOM_MESSAGES,
} from '@/features/chat/redux/types/sharedTypes';
import {
  ChatRoomDispatchTypes,
  SET_CURRENT_CHAT_ROOM,
  CREATE_CHAT_ROOM_LOADING,
  CREATE_CHAT_ROOM_SUCCESS,
  CREATE_CHAT_ROOM_FAILURE,
  GET_ALL_CHAT_ROOMS_FAILURE,
  GET_ALL_CHAT_ROOMS_LOADING,
  GET_ALL_CHAT_ROOMS_SUCCESS,
} from '@/features/chat/redux/types/chatRoomTypes';
import { Dispatch } from 'redux';
import {
  createDBChatRoom,
  getAllChatRooms,
} from '@/features/chat/services/chatServices';

export const setCurrentChatRoom = (chatRoom: ChatInterface) => ({
  type: SET_CURRENT_CHAT_ROOM,
  payload: chatRoom,
});

export const getAllChatRoomsAction =
  () =>
  async (dispatch: Dispatch<ChatRoomDispatchTypes>): Promise<void> => {
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
  (chatRoomName: string) =>
  async (dispatch: Dispatch<ChatRoomDispatchTypes | ChatDispatchTypes>): Promise<void> => {
    try {
      dispatch({ type: CREATE_CHAT_ROOM_LOADING });
      const newChatRoom = await createDBChatRoom(chatRoomName);
      dispatch({ type: CREATE_CHAT_ROOM_SUCCESS, payload: newChatRoom });
      dispatch({ type: SET_CURRENT_CHAT_ROOM, payload: newChatRoom });
      dispatch({
        type: SET_CURRENT_CHAT_ROOM_MESSAGES,
        payload: newChatRoom.messages,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: CREATE_CHAT_ROOM_FAILURE });
    }
  };
