// COMPONENTS
import { View, Text, Image } from 'react-native';
// STYLES
import { containerStyles } from '@libs/shared/styles/Containers';
import { chatImageStyle } from '@libs/chat/styles/chatImageStyle';
import { chatTextStyle } from '@libs/chat/styles/chatTextStyle';
import { textStyle } from '@libs/shared/styles/Text';

interface ChatRoomEmptyStateProps {
  chatRoomName: string;
}
export const ChatRoomEmptyState = ({
  chatRoomName,
}: ChatRoomEmptyStateProps) => {
  const imageUrl = '';
  return (
    <View style={containerStyles.mainContainer}>
      <View style={[containerStyles.itemsContainer, { alignItems: 'center' }]}>
        <Text style={[chatTextStyle.emptyState, { marginBottom: 20 }]}>
          Start a conversation in
        </Text>
        {imageUrl ? (
          <Image
            source={{ uri: imageUrl }}
            style={chatImageStyle.emptyStateImage}
          />
        ) : (
          <Image
            source={require('@images/chat-placeholder.png')}
            style={chatImageStyle.emptyStateImage}
          />
        )}
        <Text style={[textStyle.title, { marginTop: 20 }]}>{chatRoomName}</Text>
      </View>
    </View>
  );
};
