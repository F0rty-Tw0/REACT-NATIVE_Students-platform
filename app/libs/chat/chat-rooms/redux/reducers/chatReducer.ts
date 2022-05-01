import {
  ChatRoomDispatchTypes,
  CREATE_CHAT_ROOM_LOADING,
  CREATE_CHAT_ROOM_SUCCESS,
  CREATE_CHAT_ROOM_FAILURE,
  GET_ALL_CHAT_ROOMS_LOADING,
  GET_ALL_CHAT_ROOMS_SUCCESS,
  GET_ALL_CHAT_ROOMS_FAILURE,
} from '@libs/chat/chat-rooms/redux/types/chatRoomTypes';

import { ChatStateInterface as InitialStateInterface } from '@libs/chat/chat-rooms/models/interfaces/chatInterface';

const initialState: InitialStateInterface = {
  isLoading: false,
  error: '',
  chats: [],
};

export const chatReducer = (
  state: InitialStateInterface = initialState,
  action: ChatRoomDispatchTypes
) => {
  switch (action.type) {
    case CREATE_CHAT_ROOM_LOADING:
    case GET_ALL_CHAT_ROOMS_LOADING:
      return { ...state, isLoading: true };
    case GET_ALL_CHAT_ROOMS_SUCCESS:
      return {
        ...state,
        chats: action.chatRooms,
        isLoading: false,
      };
    case CREATE_CHAT_ROOM_SUCCESS:
      if (state.chats)
        return {
          ...state,
          chats: [...state.chats, action.chatRoom],
          isLoading: false,
        };
      return state;
    case CREATE_CHAT_ROOM_FAILURE:
    case GET_ALL_CHAT_ROOMS_FAILURE:
      return { ...state, error: action.error, isLoading: false };
    default:
      return state;
  }
};
