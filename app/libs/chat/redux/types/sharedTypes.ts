import { MessageInterface } from '../../models/interfaces/messageInterface';

export const SET_CURRENT_CHAT_ROOM = 'SET_CURRENT_CHAT_ROOM';
export const SET_CURRENT_CHAT_ROOM_MESSAGES = 'SET_CURRENT_CHAT_ROOM_MESSAGES';
export const ADD_MESSAGE_TO_CURRENT_CHAT_ROOM =
  'ADD_MESSAGE_TO_CURRENT_CHAT_ROOM';
export const DELETE_MESSAGE_FROM_CURRENT_CHAT_ROOM =
  'DELETE_MESSAGE_FROM_CURRENT_CHAT_ROOM';
export const TOGGLE_IS_LAST_MESSAGE_IN_CURRENT_CHAT_ROOM =
  'TOGGLE_IS_LAST_MESSAGE_IN_CURRENT_CHAT_ROOM';
export const LIKE_MESSAGE_IN_CURRENT_CHAT_ROOM =
  'LIKE_MESSAGE_IN_CURRENT_CHAT_ROOM';
export interface SetCurrentChatRoom {
  type: typeof SET_CURRENT_CHAT_ROOM;
}

export interface SetCurrentChatRoomMessages {
  type: typeof SET_CURRENT_CHAT_ROOM_MESSAGES;
}

export interface AddMessageToCurrentChatRoom {
  type: typeof ADD_MESSAGE_TO_CURRENT_CHAT_ROOM;
  payload: MessageInterface;
}

export interface LikeMessageInCurrentChatRoom {
  type: typeof LIKE_MESSAGE_IN_CURRENT_CHAT_ROOM;
}

export interface DeleteMessageFromCurrentChatRoom {
  type: typeof DELETE_MESSAGE_FROM_CURRENT_CHAT_ROOM;
}
export interface ToggleIsLastMessageInCurrentChatRoom {
  type: typeof TOGGLE_IS_LAST_MESSAGE_IN_CURRENT_CHAT_ROOM;
}

export type ChatDispatchTypes =
  | SetCurrentChatRoom
  | SetCurrentChatRoomMessages
  | AddMessageToCurrentChatRoom
  | LikeMessageInCurrentChatRoom
  | DeleteMessageFromCurrentChatRoom
  | ToggleIsLastMessageInCurrentChatRoom;
