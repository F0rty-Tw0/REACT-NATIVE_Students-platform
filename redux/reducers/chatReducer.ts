import {
  ADD_MESSAGE,
  EDIT_MESSAGE,
  LIKE_MESSAGE,
  DELETE_MESSAGE,
} from '@/redux/types';

import { MessageInterface } from '@/models/interfaces/messageInterface';

const initialState = {
  messages: [],
};

interface ActionInterface {
  type: string;
  payload: MessageInterface;
}

export const chatReducer = (
  state = initialState,
  action: ActionInterface = { type: '', payload: {} as MessageInterface }
) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const lastMessage: MessageInterface = state.messages[state.messages.length - 1];
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: lastMessage ? lastMessage.id + 1 : 0,
            isFavorite: false,
            text: action.payload,
          },
        ],
      };

    case DELETE_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter(
          (message: MessageInterface) => message.id !== action.payload.id
        ),
      };

    case LIKE_MESSAGE:
      return {
        ...state,
        messages: state.messages.map((message: MessageInterface) =>
          message.id === action.payload.id
            ? { ...message, isFavorite: !message.isFavorite }
            : message
        ),
      };

    case EDIT_MESSAGE:
      return {
        ...state,
        messages: state.messages.map((message: MessageInterface) =>
          message.id === action.payload.id
            ? { ...message, text: action.payload.text }
            : message
        ),
      };

    default:
      return state;
  }
};
