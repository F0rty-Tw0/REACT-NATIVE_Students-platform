// COMPONENTS
import { View, Text } from 'react-native';
import { ProfileForm } from '@libs/shared/lib/profile-form/src/ProfileForm';
import { Logo } from '@libs/shared/ui/Logo';
// STYLES
import { containerStyles } from '@libs/shared/styles/Containers';
import { textStyle } from '@libs/shared/styles/Text';

export const OnboardingScreen = () => {
  return (
    <View style={containerStyles.mainContainer}>
      <Logo />
      <View style={containerStyles.itemsContainer}>
        <Text style={[textStyle.title, { marginBottom: 50 }]}>
          Before we start...
        </Text>
        <ProfileForm />
      </View>
    </View>
  );
};
