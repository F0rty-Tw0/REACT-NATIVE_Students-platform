import { child, get, push, set } from 'firebase/database';
import { chatRef } from '@app/data-access/firebase';
// MODELS
import { ChatInterface } from '@libs/chat/chat-rooms/models/interfaces/chatInterface';
import { MessageInterface } from '@libs/chat/messages/models/interfaces/messageInterface';

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
  if (chatRooms) {
    for (const [chatId, chat] of Object.entries(chatRooms)) {
      const thisChat: ChatInterface = chat as ChatInterface;
      const chatRoomMessages: MessageInterface[] = [];
      if (thisChat.messages) {
        for (const [messageId, message] of Object.entries(thisChat.messages)) {
          chatRoomMessages.push({ ...message, messageId });
        }
      }
      allChatRooms.push({
        ...thisChat,
        chatId,
        messages: chatRoomMessages,
      });
    }
  }
  return allChatRooms;
};
