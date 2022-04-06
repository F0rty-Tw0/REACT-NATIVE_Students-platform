import { combineReducers } from 'redux';
import { currentChatReducer } from '@/features/chat/redux/reducers/currentChatReducer';
import { messageReducer } from '@/features/chat/redux/reducers/messageReducer';
import { chatReducer } from '@/features/chat/redux/reducers/chatReducer';
import { authReducer } from '@/features/auth/redux/reducers/authReducer';
import { appReducer } from '@/features/core/redux/reducers/appReducer';

export const allReducers = combineReducers({
  currentChatReducer,
  messageReducer,
  chatReducer,
  authReducer,
  appReducer,
});
