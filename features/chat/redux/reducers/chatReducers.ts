import {
  CREATE_CHAT_ROOM_SUCCESS,
  GET_ALL_CHAT_ROOMS_SUCCESS,
} from '@/features/chat/redux/types/chatRoomTypes';

import { ChatInterface } from '@/features/chat/models/interfaces/chatInterface';

const initialState: ChatInterface[] | null = null;

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
      if (state) return [...state, action.payload];
      return state;
    // case DELETE_CHAT_ROOM:
    //   return { ...action.payload };

    default:
      return state;
  }
};
