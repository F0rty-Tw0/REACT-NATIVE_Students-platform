import { chatRef } from '@/firebase';
import { child, get, push, set } from 'firebase/database';
import { ChatInterface } from '@/features/chat/models/interfaces/chatInterface';

export const createDBChatRoom = async (chatRoomName: string) => {
  const newPostKey = push(chatRef).key || '';
  if (newPostKey) {
    await set(child(chatRef, `/${newPostKey}`), chatRoomName);
  }
  return { name: chatRoomName, chatId: newPostKey } as ChatInterface;
};

export const getAllChatRooms = async () => {
  const dataSnapshot = await get(chatRef);
  const chatRooms = dataSnapshot.val();
  const allChatRooms: ChatInterface[] = [];
  for (const [key, value] of Object.entries(chatRooms)) {
    allChatRooms.push({ ...(value as ChatInterface), chatId: key });
  }
  console.log(allChatRooms);
  return allChatRooms;
};
