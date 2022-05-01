// COMPONENTS
import { View } from 'react-native';
import { LabeledInput } from '@libs/shared/components/LabeledInput';
import { ActionButton } from '@libs/shared/components/ActionButton';
// HOOKS
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// REDUX
import { createAndGetChatRoom } from '@libs/chat/chat-rooms/redux/actions/chatActions';
// STYLES
import { containerStyles } from '@libs/shared/styles/Containers';

export const CreateRoom = () => {
  const [chatName, setChatName] = useState('');
  const dispatch = useDispatch();

  const handleCreateChatRoom = () => {
    dispatch(createAndGetChatRoom(chatName));
    setChatName('');
  };
  return (
    <View style={containerStyles.itemsContainer}>
      <LabeledInput
        label='Chat Name'
        placeholderText='Enter a chat name'
        value={chatName}
        setValue={setChatName}
      />
      <ActionButton buttonText='Create Chat' onPress={handleCreateChatRoom} />
    </View>
  );
};
