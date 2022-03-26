import { combineReducers } from 'redux';
import { chatReducer } from '@/redux/reducers/chatReducer';
import { authReducer } from '@/redux/reducers/authReducer';
import { appReducer } from '@/redux/reducers/appReducer';

export const allReducers = combineReducers({
  chatReducer,
  authReducer,
  appReducer,
});
