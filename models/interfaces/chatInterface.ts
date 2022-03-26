import { MessageInterface } from './messageInterface';

export interface ChatInterface {
  chatId: number;
  name: string;
  messages: MessageInterface[];
}
