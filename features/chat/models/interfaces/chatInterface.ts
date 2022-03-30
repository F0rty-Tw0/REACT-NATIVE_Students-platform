import { MessageInterface } from '@/features/chat/models/interfaces/messageInterface';

export interface ChatInterface {
  chatId: string;
  name: string;
  messages: MessageInterface[];
}
