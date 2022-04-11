import { chatRef } from '@/app/data-access/firebase';
import { child, get, push, set } from 'firebase/database';
import { ChatInterface } from '@libs/chat/models/interfaces/chatInterface';

export const createDBChatRoom = async (
  chatRoomName: string
): Promise<ChatInterface> => {
  const newChatId = push(chatRef).key || '';
  if (newChatId) {
    await set(child(chatRef, `/${newChatId}`), { name: chatRoomName });
  }
  return { name: chatRoomName, chatId: newChatId } as ChatInterface;
};

export const getAllChatRooms = async (): Promise<ChatInterface[]> => {
  const dataSnapshot = await get(chatRef);
  const chatRooms = dataSnapshot.val();
  const allChatRooms: ChatInterface[] = [];
  for (const [chatId, chat] of Object.entries(chatRooms)) {
    allChatRooms.push({ ...(chat as ChatInterface), chatId });
  }
  console.log(allChatRooms);
  return allChatRooms;
};
