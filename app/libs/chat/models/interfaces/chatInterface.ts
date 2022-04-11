import { MessageInterface } from '@libs/chat/models/interfaces/messageInterface';

export interface ChatInterface {
  chatId: string;
  name: string;
  messages: MessageInterface[];
}
