import { combineReducers } from 'redux';
import { currentChatReducers } from '@/features/chat/redux/reducers/currentChatReducers';
import { messageReducer } from '@/features/chat/redux/reducers/messageReducer';
import { chatReducers } from '@/features/chat/redux/reducers/chatReducers';
import { authReducer } from '@/features/auth/redux/reducers/authReducer';
import { appReducer } from '@/redux/reducers/appReducer';

export const allReducers = combineReducers({
  currentChatReducers,
  messageReducer,
  chatReducers,
  authReducer,
  appReducer,
});
