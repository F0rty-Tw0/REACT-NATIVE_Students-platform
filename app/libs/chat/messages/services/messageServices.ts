import { child, push, set, remove, update } from 'firebase/database';
import { chatRef } from '@app/data-access/firebase';
import { MessageInterface } from '@libs/chat/messages/models/interfaces/messageInterface';

export const addMessageToChat = async (
  messageObject: MessageInterface
): Promise<MessageInterface> => {
  const messageId = push(chatRef).key || '';
  if (messageId) {
    await set(
      child(chatRef, `/${messageObject.chatId}/messages/${messageId}`),
      {
        ...messageObject,
      }
    );
  }
  return {
    ...messageObject,
    messageId,
  } as MessageInterface;
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

export const toggleIsLastToMessage = async (
  chatId: string,
  messageId: string,
  isLast: boolean
): Promise<void> => {
  await update(child(chatRef, `/${chatId}/messages/${messageId}`), {
    isLast,
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
