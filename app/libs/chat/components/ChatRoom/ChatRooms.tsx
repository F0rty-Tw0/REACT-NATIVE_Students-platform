// COMPONENTS
import { View, FlatList } from 'react-native';
import { ChatRoomsEmptyState } from '@libs/chat/components/ChatRoom/ChatRoomsEmptyState';
import { ChatRoomDisplay } from '@libs/chat/components/ChatRoom/ChatRoomDisplay';
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
    <ChatRoomDisplay chatRoom={item} />
  );

  return (
    <View style={containerStyles.mainContainer}>
      {chatRooms.length ? (
        <>
          <FlatList
            style={containerStyles.itemsContainer}
            data={chatRooms}
            renderItem={_renderChat}
            keyExtractor={(item) => item.chatId}
          />
          <CreateRoom />
        </>
      ) : (
        <ChatRoomsEmptyState />
      )}
    </View>
  );
};
