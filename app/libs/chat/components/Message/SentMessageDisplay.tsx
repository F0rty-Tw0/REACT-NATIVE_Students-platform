// COMPONENTS
import { View, Text } from 'react-native';
// TYPES
import { MessageInterface } from '@libs/chat/models/interfaces/messageInterface';
// STYLES
import { chatContainerStyle } from '@libs/chat/styles/chatContainerStyle';
import { chatTextStyle } from '@libs/chat/styles/chatTextStyle';

interface SentMessageDisplayProps {
  message: MessageInterface;
}
export const SentMessageDisplay = ({ message }: SentMessageDisplayProps) => {
  return (
    <>
      <View
        style={[
          chatContainerStyle.messageContainer,
          chatContainerStyle.sentMessageContainer,
          { marginBottom: 2 },
        ]}
      >
        <Text style={chatTextStyle.sentMessageText}>{message.text}</Text>
      </View>
      {message.isLast && (
        <Text
          style={[
            chatTextStyle.messageSubtext,
            chatTextStyle.sentMessageSubtext,
          ]}
        >
          {message.timeStamp}
        </Text>
      )}
    </>
  );
};
