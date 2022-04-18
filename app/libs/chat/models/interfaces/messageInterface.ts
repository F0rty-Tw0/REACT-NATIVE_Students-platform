export interface MessageInterface {
  chatId: string;
  messageId: string;
  text: string;
  timeStamp: string;
  isFavorite?: boolean;
  userId: string;
  userEmail: string;
  userPictureUrl: string;
}
