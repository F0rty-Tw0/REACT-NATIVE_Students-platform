import { ChatInterface } from '../models/interfaces/chatInterface';

export const ADD_MESSAGE = 'ADD_MESSAGE';
export const EDIT_MESSAGE = 'EDIT_MESSAGE';
export const LIKE_MESSAGE = 'LIKE_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';
export const GET_ALL_CHAT_ROOMS_LOADING = 'GET_ALL_CHAT_ROOMS_LOADING';
export const GET_ALL_CHAT_ROOMS_SUCCESS = 'GET_ALL_CHAT_ROOMS_SUCCESS';
export const GET_ALL_CHAT_ROOMS_FAILURE = 'GET_ALL_CHAT_ROOMS_FAILURE';
export const CREATE_CHAT_ROOM = 'CREATE_CHAT_ROOM';
export const CREATE_CHAT_ROOM_LOADING = 'CREATE_CHAT_ROOM_LOADING';
export const CREATE_CHAT_ROOM_SUCCESS = 'CREATE_CHAT_ROOM_SUCCESS';
export const CREATE_CHAT_ROOM_FAILURE = 'CREATE_CHAT_ROOM_FAILURE';
export const DELETE_CHAT_ROOM = 'DELETE_CHAT_ROOM';
export const ADD_USER_TO_CHAT = 'ADD_USER_TO_CHAT';
export const REMOVE_USER_FROM_CHAT = 'REMOVE_USER_FROM_CHAT';
export const SET_CURRENT_CHAT = 'SET_CURRENT_CHAT';
export const SET_CURRENT_CHAT_MESSAGES = 'SET_CURRENT_CHAT_MESSAGES';
export const SET_CURRENT_CHAT_USERS = 'SET_CURRENT_CHAT_USERS';

export interface GetAllChatRoomsLoading {
  type: typeof GET_ALL_CHAT_ROOMS_LOADING;
}

export interface GetAllChatRoomsSuccess {
  type: typeof GET_ALL_CHAT_ROOMS_SUCCESS;
  payload: ChatInterface[];
}

export interface GetAllChatRoomsFailure {
  type: typeof GET_ALL_CHAT_ROOMS_FAILURE;
}

export interface CreateChatRoomLoading {
  type: typeof CREATE_CHAT_ROOM_LOADING;
}

export interface CreateChatRoomSuccess {
  type: typeof CREATE_CHAT_ROOM_SUCCESS;
  payload: ChatInterface;
}

export interface CreateChatRoomFailure {
  type: typeof CREATE_CHAT_ROOM_FAILURE;
}

export interface SetCurrentChat {
  type: typeof SET_CURRENT_CHAT;
}

export interface SetCurrentChatMessages {
  type: typeof SET_CURRENT_CHAT_MESSAGES;
}

export type ChatDispatchTypes =
  | GetAllChatRoomsLoading
  | GetAllChatRoomsSuccess
  | GetAllChatRoomsFailure
  | CreateChatRoomLoading
  | CreateChatRoomSuccess
  | CreateChatRoomFailure
  | SetCurrentChat
  | SetCurrentChatMessages;
