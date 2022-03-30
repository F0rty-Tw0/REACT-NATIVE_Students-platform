import { chatRef } from '@/firebase';
import { child, push, set } from 'firebase/database';
import { MessageInterface } from '@/features/chat/models/interfaces/messageInterface';

export const addMessageToChat = async (
  chatId: string,
  text: string
): Promise<MessageInterface> => {
  const newMessageId = push(chatRef).key || '';
  if (newMessageId) {
    console.log(chatId);
    console.log(newMessageId);
    console.log(text);
    await set(child(chatRef, `/${chatId}/messages/${newMessageId}`), {
      text,
    });
  }
  return { chatId, messageId: newMessageId, text } as MessageInterface;
};
