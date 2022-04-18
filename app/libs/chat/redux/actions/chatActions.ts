import { Dispatch } from 'redux';
import { ChatInterface } from '@libs/chat/models/interfaces/chatInterface';
import {
  ChatDispatchTypes,
} from '@libs/chat/redux/types/sharedTypes';
import {
  ChatRoomDispatchTypes,
  SET_CURRENT_CHAT_ROOM,
  CREATE_CHAT_ROOM_LOADING,
  CREATE_CHAT_ROOM_SUCCESS,
  CREATE_CHAT_ROOM_FAILURE,
  GET_ALL_CHAT_ROOMS_FAILURE,
  GET_ALL_CHAT_ROOMS_LOADING,
  GET_ALL_CHAT_ROOMS_SUCCESS,
} from '@libs/chat/redux/types/chatRoomTypes';
import {
  createDBChatRoom,
  getAllChatRooms,
} from '@libs/chat/services/chatServices';

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
      dispatch({ type: GET_ALL_CHAT_ROOMS_SUCCESS, chatRooms });
    } catch (error: any) {
      console.log(error);
      dispatch({ type: GET_ALL_CHAT_ROOMS_FAILURE, error: error.message });
    }
  };

export const createAndGetChatRoom =
  (chatRoomName: string) =>
  async (
    dispatch: Dispatch<ChatRoomDispatchTypes | ChatDispatchTypes>
  ): Promise<void> => {
    try {
      dispatch({ type: CREATE_CHAT_ROOM_LOADING });
      const newChatRoom = await createDBChatRoom(chatRoomName);
      dispatch({ type: CREATE_CHAT_ROOM_SUCCESS, chatRoom: newChatRoom });
    } catch (error: any) {
      console.log(error);
      dispatch({ type: CREATE_CHAT_ROOM_FAILURE, error: error.message });
    }
  };
