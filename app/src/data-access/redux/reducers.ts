import { combineReducers } from 'redux';
import { profileFormReducer } from '@libs/shared/lib/profile-form/redux/reducers/profileFormReducers';
import { currentChatReducer } from '@libs/chat/chat-rooms/redux/reducers/currentChatReducer';
import { messageReducer } from '@libs/chat/messages/redux/reducers/messageReducer';
import { chatReducer } from '@libs/chat/chat-rooms/redux/reducers/chatReducer';
import { authReducer } from '@libs/auth/redux/reducers/authReducer';
import { shellReducer } from '@libs/shell/redux/reducers/shellReducer';

export const allReducers = combineReducers({
  profileFormReducer,
  currentChatReducer,
  messageReducer,
  chatReducer,
  authReducer,
  shellReducer,
});
