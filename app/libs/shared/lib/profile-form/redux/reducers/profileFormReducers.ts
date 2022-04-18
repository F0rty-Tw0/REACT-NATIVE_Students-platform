// MODELS
import { ProfileFormInterface as InitialStateInterface } from '@libs/shared/lib/profile-form/models/interfaces/profileFormInterface';
import {
  ProfileFormDispatchTypes,
  UPLOAD_PICTURE_LOADING,
  UPLOAD_PICTURE_SUCCESS,
  UPLOAD_PICTURE_FAILURE,
  SUBMIT_PROFILE_FORM_SUCCESS,
  SUBMIT_PROFILE_FORM_LOADING,
  SUBMIT_PROFILE_FORM_FAILURE,
  CLEAN_PROFILE_FORM_ERRORS,
  CLEAN_PROFILE_FORM,
} from '@libs/shared/lib/profile-form/redux/profileFormStoreTypes';

const initialState: InitialStateInterface = {
  isLoading: false,
  isFormSubmitted: false,
  error: '',
  profile: null,
  pictureUrl: '',
};

export const profileFormReducer = (
  state: InitialStateInterface = initialState,
  action: ProfileFormDispatchTypes
): InitialStateInterface => {
  switch (action.type) {
    case SUBMIT_PROFILE_FORM_LOADING:
    case UPLOAD_PICTURE_LOADING:
      return { ...state, isLoading: true };
    case SUBMIT_PROFILE_FORM_SUCCESS:
      return {
        ...state,
        profile: action.profile,
        isLoading: false,
        isFormSubmitted: true,
      };
    case UPLOAD_PICTURE_SUCCESS:
      return {
        ...state,
        pictureUrl: action.pictureUrl,
        isLoading: false,
      };
    case UPLOAD_PICTURE_FAILURE:
    case SUBMIT_PROFILE_FORM_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case CLEAN_PROFILE_FORM_ERRORS:
      return {
        ...state,
        error: '',
      };
    case CLEAN_PROFILE_FORM:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
