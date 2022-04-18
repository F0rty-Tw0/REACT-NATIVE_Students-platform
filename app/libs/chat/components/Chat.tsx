import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { useAppSelector } from '@libs/shared/hooks/redux-hooks/useAppSelector';
import { MessageInterface } from '@libs/chat/models/interfaces/messageInterface';
import {
  addMessage,
  toggleLikeMessage,
  deleteMessage,
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

  const handleAddMessage = () => {
    const messageObject = {
      chatId: chat.chatId,
      messageId: '',
      text: message,
      userId: user.id,
      userEmail: user.email,
      timeStamp: dayjs().format('DD-MMM HH:mm'),
      userPictureUrl,
    };
    dispatch(addMessage(messageObject));
    setMessage('');
  };
  return (
    <View style={styles.container}>
      <Text>Chatting in {chat.name}</Text>
      {chatMessages?.map((chatMessage: MessageInterface) => (
        <View key={chatMessage.messageId}>
          <Text>{chatMessage.text}</Text>
          <Text>{chatMessage.isFavorite ? '<3' : ''}</Text>
          <Button
            title='Delete'
            onPress={() =>
              dispatch(deleteMessage(chat.chatId, chatMessage.messageId))
            }
          />
          <Button
            title={chatMessage.isFavorite ? 'Dislike' : 'Like'}
            onPress={() =>
              dispatch(
                toggleLikeMessage(
                  chat.chatId,
                  chatMessage.messageId,
                  !chatMessage.isFavorite
                )
              )
            }
          />
        </View>
      ))}
      <TextInput
        style={styles.input}
        onChangeText={setMessage}
        value={message}
        placeholder='Send a message'
      />
      <Button
        disabled={message.length === 0}
        title='Add'
        onPress={handleAddMessage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
