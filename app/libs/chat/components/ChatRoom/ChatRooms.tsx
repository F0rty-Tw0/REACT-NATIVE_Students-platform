// COMPONENTS
import { View, FlatList, ScrollView } from 'react-native';
import { ChatRoomEmptyState } from '@libs/chat/components/ChatRoom/ChatRoomEmptyState';
import { ChatRoom } from '@libs/chat/components/ChatRoom/ChatRoom';
import { CreateRoom } from '@libs/chat/components/ChatRoom/CreateRoom';
// HOOKS
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@libs/shared/hooks/redux-hooks/useAppSelector';
import { useEffect } from 'react';
// TYPES
import { ChatInterface } from '@libs/chat/models/interfaces/chatInterface';
// STYLES
import { containerStyles } from '@libs/shared/styles/Containers';
// REDUX
import { getAllChatRoomsAction } from '@libs/chat/redux/actions/chatActions';

export const ChatRooms = () => {
  const dispatch = useDispatch();
  const currentMessages = useAppSelector((state) => state.messageReducer);

  useEffect((): void => {
    dispatch(getAllChatRoomsAction());
  }, [currentMessages]);

  const chatRooms: ChatInterface[] = useAppSelector(
    (state) => state.chatReducer.chats
  );

  const _renderChat = ({ item }: { item: ChatInterface }) => (
    <ChatRoom chatRoom={item} />
  );
  return (
    <View style={containerStyles.mainContainer}>
      {chatRooms.length ? (
        <>
          <ScrollView  style={containerStyles.itemsContainer}>
            <FlatList
              data={chatRooms}
              renderItem={_renderChat}
              keyExtractor={(item) => item.chatId}
            />
          </ScrollView>
          <CreateRoom />
        </>
      ) : (
        <ChatRoomEmptyState />
      )}
    </View>
  );
};
