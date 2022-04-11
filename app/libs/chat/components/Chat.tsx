import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import { MessageInterface } from '@libs/chat/models/interfaces/messageInterface';
import {
  addMessage,
  toggleLikeMessage,
  deleteMessage,
} from '@libs/chat/redux/actions/messageActions';

interface ChatProps {
  selectedChatId: string;
  selectedChatName: string;
}

export default function Chat({ selectedChatId, selectedChatName }: ChatProps) {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

  const chatMessages: MessageInterface[] = useAppSelector((state) => {
    return state.messageReducer;
  });

  return (
    <View style={styles.container}>
      <Text>Chatting in {selectedChatName}</Text>
      {chatMessages?.map((chatMessage: MessageInterface) => (
        <View key={chatMessage.messageId}>
          <Text>{chatMessage.text}</Text>
          <Text>{chatMessage.isFavorite ? '<3' : ''}</Text>
          <Button
            title='Delete'
            onPress={() =>
              dispatch(deleteMessage(selectedChatId, chatMessage.messageId))
            }
          />
          <Button
            title={chatMessage.isFavorite ? 'Dislike' : 'Like'}
            onPress={() =>
              dispatch(
                toggleLikeMessage(
                  selectedChatId,
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
        onPress={() => {
          setMessage('');
          dispatch(addMessage(selectedChatId, message));
        }}
      />
    </View>
  );
}

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
