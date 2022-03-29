import { useAppDispatcher } from '@/hooks/redux-hooks/useAppDispatcher';
import {
  createChatRoom,
  setCurrentChat,
} from '@/features/chat/redux/actions/chatActions';
import { setCurrentChatMessages } from '@/features/chat/redux/actions/messageActions';
import { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import { ChatInterface } from '@/features/chat/models/interfaces/chatInterface';
import Chat from '@/features/chat/components/Chat';

export default function ChatRoom() {
  const [name, setName] = useState('');
  const [selectedChatIndex, setSelectedChatIndex] = useState();
  const dispatch = useAppDispatcher();
  const chatRooms: ChatInterface[] = useAppSelector(
    (state) => state.chatReducers
  );
  return !selectedChatIndex ? (
    <View>
      <Text>Select from existing Chat Rooms</Text>
      <Picker
        selectedValue={selectedChatIndex}
        onValueChange={(chatIndex) => {
          console.log(chatIndex);
          setSelectedChatIndex(chatIndex);
          dispatch(setCurrentChat(chatRooms[chatIndex || 0]));
          dispatch(setCurrentChatMessages(chatRooms[chatIndex || 0].messages));
        }}
      >
        <Picker.Item label='Select a chat' />
        {chatRooms.map((room, index) => {
          return (
            <Picker.Item key={room.chatId} label={room.name} value={index} />
          );
        })}
      </Picker>
      <Text>Or Create your own</Text>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder='Enter a chat room name'
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
  ) : (
    <View>
      <Chat selectedChatId={chatRooms[selectedChatIndex]?.chatId} />
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
