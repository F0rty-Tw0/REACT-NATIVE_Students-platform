import { MessageInterface } from '@libs/chat/messages/models/interfaces/messageInterface';

export interface ChatStateInterface {
  isLoading: boolean;
  error: string;
  chats: ChatInterface[];
}
export interface ChatInterface {
  chatId: string;
  name: string;
  messages: MessageInterface[];
}
