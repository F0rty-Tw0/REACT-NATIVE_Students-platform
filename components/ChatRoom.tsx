import { useAppDispatcher } from '@/hooks/redux-hooks/useAppDispatcher';
import { createChatRoom } from '@/redux/actions/chatActions';
import { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';

export default function ChatRoom() {
  const [name, setName] = useState('');
  const dispatch = useAppDispatcher();
  return (
    <View>
      <Text>Create a Chat Room</Text>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder='Send a message'
      />
      <Button
        disabled={name.length === 0}
        title='Create your room'
        onPress={() => {
          dispatch(createChatRoom(name));
          setName('');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
