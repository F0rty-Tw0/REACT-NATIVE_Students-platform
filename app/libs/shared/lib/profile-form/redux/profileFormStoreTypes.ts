import { ProfileInterface } from '@libs/shared/lib/profile-form/models/interfaces/profileFormInterface';

export const SUBMIT_PROFILE_FORM_LOADING = 'SUBMIT_PROFILE_FORM_LOADING';
export const SUBMIT_PROFILE_FORM_SUCCESS = 'SUBMIT_PROFILE_FORM_SUCCESS';
export const SUBMIT_PROFILE_FORM_FAILURE = 'SUBMIT_PROFILE_FORM_FAILURE';
export const CLEAN_PROFILE_FORM_ERRORS = 'CLEAN_PROFILE_FORM_ERRORS';
export const UPLOAD_PICTURE_LOADING = 'UPLOAD_PICTURE_LOADING';
export const UPLOAD_PICTURE_SUCCESS = 'UPLOAD_PICTURE_SUCCESS';
export const UPLOAD_PICTURE_FAILURE = 'UPLOAD_PICTURE_FAILURE';
export interface SubmitProfileFormLoading {
  type: typeof SUBMIT_PROFILE_FORM_LOADING;
}

export interface SubmitProfileFormSuccess {
  type: typeof SUBMIT_PROFILE_FORM_SUCCESS;
  profile: ProfileInterface;
}

export interface SubmitProfileFormFailure {
  type: typeof SUBMIT_PROFILE_FORM_FAILURE;
  error: string;
}

export interface UploadPictureLoading {
  type: typeof UPLOAD_PICTURE_LOADING;
}

export interface UploadPictureSuccess {
  type: typeof UPLOAD_PICTURE_SUCCESS;
  pictureUrl: string;
}

export interface UploadPictureFailure {
  type: typeof UPLOAD_PICTURE_FAILURE;
  error: string;
}

export interface CleanProfileFormErrors {
  type: typeof CLEAN_PROFILE_FORM_ERRORS;
}

export type ProfileFormDispatchTypes =
  | SubmitProfileFormLoading
  | SubmitProfileFormSuccess
  | SubmitProfileFormFailure
  | UploadPictureLoading
  | UploadPictureSuccess
  | UploadPictureFailure
  | CleanProfileFormErrors;
