import { ChatInterface } from '@libs/chat/models/interfaces/chatInterface';

export const GET_ALL_CHAT_ROOMS_LOADING = 'GET_ALL_CHAT_ROOMS_LOADING';
export const GET_ALL_CHAT_ROOMS_SUCCESS = 'GET_ALL_CHAT_ROOMS_SUCCESS';
export const GET_ALL_CHAT_ROOMS_FAILURE = 'GET_ALL_CHAT_ROOMS_FAILURE';
export const CREATE_CHAT_ROOM_LOADING = 'CREATE_CHAT_ROOM_LOADING';
export const CREATE_CHAT_ROOM_SUCCESS = 'CREATE_CHAT_ROOM_SUCCESS';
export const CREATE_CHAT_ROOM_FAILURE = 'CREATE_CHAT_ROOM_FAILURE';
export const SET_CURRENT_CHAT_ROOM = 'SET_CURRENT_CHAT_ROOM';

export interface SetCurrentChatRoom {
  type: typeof SET_CURRENT_CHAT_ROOM;
}

export interface GetAllChatRoomsLoading {
  type: typeof GET_ALL_CHAT_ROOMS_LOADING;
}

export interface GetAllChatRoomsSuccess {
  type: typeof GET_ALL_CHAT_ROOMS_SUCCESS;
  chatRooms: ChatInterface[];
}

export interface GetAllChatRoomsFailure {
  type: typeof GET_ALL_CHAT_ROOMS_FAILURE;
  error: string;
}

export interface CreateChatRoomLoading {
  type: typeof CREATE_CHAT_ROOM_LOADING;
}

export interface CreateChatRoomSuccess {
  type: typeof CREATE_CHAT_ROOM_SUCCESS;
  chatRoom: ChatInterface;
}

export interface CreateChatRoomFailure {
  type: typeof CREATE_CHAT_ROOM_FAILURE;
  error: string;
}

export type ChatRoomDispatchTypes =
  | SetCurrentChatRoom
  | GetAllChatRoomsLoading
  | GetAllChatRoomsSuccess
  | GetAllChatRoomsFailure
  | CreateChatRoomLoading
  | CreateChatRoomSuccess
  | CreateChatRoomFailure;
