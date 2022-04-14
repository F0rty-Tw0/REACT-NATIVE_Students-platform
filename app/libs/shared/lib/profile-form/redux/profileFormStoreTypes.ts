import { ProfileInterface } from '@libs/shared/lib/profile-form/models/interfaces/profileFormInterface';

export const SUBMIT_PROFILE_FORM_LOADING = 'SUBMIT_PROFILE_FORM_LOADING';
export const SUBMIT_PROFILE_FORM_SUCCESS = 'SUBMIT_PROFILE_FORM_SUCCESS';
export const SUBMIT_PROFILE_FORM_FAILURE = 'SUBMIT_PROFILE_FORM_FAILURE';
export const CLEAN_PROFILE_FORM_ERRORS = 'CLEAN_PROFILE_FORM_ERRORS';

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

export interface CleanProfileFormErrors {
  type: typeof CLEAN_PROFILE_FORM_ERRORS;
}

export type ProfileFormDispatchTypes =
  | SubmitProfileFormLoading
  | SubmitProfileFormSuccess
  | SubmitProfileFormFailure
  | CleanProfileFormErrors;
