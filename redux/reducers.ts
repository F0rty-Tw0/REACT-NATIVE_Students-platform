import { combineReducers } from 'redux';
import { messageReducer } from '@/features/chat/redux/reducers/messageReducer';
import { chatReducers } from '@/features/chat/redux/reducers/chatReducers';
import { authReducer } from '@/features/auth/redux/reducers/authReducer';
import { appReducer } from '@/redux/reducers/appReducer';

export const allReducers = combineReducers({
  messageReducer,
  chatReducers,
  authReducer,
  appReducer,
});
