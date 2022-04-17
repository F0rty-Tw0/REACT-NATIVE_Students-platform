// MODULES
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// COMPONENTS
import { ShellStackParamList } from '@libs/shell/types/shellScreenTypes';
import { NotFoundScreen } from '@libs/shared/screens/NotFoundScreen';
import { ShellScreensNavigator } from '@libs/shell/navigation/ShellScreensNavigator';
import { SplashScreen } from '@libs/splash/screens/SplashScreen';

// HOOKS
import { useAppSelector } from '@libs/shared/hooks/redux-hooks/useAppSelector';
import { AuthScreen } from '@libs/auth/screens/AuthScreen';

const Stack = createNativeStackNavigator<ShellStackParamList>();

export const ShellNavigator = () => {
  const { isLoggedIn } = useAppSelector((state) => state.authReducer);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Splash'
        component={SplashScreen}
        options={{ title: 'Welcome!', headerShown: false }}
      />
      {isLoggedIn ? (
        ShellScreensNavigator()
      ) : (
        <Stack.Screen
          name={'Auth'}
          component={AuthScreen}
          options={{
            headerShown: false,
          }}
        />
      )}
      <Stack.Screen
        name='NotFound'
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
    </Stack.Navigator>
  );
};
