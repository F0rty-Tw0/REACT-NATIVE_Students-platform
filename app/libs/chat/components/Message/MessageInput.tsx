// COMPONENTS
import { View, TextInput, Image, Pressable } from 'react-native';
import { TabBarIcon } from '@libs/shared/components/TabBarIcon';
import User from '@images/user.svg';
// HOOKS
import { useAppSelector } from '@libs/shared/hooks/redux-hooks/useAppSelector';
// STYLES
import { chatContainerStyle } from '@libs/chat/styles/chatContainerStyle';
import { chatImageStyle } from '@libs/chat/styles/chatImageStyle';
import { chatInputStyle } from '@libs/chat/styles/chatInputStyle';
interface MessageInputProps {
  message: string;
  setMessage: (message: string) => void;
  sendMessage: () => void;
}
export const MessageInput = ({
  message,
  setMessage,
  sendMessage,
}: MessageInputProps) => {
  const { pictureUrl } = useAppSelector((state) => state.profileFormReducer);
  return (
    <View style={chatContainerStyle.messageInputContainer}>
      <View style={chatImageStyle.messageImageContainer}>
        {pictureUrl ? (
          <Image
            style={chatImageStyle.messageImage}
            source={{ uri: pictureUrl }}
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
      <TextInput
        style={chatInputStyle.messageInput}
        onChangeText={setMessage}
        value={message}
        placeholder='Write message'
        placeholderTextColor={'#AAAAAA'}
      />
      <Pressable
        disabled={!message.length}
        style={({ pressed }) => [
          [
            chatContainerStyle.messageSendContainer,
            message.length
              ? [
                  {
                    opacity: pressed ? 0.7 : 1,
                  },
                  chatContainerStyle.messageSendContainerActive,
                ]
              : chatContainerStyle.messageSendContainerDisabled,
          ],
        ]}
        onPress={sendMessage}
      >
        <TabBarIcon
          style={{ marginBottom: 5, marginRight: 3 }}
          size={20}
          name='paper-plane'
          color='#FFFFFF'
        />
      </Pressable>
    </View>
  );
};
