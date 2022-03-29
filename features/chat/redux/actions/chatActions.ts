import { ChatInterface } from '@/features/chat/models/interfaces/chatInterface';
import {
  CREATE_CHAT_ROOM,
  DELETE_CHAT_ROOM,
  SET_CURRENT_CHAT,
} from '@/features/chat/redux/types';

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
