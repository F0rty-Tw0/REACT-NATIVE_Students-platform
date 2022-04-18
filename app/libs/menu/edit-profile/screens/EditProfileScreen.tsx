// COMPONENTS
import { View } from 'react-native';
import { ProfileForm } from '@libs/shared/lib/profile-form/src/ProfileForm';
// STYLES
import { containerStyles } from '@libs/shared/styles/Containers';

export const EditProfileScreen = () => {
  return (
    <View style={containerStyles.mainContainer}>
      <View style={containerStyles.itemsContainer}>
        <ProfileForm buttonText='Save Changes' />
      </View>
    </View>
  );
};
