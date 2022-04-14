// COMPONENTS
import { ProfilePicture } from '@libs/shared/lib/profile-form/components/ProfilePicture';
import { ProfileName } from '@libs/shared/lib/profile-form/components/ProfileName';
import { ProfileProgramme } from '@libs/shared/lib/profile-form/components/ProfileProgramme';
import { ProfileButton } from '@libs/shared/lib/profile-form/components/ProfileButton';
// HOOKS
import { useEffect, useState } from 'react';

export const ProfileForm = () => {
  const [name, setName] = useState('');
  const [programme, setProgramme] = useState('');
  // const [picture, setPicture] = useState('');
  const [formCompleted, setFormCompleted] = useState(false);

  useEffect(() => {
    if (name.length > 2 && programme.length > 2) {
      setFormCompleted(true);
    } else {
      setFormCompleted(false);
    }
  }, [name, programme]);

  const handleOnPress = () => {
    console.log('submitting form');
  };
  return (
    <>
      <ProfilePicture />
      <ProfileName name={name} setName={setName} />
      <ProfileProgramme programme={programme} setProgramme={setProgramme} />
      <ProfileButton
        text='Next'
        formCompleted={formCompleted}
        handleOnPress={handleOnPress}
      />
    </>
  );
};
