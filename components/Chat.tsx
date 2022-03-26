import { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {
  addMessage,
  deleteMessage,
  likeMessage,
} from '@/redux/actions/chatActions';
import { MessageInterface } from '@/models/interfaces/messageInterface';

export default function Chat() {
  const allMessages: MessageInterface[] = useSelector(
    (state: any) => state.chatReducer.messages
  );
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      {allMessages.map((chatMessage: MessageInterface) => (
        <View key={chatMessage.id}>
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
          dispatch(addMessage(message));
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
