// COMPONENTS
import { View, Text } from 'react-native';
// TYPES
import { MessageInterface } from '@libs/chat/messages/models/interfaces/messageInterface';
// STYLES
import { chatContainerStyle } from '@libs/chat/shared/styles/chatContainerStyle';
import { chatTextStyle } from '@libs/chat/shared/styles/chatTextStyle';

interface IncomingMessageWithoutPictureProps {
  message: MessageInterface;
}
export const IncomingMessageWithoutPicture = ({
  message,
}: IncomingMessageWithoutPictureProps) => {
  return (
    <View
      style={[
        chatContainerStyle.twoColumnsContainer,
        { paddingTop: 0, paddingBottom: 2, paddingLeft: 60 },
      ]}
    >
      <View
        style={[
          chatContainerStyle.messageContainer,
          chatContainerStyle.incomingMessageContainer,
          { marginBottom: 0 },
        ]}
      >
        <Text style={chatTextStyle.incomingMessageText}>{message.text}</Text>
      </View>
    </View>
  );
};
