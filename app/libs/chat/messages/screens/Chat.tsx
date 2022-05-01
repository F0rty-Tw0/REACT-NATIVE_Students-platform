// PACKAGES
import dayjs from 'dayjs';
// COMPONENTS
import { FlatList } from 'react-native';
import { MessageInput } from '@libs/chat/messages/components/MessageInput';
import { MessagesEmptyState } from '@libs/chat/messages/components/MessagesEmptyState';
import { SentMessageDisplay } from '@libs/chat/messages/components/SentMessageDisplay';
import { IncomingMessageDisplay } from '@libs/chat/messages/components/IncomingMessageDisplay';
import { IncomingMessageWithoutPicture } from '@libs/chat/messages/components/IncomingMessageWithoutPicture';
// REDUX
import {
  addMessage,
  toggleLastMessage,
} from '@libs/chat/messages/redux/actions/messageActions';
// HOOKS
import { useEffect, useRef, useState } from 'react';
import { useAppSelector } from '@libs/shared/hooks/redux-hooks/useAppSelector';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
// MODELS
import { ChatInterface } from '../../chat-rooms/models/interfaces/chatInterface';
import { MessageInterface } from '@libs/chat/messages/models/interfaces/messageInterface';
import { AuthUserInterface } from '@libs/auth/models/interfaces/authInterface';
// TYPES
import { ShellScreenProp } from '@libs/shell/types/shellScreenTypes';
export const Chat = () => {
  const chat: ChatInterface = useAppSelector(
    (state) => state.currentChatReducer
  );

  const chatMessages: MessageInterface[] = useAppSelector((state) => {
    return state.messageReducer;
  });

  const userPictureUrl: string = useAppSelector(
    (state) => state.profileFormReducer.pictureUrl
  );

  const user = useAppSelector<AuthUserInterface>(
    (state) => state.authReducer.user
  );

  const navigation = useNavigation<ShellScreenProp>();

  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

  useEffect(() => {
    navigation.setOptions({ title: chat.name });
  }, [chat.name]);

  const handleSendMessage = () => {
    const lastMessage = chatMessages.find(
      (chatMessage) =>
        chatMessages[chatMessages.length - 1].messageId ===
          chatMessage.messageId &&
        chatMessages[chatMessages.length - 1].userId === user.id
    );
    if (dayjs().format('DD-MMM HH:mm') === lastMessage?.timeStamp)
      dispatch(
        toggleLastMessage(
          chat.chatId,
          lastMessage?.messageId || '',
          !lastMessage?.isLast || false
        )
      );
    const messageObject = {
      chatId: chat.chatId,
      messageId: '',
      text: message,
      userId: user.id,
      isLast: true,
      userEmail: user.email,
      timeStamp: dayjs().format('DD-MMM HH:mm'),
      userPictureUrl,
    };
    dispatch(addMessage(messageObject));
    setMessage('');
  };

  const _renderMessages = ({ item }: { item: MessageInterface }) => {
    if (item.userId !== user.id) {
      return item.isLast ? (
        <IncomingMessageDisplay message={item} />
      ) : (
        <IncomingMessageWithoutPicture message={item} />
      );
    } else {
      return <SentMessageDisplay message={item} />;
    }
  };

  const flatListRef = useRef<FlatList>(null);
  return (
    <>
      {chatMessages.length ? (
        <FlatList
          style={{ backgroundColor: '#FFFFFF', paddingTop: 10 }}
          ref={flatListRef}
          onContentSizeChange={() => {
            flatListRef.current?.scrollToEnd({ animated: true });
          }}
          data={chatMessages}
          renderItem={_renderMessages}
          keyExtractor={(item) => item.messageId}
        />
      ) : (
        <MessagesEmptyState chatRoomName={chat.name} />
      )}
      <MessageInput
        message={message}
        setMessage={setMessage}
        sendMessage={handleSendMessage}
      />
    </>
  );
};
