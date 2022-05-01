// COMPONENTS
import { View, Text, Image, Pressable } from 'react-native';
// HOOKS
import { useAppDispatcher } from '@libs/shared/hooks/redux-hooks/useAppDispatcher';
// TYPES
import { ChatInterface } from '@libs/chat/chat-rooms/models/interfaces/chatInterface';
import { ShellScreenProp } from '@libs/shell/types/shellScreenTypes';
// STYLES
import { chatContainerStyle } from '@libs/chat/shared/styles/chatContainerStyle';
import { chatImageStyle } from '@libs/chat/shared/styles/chatImageStyle';
import { chatTextStyle } from '@libs/chat/shared/styles/chatTextStyle';
import { shadowStyles } from '@libs/shared/styles/Shadows';
// REDUX
import { setCurrentChatRoom } from '@libs/chat/chat-rooms/redux/actions/chatActions';
import { useNavigation } from '@react-navigation/native';
import { setCurrentChatMessages } from '@libs/chat/messages/redux/actions/messageActions';
import { containerStyles } from '@libs/shared/styles/Containers';

interface ChatRoomProps {
  chatRoom: ChatInterface;
}

export const ChatRoomDisplay = ({ chatRoom }: ChatRoomProps) => {
  const dispatch = useAppDispatcher();
  const navigation = useNavigation<ShellScreenProp>();

  const handleChatSelection = () => {
    dispatch(setCurrentChatRoom(chatRoom));
    dispatch(setCurrentChatMessages(chatRoom.messages));
    navigation.navigate('Chat');
  };

  const imageUrl = '';
  return (
    <Pressable
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.7 : 1,
        },
        [
          chatContainerStyle.twoColumnsContainer,
          { paddingTop: 10, paddingBottom: 10 },
        ],
      ]}
      onPress={handleChatSelection}
    >
      <View
        style={[
          chatImageStyle.chatRoomImageContainer,
          shadowStyles.containerShadow,
        ]}
      >
        {imageUrl ? (
          <Image source={{ uri: imageUrl }} style={chatImageStyle.chatImage} />
        ) : (
          <Image
            source={require('@images/chat-placeholder.png')}
            style={chatImageStyle.chatImage}
          />
        )}
      </View>
      <View style={{ width: '100%' }}>
        <Text style={chatTextStyle.chatTitle}>{chatRoom.name}</Text>
        {chatRoom.messages?.length > 0 && (
          <View style={containerStyles.twoColumnsContainer}>
            <Text style={chatTextStyle.chatSubtitle}>
              {chatRoom.messages[chatRoom.messages.length - 1].text}
            </Text>
            <Text
              style={[
                chatTextStyle.chatSubtitle,
                {
                  marginRight: '25%',
                  textAlign: 'right',
                },
              ]}
            >
              {chatRoom.messages[chatRoom.messages.length - 1].timeStamp}
            </Text>
          </View>
        )}
      </View>
    </Pressable>
  );
};
