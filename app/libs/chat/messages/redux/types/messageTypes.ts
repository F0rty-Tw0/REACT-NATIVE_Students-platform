import { MessageInterface } from '@libs/chat/messages/models/interfaces/messageInterface';

export const ADD_MESSAGE_LOADING = 'ADD_MESSAGE_LOADING';
export const ADD_MESSAGE_SUCCESS = 'ADD_MESSAGE_SUCCESS';
export const ADD_MESSAGE_FAILURE = 'ADD_MESSAGE_FAILURE';
export const EDIT_MESSAGE_LOADING = 'EDIT_MESSAGE_LOADING';
export const EDIT_MESSAGE_SUCCESS = 'EDIT_MESSAGE_SUCCESS';
export const EDIT_MESSAGE_FAILURE = 'EDIT_MESSAGE_FAILURE';
export const LIKE_MESSAGE_LOADING = 'LIKE_MESSAGE_LOADING';
export const LIKE_MESSAGE_SUCCESS = 'LIKE_MESSAGE_SUCCESS';
export const LIKE_MESSAGE_FAILURE = 'LIKE_MESSAGE_FAILURE';
export const DELETE_MESSAGE_LOADING = 'DELETE_MESSAGE_LOADING';
export const DELETE_MESSAGE_SUCCESS = 'DELETE_MESSAGE_SUCCESS';
export const DELETE_MESSAGE_FAILURE = 'DELETE_MESSAGE_FAILURE';
export const TOGGLE_IS_LAST_MESSAGE_LOADING = 'TOGGLE_IS_LAST_MESSAGE_LOADING';
export const TOGGLE_IS_LAST_MESSAGE_SUCCESS = 'TOGGLE_IS_LAST_MESSAGE_SUCCESS';
export const TOGGLE_IS_LAST_MESSAGE_FAILURE = 'TOGGLE_IS_LAST_MESSAGE_FAILURE';

export interface AddMessageLoading {
  type: typeof ADD_MESSAGE_LOADING;
}

export interface AddMessageSuccess {
  type: typeof ADD_MESSAGE_SUCCESS;
  payload: MessageInterface;
}

export interface AddMessageFailure {
  type: typeof ADD_MESSAGE_FAILURE;
}

export interface LikeMessageLoading {
  type: typeof LIKE_MESSAGE_LOADING;
}

export interface LikeMessageSuccess {
  type: typeof LIKE_MESSAGE_SUCCESS;
}

export interface LikeMessageFailure {
  type: typeof LIKE_MESSAGE_FAILURE;
}

export interface DeleteMessageLoading {
  type: typeof DELETE_MESSAGE_LOADING;
}
export interface DeleteMessageSuccess {
  type: typeof DELETE_MESSAGE_SUCCESS;
}

export interface DeleteMessageFailure {
  type: typeof DELETE_MESSAGE_FAILURE;
}

export interface ToggleIsLastMessageLoading {
  type: typeof TOGGLE_IS_LAST_MESSAGE_LOADING;
}

export interface ToggleIsLastMessageSuccess {
  type: typeof TOGGLE_IS_LAST_MESSAGE_SUCCESS;
}

export interface ToggleIsLastMessageFailure {
  type: typeof TOGGLE_IS_LAST_MESSAGE_FAILURE;
}

export type MessageDispatchTypes =
  | AddMessageLoading
  | AddMessageSuccess
  | AddMessageFailure
  | LikeMessageLoading
  | LikeMessageSuccess
  | LikeMessageFailure
  | DeleteMessageLoading
  | DeleteMessageSuccess
  | DeleteMessageFailure
  | ToggleIsLastMessageLoading
  | ToggleIsLastMessageSuccess
  | ToggleIsLastMessageFailure;
