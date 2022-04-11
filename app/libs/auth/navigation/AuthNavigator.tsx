// COMPONENTS
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthScreen } from '@libs/auth/screens/AuthScreen';

// TYPES
import { AuthScreenParamList } from '@libs/auth/types/authScreenTypes';

export const AuthNavigator = () => {
  const Stack = createNativeStackNavigator<AuthScreenParamList>();
  return (
    <Stack.Group>
      <Stack.Screen name='Login' component={AuthScreen} />
      <Stack.Screen name='Register' component={AuthScreen} />
    </Stack.Group>
  );
};
