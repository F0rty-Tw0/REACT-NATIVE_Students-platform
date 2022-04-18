import { Dispatch } from 'redux';
// MODELS
import { ProfileInterface } from '@libs/shared/lib/profile-form/models/interfaces/profileFormInterface';
import {
  ProfileFormDispatchTypes,
  SUBMIT_PROFILE_FORM_LOADING,
  SUBMIT_PROFILE_FORM_SUCCESS,
  SUBMIT_PROFILE_FORM_FAILURE,
  CLEAN_PROFILE_FORM_ERRORS,
  UPLOAD_PICTURE_LOADING,
  UPLOAD_PICTURE_SUCCESS,
  UPLOAD_PICTURE_FAILURE,
  CLEAN_PROFILE_FORM,
} from '@libs/shared/lib/profile-form/redux/profileFormStoreTypes';

export const cleanProfileFormErrors = () => ({
  type: CLEAN_PROFILE_FORM_ERRORS,
});

export const cleanProfileForm = () => ({
  type: CLEAN_PROFILE_FORM,
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

export const uploadPicture =
  (_picture: string) =>
  async (dispatch: Dispatch<ProfileFormDispatchTypes>) => {
    try {
      dispatch({ type: UPLOAD_PICTURE_LOADING });
      // const pictureUrl = await uploadPicture(_picture); // TODO: implement uploadPicture in services
      dispatch({
        type: UPLOAD_PICTURE_SUCCESS,
        pictureUrl:
          'https://media-exp1.licdn.com/dms/image/C4D03AQFaTHxHzWTkSQ/profile-displayphoto-shrink_200_200/0/1565174759295?e=1655942400&v=beta&t=WGzDDYMlD73wMgH1d42TlmNlBx6xcNSoQOuLQKGoVkA',
      });
    } catch (error: any) {
      dispatch({ type: UPLOAD_PICTURE_FAILURE, error: error.message });
      throw new Error('Uploading picture failed');
    }
  };
