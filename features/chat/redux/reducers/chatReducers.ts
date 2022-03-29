import {
  CREATE_CHAT_ROOM,
  DELETE_CHAT_ROOM,
  SET_CURRENT_CHAT,
} from '@/features/chat/redux/types';

import { ChatInterface } from '@/features/chat/models/interfaces/chatInterface';

const initialState: ChatInterface[] = [
  {
    chatId: 0,
    name: 'General',
    messages: [],
  },
];

interface ActionInterface {
  type: string;
  payload: ChatInterface;
}

export const chatReducers = (
  state = initialState,
  action: ActionInterface = { type: '', payload: {} as ChatInterface }
) => {
  const newId = state.length > 0 ? state[state.length - 1].chatId : 0;
  switch (action.type) {
    case CREATE_CHAT_ROOM:
      return [...state, { ...action.payload, chatId: newId+1 }];

    case DELETE_CHAT_ROOM:
      return { ...action.payload };

    case SET_CURRENT_CHAT:
      return { ...action.payload };

    default:
      return state;
  }
};
