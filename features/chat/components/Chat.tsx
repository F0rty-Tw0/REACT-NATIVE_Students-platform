import { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { useAppDispatcher } from '@/hooks/redux-hooks/useAppDispatcher';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import {
  addMessage,
  deleteMessage,
  likeMessage,
} from '@/features/chat/redux/actions/messageActions';
import { MessageInterface } from '@/features/chat/models/interfaces/messageInterface';

export default function Chat({ selectedChatId }: { selectedChatId: number }) {
  const chatMessages: MessageInterface[] = useAppSelector(
    (state) => state.messageReducer
  );
  const [message, setMessage] = useState('');
console.log(selectedChatId)
  const dispatch = useAppDispatcher();
  return (
    <View style={styles.container}>
      {chatMessages?.map((chatMessage: MessageInterface) => (
        <View key={chatMessage.messageId}>
          <Text>{chatMessage.text}</Text>
          <Text>{chatMessage.isFavorite ? '<3' : ''}</Text>
          <Button
            title='Delete'
            onPress={() => dispatch(deleteMessage(chatMessage))}
          />
          <Button
            title={chatMessage.isFavorite ? 'Dislike' : 'Like'}
            onPress={() => dispatch(likeMessage(chatMessage))}
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
