import { chatRef } from '@/app/data-access/firebase';
import { child, push, set, remove, update } from 'firebase/database';
import { MessageInterface } from '@libs/chat/models/interfaces/messageInterface';

export const addMessageToChat = async (
  chatId: string,
  text: string
): Promise<MessageInterface> => {
  const newMessageId = push(chatRef).key || '';
  if (newMessageId) {
    await set(child(chatRef, `/${chatId}/messages/${newMessageId}`), {
      text,
    });
  }
  return { chatId, messageId: newMessageId, text } as MessageInterface;
};

export const toggleLikeToMessage = async (
  chatId: string,
  messageId: string,
  isFavorite: boolean
): Promise<void> => {
  await update(child(chatRef, `/${chatId}/messages/${messageId}`), {
    isFavorite,
  });
};

export const deleteMessageFromChat = async (
  chatId: string,
  messageId: string
): Promise<void> => {
  if (messageId && chatId) {
    await remove(child(chatRef, `/${chatId}/messages/${messageId}`));
  }
};
