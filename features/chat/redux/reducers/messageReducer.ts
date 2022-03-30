import {
  ADD_MESSAGE,
  EDIT_MESSAGE,
  LIKE_MESSAGE,
  DELETE_MESSAGE,
  SET_CURRENT_CHAT_MESSAGES,
} from '@/features/chat/redux/types';

import { MessageInterface } from '@/features/chat/models/interfaces/messageInterface';
import { ChatInterface } from '@/features/chat/models/interfaces/chatInterface';

const initialState: MessageInterface[] | null = null;

interface ActionInterface {
  type: string;
  payload: MessageInterface;
}

export const messageReducer = (
  state = initialState,
  action: ActionInterface = { type: '', payload: {} as MessageInterface }
) => {
  // const lastMessageId: number =
  //   state.length > 0 ? state[state.length - 1].messageId : 0;
  // switch (action.type) {
  //   case ADD_MESSAGE:
  //     return [...state, { ...action.payload, messageId: lastMessageId + 1 }];

  //   case DELETE_MESSAGE:
  //     return state.filter(
  //       (message: MessageInterface) =>
  //         message.messageId !== action.payload.messageId
  //     );

  //   case LIKE_MESSAGE:
  //     return state.map((message: MessageInterface) =>
  //       message.messageId === action.payload.messageId
  //         ? {
  //             ...message,
  //             isFavorite: !message.isFavorite,
  //           }
  //         : message
  //     );
  switch (action.type) {
    case SET_CURRENT_CHAT_MESSAGES:
      return action.payload || [];
    default:
      return state;
  }
};
