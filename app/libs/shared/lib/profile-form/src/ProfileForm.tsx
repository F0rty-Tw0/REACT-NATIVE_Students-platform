// COMPONENTS
import { ProfilePicture } from '@libs/shared/lib/profile-form/components/ProfilePicture';
import { ProfileName } from '@libs/shared/lib/profile-form/components/ProfileName';
import { ProfileProgramme } from '@libs/shared/lib/profile-form/components/ProfileProgramme';
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

export const ProfileForm = () => {
  const [name, setName] = useState('');
  const [studyProgramme, setStudyProgramme] = useState('');
  const [formCompleted, setFormCompleted] = useState(false);
  const { profile, pictureUrl } = useAppSelector(
    (state) => state.profileFormReducer
  );
  const navigation = useNavigation<AuthScreenProp>();
  const dispatch = useDispatch();

  useEffect(() => {
    if (name.length > 2 && studyProgramme.length > 2) {
      setFormCompleted(true);
    } else {
      setFormCompleted(false);
    }
  }, [name, studyProgramme]);

  profile &&
    useEffect(() => {
      setStudyProgramme(profile.studyProgramme);
      setName(profile.name);
    }, []);

  const handleOnPress = () => {
    dispatch(submitProfileForm({ name, studyProgramme }));
    navigation.navigate('Shell');
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
      <ProfileName name={name} setName={setName} />
      <ProfileProgramme
        studyProgramme={studyProgramme}
        setStudyProgramme={setStudyProgramme}
      />
      <ProfileButton
        text='Next'
        formCompleted={formCompleted}
        handleOnPress={handleOnPress}
      />
    </>
  );
};
