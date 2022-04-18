// COMPONENTS
import { ProfilePicture } from '@libs/shared/lib/profile-form/components/ProfilePicture';
import { LabeledInput } from '@libs/shared/components/LabeledInput';
import { ProfileButton } from '@libs/shared/lib/profile-form/components/ProfileButton';
// HOOKS
import { useEffect, useState } from 'react';
import { useAppSelector } from '@libs/shared/hooks/redux-hooks/useAppSelector';
import { useDispatch } from 'react-redux';
import {
  submitProfileForm,
  uploadPicture,
} from '@libs/shared/lib/profile-form/redux/actions/profileFormActions';
import { useNavigation } from '@react-navigation/native';
import { AuthScreenProp } from '@libs/auth/types/authScreenTypes';

interface ProfileFormProps {
  buttonText: string;
}

export const ProfileForm = ({ buttonText }: ProfileFormProps) => {
  const { profile, pictureUrl } = useAppSelector(
    (state) => state.profileFormReducer
  );
  const [name, setName] = useState('');
  const [studyProgramme, setStudyProgramme] = useState('');
  const [formCompleted, setFormCompleted] = useState(false);
  const navigation = useNavigation<AuthScreenProp>();
  const dispatch = useDispatch();

  useEffect(() => {
    if (name.length > 2 && studyProgramme.length > 2) {
      setFormCompleted(true);
    } else {
      setFormCompleted(false);
    }
  }, [name, studyProgramme]);

  useEffect(() => {
    setStudyProgramme(profile?.studyProgramme || '');
    setName(profile?.name || '');
  }, [profile]);

  const handleOnPress = async () => {
    await dispatch(submitProfileForm({ name, studyProgramme }));
    navigation.navigate('Splash');
  };

  const handlePictureUpload = () => {
    dispatch(uploadPicture('picture body object'));
    console.log('uploading picture');
  };

  return (
    <>
      <ProfilePicture
        pictureSource={pictureUrl}
        handlePictureUpload={handlePictureUpload}
      />
      <LabeledInput
        label='What is your name?'
        placeholderText='First name and last name'
        value={name}
        setValue={setName}
      />
      <LabeledInput
        label='Study programme'
        placeholderText='Select from list'
        value={studyProgramme}
        setValue={setStudyProgramme}
      />
      <ProfileButton
        text={buttonText}
        formCompleted={formCompleted}
        handleOnPress={handleOnPress}
      />
    </>
  );
};
