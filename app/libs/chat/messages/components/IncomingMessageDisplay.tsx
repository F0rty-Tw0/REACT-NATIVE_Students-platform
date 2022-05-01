// COMPONENTS
import { View, Text, Image } from 'react-native';
import User from '@images/user.svg';
// TYPES
import { MessageInterface } from '@libs/chat/messages/models/interfaces/messageInterface';
// STYLES
import { chatContainerStyle } from '@libs/chat/shared/styles/chatContainerStyle';
import { chatTextStyle } from '@libs/chat/shared/styles/chatTextStyle';
import { chatImageStyle } from '@libs/chat/shared/styles/chatImageStyle';

interface IncomingMessageDisplayProps {
  message: MessageInterface;
}

export const IncomingMessageDisplay = ({
  message,
}: IncomingMessageDisplayProps) => {
  return (
    <>
      <View style={chatContainerStyle.twoColumnsContainer}>
        <View style={chatImageStyle.messageImageContainer}>
          {message.userPictureUrl ? (
            <Image
              style={chatImageStyle.messageImage}
              source={{ uri: message.userPictureUrl }}
            />
          ) : (
            <User
              height='100%'
              width='100%'
              viewBox='0 0 80 80'
              preserveAspectRatio='xMinYMin slice'
            />
          )}
        </View>
        <View
          style={[
            chatContainerStyle.messageContainer,
            chatContainerStyle.incomingMessageContainer,
          ]}
        >
          <Text style={chatTextStyle.incomingMessageText}>{message.text}</Text>
        </View>
      </View>
      <Text
        style={[
          chatTextStyle.messageSubtext,
          chatTextStyle.incomingMessageSubtext,
        ]}
      >
        {message.timeStamp}
      </Text>
    </>
  );
};
