import { MessageInterface } from '@/features/chat/models/interfaces/messageInterface';

export interface ChatInterface {
  chatId: number;
  name: string;
  messages: MessageInterface[];
}
