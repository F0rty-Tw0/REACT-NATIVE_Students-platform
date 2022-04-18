// COMPONENTS
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabNavigator } from '@libs/shell/navigation/BottomTabNavigator';
import { OnboardingScreen } from '@libs/onboarding/screens/OnboardingScreen';
import { ShellStackParamList } from '@libs/shell/types/shellScreenTypes';
import { EditProfileScreen } from '@libs/menu/edit-profile/screens/EditProfileScreen';
import { Chat } from '@libs/chat/components/Chat';
// STYLES
import { actionBlue } from '@libs/shared/styles/Colors';

const Stack = createNativeStackNavigator<ShellStackParamList>();

export const ShellScreensNavigator = () => {
  return (
    <>
      <Stack.Screen
        name='Shell'
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='EditProfile'
        component={EditProfileScreen}
        options={{
          title: 'EDIT PROFILE',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Teko',
            fontSize: 24,
            fontWeight: 'bold',
            color: actionBlue,
          },
        }}
      />
      <Stack.Screen
        name='Chat'
        component={Chat}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Teko',
            fontSize: 24,
            fontWeight: 'bold',
            color: actionBlue,
          },
        }}
      />
      <Stack.Screen
        name='Onboarding'
        component={OnboardingScreen}
        options={{
          headerShown: false,
        }}
      />
    </>
  );
};
