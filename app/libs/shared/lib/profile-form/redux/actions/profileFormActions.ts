import { Dispatch } from 'redux';
// MODELS
import { ProfileInterface } from '@libs/shared/lib/profile-form/models/interfaces/profileFormInterface';
import {
  ProfileFormDispatchTypes,
  SUBMIT_PROFILE_FORM_LOADING,
  SUBMIT_PROFILE_FORM_SUCCESS,
  SUBMIT_PROFILE_FORM_FAILURE,
  CLEAN_PROFILE_FORM_ERRORS,
} from '@libs/shared/lib/profile-form/redux/profileFormStoreTypes';

export const cleanProfileFormErrors = () => ({
  type: CLEAN_PROFILE_FORM_ERRORS,
});

export const submitProfileForm =
  (profile: ProfileInterface) =>
  async (dispatch: Dispatch<ProfileFormDispatchTypes>) => {
    try {
      dispatch({ type: SUBMIT_PROFILE_FORM_LOADING });
      // const user = await submitProfile(profile); // TODO: implement submitProfile in services
      dispatch({ type: SUBMIT_PROFILE_FORM_SUCCESS, profile });
    } catch (error: any) {
      dispatch({ type: SUBMIT_PROFILE_FORM_FAILURE, error: error.message });
      throw new Error('Submitting profile form failed');
    }
  };
