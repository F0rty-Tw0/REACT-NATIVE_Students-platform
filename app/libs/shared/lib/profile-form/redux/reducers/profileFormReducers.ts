// MODELS
import { ProfileFormInterface as InitialStateInterface } from '@libs/shared/lib/profile-form/models/interfaces/profileFormInterface';
import {
  ProfileFormDispatchTypes,
  SUBMIT_PROFILE_FORM_SUCCESS,
  SUBMIT_PROFILE_FORM_LOADING,
  SUBMIT_PROFILE_FORM_FAILURE,
  CLEAN_PROFILE_FORM_ERRORS,
} from '@libs/shared/lib/profile-form/redux/profileFormStoreTypes';

const initialState: InitialStateInterface = {
  loading: false,
  isFormSubmitted: false,
  error: '',
  profile: null,
};

export const profileFormReducer = (
  state: InitialStateInterface = initialState,
  action: ProfileFormDispatchTypes
): InitialStateInterface => {
  switch (action.type) {
    case SUBMIT_PROFILE_FORM_LOADING:
      return { ...state, loading: true };
    case SUBMIT_PROFILE_FORM_SUCCESS:
      return {
        ...state,
        profile: action.profile,
        loading: false,
        isFormSubmitted: true,
      };
    case SUBMIT_PROFILE_FORM_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case CLEAN_PROFILE_FORM_ERRORS:
      return {
        ...state,
        error: '',
      };
    default:
      return state;
  }
};
