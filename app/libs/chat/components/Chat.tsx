import dayjs from 'dayjs';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import { MessageInput } from './Message/MessageInput';
import { useAppSelector } from '@libs/shared/hooks/redux-hooks/useAppSelector';
import { MessageInterface } from '@libs/chat/models/interfaces/messageInterface';
import { ChatRoomEmptyState } from '@libs/chat/components/ChatRoom/ChatRoomEmptyState';
import { SentMessageDisplay } from '@libs/chat/components/Message/SentMessageDisplay';
import { IncomingMessageDisplay } from '@libs/chat/components/Message/IncomingMessageDisplay';
import { IncomingMessageWithoutPicture } from '@libs/chat/components/Message/IncomingMessageWithoutPicture';
import {
  addMessage,
  toggleLastMessage,
} from '@libs/chat/redux/actions/messageActions';
import { ShellScreenProp } from '@libs/shell/types/shellScreenTypes';
import { useNavigation } from '@react-navigation/native';
import { ChatInterface } from '../models/interfaces/chatInterface';
import { AuthUserInterface } from '@libs/auth/models/interfaces/authInterface';
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
    dayjs().format('DD-MMM HH:mm') === lastMessage?.timeStamp &&
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
        <ChatRoomEmptyState chatRoomName={chat.name} />
      )}
      <MessageInput
        message={message}
        setMessage={setMessage}
        sendMessage={handleSendMessage}
      />
    </>
  );
};
