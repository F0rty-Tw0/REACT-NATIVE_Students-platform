import { useAppDispatcher } from '@/hooks/redux-hooks/useAppDispatcher';
import {
  createAndGetChatRoom,
  getAllChatRoomsAction,
  setCurrentChatRoom,
} from '@/features/chat/redux/actions/chatActions';
import { setCurrentChatMessages } from '@/features/chat/redux/actions/messageActions';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import { ChatInterface } from '@/features/chat/models/interfaces/chatInterface';
import Chat from '@/features/chat/components/Chat';
import { useDispatch } from 'react-redux';
export default function ChatRoom() {
  const [name, setName] = useState('');
  const appDispatch = useAppDispatcher();
  const dispatch = useDispatch();
  const chatRooms: ChatInterface[] = useAppSelector(
    (state) => state.chatReducers
  );
  const currentChatRoom: ChatInterface = useAppSelector(
    (state) => state.currentChatReducers
  );

  useEffect((): void => {
    dispatch(getAllChatRoomsAction());
  }, []);

  return !currentChatRoom && chatRooms? (
    <View>
      <Text>Select from existing Chat Rooms</Text>
      <Picker
        selectedValue={currentChatRoom || ''}
        onValueChange={(chatIndex) => {
          const selectedChatRoom = chatRooms[chatIndex];
          appDispatch(setCurrentChatRoom(selectedChatRoom));
          appDispatch(setCurrentChatMessages(selectedChatRoom.messages));
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
          dispatch(createAndGetChatRoom(name));
          setName('');
        }}
      />
    </View>
  ) : (
    <View>
      <Chat selectedChatId={currentChatRoom?.chatId} />
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
