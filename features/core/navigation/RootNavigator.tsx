import { CoreStackParamList } from '@/types/appTypes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NotFoundScreen } from '@/features/shared/screens/NotFoundScreen';
import { AuthMenu } from '@/features/auth/components/AuthMenu';
import { BottomTabNavigator } from '@/features/core/navigation/BottomTabNavigator';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import { HomeScreen } from '@/features/core/screens/HomeScreen';
import { AuthScreen } from '@/features/auth/screens/AuthScreen';
// A root stack navigator is often used for displaying modals on top of all other content. https://reactnavigation.org/docs/modal

const Stack = createNativeStackNavigator<CoreStackParamList>();

export const RootNavigator = () => {
  const user = useAppSelector((state) => state.authReducer.user);

  return (
    <Stack.Navigator initialRouteName="Auth">
      {user ? (
        <Stack.Screen
          name='Core'
          component={BottomTabNavigator}
          options={{
            headerShown: false,
          }}
        />
      ) : (
        <Stack.Screen
          name='Auth'
          component={AuthScreen}
          options={{ title: 'Auth', headerShown: false }}
        />
      )}
      <Stack.Screen
        name='NotFound'
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
      {/* <Stack.Group>
        <Stack.Screen name='Login' component={AuthScreen} />
        <Stack.Screen name='Register' component={AuthScreen} />
      </Stack.Group> */}
    </Stack.Navigator>
  );
};
