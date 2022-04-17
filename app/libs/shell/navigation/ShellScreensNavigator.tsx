// COMPONENTS
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabNavigator } from '@libs/shell/navigation/BottomTabNavigator';
import { OnboardingScreen } from '@libs/onboarding/screens/OnboardingScreen';
import { ShellStackParamList } from '@libs/shell/types/shellScreenTypes';

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
        name='Onboarding'
        component={OnboardingScreen}
        options={{
          headerShown: false,
        }}
      />
    </>
  );
};
