import { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import { MessageInterface } from '@/features/chat/models/interfaces/messageInterface';
import { useDispatch } from 'react-redux';
import { addAndGetNewMessage } from '@/features/chat/redux/actions/messageActions';

export default function Chat({ selectedChatId }: { selectedChatId: string }) {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

  const chatMessages: MessageInterface[] = useAppSelector((state) => {
    return state.messageReducers;
  });

  return (
    <View style={styles.container}>
      {chatMessages?.map((chatMessage: MessageInterface) => (
        <View key={chatMessage.messageId}>
          <Text>{chatMessage.text}</Text>
          <Text>{chatMessage.isFavorite ? '<3' : ''}</Text>
          <Button title='Delete' onPress={() => console.log(chatMessage)} />
          <Button
            title={chatMessage.isFavorite ? 'Dislike' : 'Like'}
            onPress={() => console.log(chatMessage)}
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
          dispatch(addAndGetNewMessage(selectedChatId, message));
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
