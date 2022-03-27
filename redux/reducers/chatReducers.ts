import {
  CREATE_CHAT_ROOM,
  DELETE_CHAT_ROOM,
  SET_CURRENT_CHAT,
} from '@/redux/types';

import { ChatInterface } from '@/models/interfaces/chatInterface';

const initialState: ChatInterface = {
  chatId: 0,
  name: 'General',
  messages: [],
};

interface ActionInterface {
  type: string;
  payload: ChatInterface;
}

export const chatReducers = (
  state = initialState,
  action: ActionInterface = { type: '', payload: {} as ChatInterface }
) => {
  switch (action.type) {
    case CREATE_CHAT_ROOM:
      return { ...action.payload };

    case DELETE_CHAT_ROOM:
      return { ...action.payload };

    case SET_CURRENT_CHAT:
      return { ...action.payload };

    default:
      return state;
  }
};
