import { combineReducers } from 'redux';
import { currentChatReducers } from '@/features/chat/redux/reducers/currentChatReducers';
import { messageReducers } from '@/features/chat/redux/reducers/messageReducers';
import { chatReducers } from '@/features/chat/redux/reducers/chatReducers';
import { authReducer } from '@/features/auth/redux/reducers/authReducer';
import { appReducer } from '@/features/core/redux/reducers/appReducer';

export const allReducers = combineReducers({
  currentChatReducers,
  messageReducers,
  chatReducers,
  authReducer,
  appReducer,
});
