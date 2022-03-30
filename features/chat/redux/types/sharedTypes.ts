import { MessageInterface } from '../../models/interfaces/messageInterface';

export const SET_CURRENT_CHAT_ROOM = 'SET_CURRENT_CHAT_ROOM';
export const SET_CURRENT_CHAT_ROOM_MESSAGES = 'SET_CURRENT_CHAT_ROOM_MESSAGES';
export const ADD_MESSAGE_TO_CURRENT_CHAT_ROOM =
  'ADD_MESSAGE_TO_CURRENT_CHAT_ROOM';
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

export type ChatDispatchTypes =
  | SetCurrentChatRoom
  | SetCurrentChatRoomMessages
  | AddMessageToCurrentChatRoom;
