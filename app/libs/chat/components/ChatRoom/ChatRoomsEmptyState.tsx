// COMPONENTS
import { View, Text } from 'react-native';
import { CreateRoom } from '@libs/chat/components/ChatRoom/CreateRoom';
import NoChat from '@images/no-chats.svg';
// STYLES
import { containerStyles } from '@libs/shared/styles/Containers';
import { chatTextStyle } from '@libs/chat/styles/chatTextStyle';
import { textStyle } from '@libs/shared/styles/Text';

export const ChatRoomsEmptyState = () => {
  return (
    <View style={[containerStyles.itemsContainer, { alignItems: 'center' }]}>
      <NoChat />
      <Text style={[textStyle.title, { marginTop: 20, marginBottom: 20 }]}>
        No Chats
      </Text>
      <Text style={[chatTextStyle.emptyState, { marginBottom: 30 }]}>
        You can start a new chat room by entering a name below.
      </Text>
      <CreateRoom />
    </View>
  );
};
