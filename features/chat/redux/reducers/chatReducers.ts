import {
  CREATE_CHAT_ROOM,
  CREATE_CHAT_ROOM_SUCCESS,
  DELETE_CHAT_ROOM,
  GET_ALL_CHAT_ROOMS_SUCCESS,
  SET_CURRENT_CHAT,
} from '@/features/chat/redux/types';

import { ChatInterface } from '@/features/chat/models/interfaces/chatInterface';

const initialState: ChatInterface[] = [
  {
    chatId: 'test',
    name: 'General',
    messages: [],
  },
];

interface ActionInterface {
  type: string;
  payload: ChatInterface | ChatInterface[];
}

export const chatReducers = (
  state = initialState,
  action: ActionInterface = {
    type: '',
    payload: {} as ChatInterface | ChatInterface[],
  }
) => {
  switch (action.type) {
    case GET_ALL_CHAT_ROOMS_SUCCESS:
      return action.payload;
    case CREATE_CHAT_ROOM_SUCCESS:
      return [...state, action.payload];

    case DELETE_CHAT_ROOM:
      return { ...action.payload };

    default:
      return state;
  }
};
