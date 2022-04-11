// MODULES
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// COMPONENTS
import { AuthNavigator } from '@libs/auth/navigation/AuthNavigator';
// import { BottomTabNavigator } from '@libs/shell/navigation/BottomTabNavigator';
import { ShellStackParamList } from '@libs/shell/types/shellScreenTypes';
import { NotFoundScreen } from '@libs/shared/screens/NotFoundScreen';
import { AuthScreen } from '@libs/auth/screens/AuthScreen';
// import { useAppSelector } from '@libs/shared/hooks/redux-hooks/useAppSelector';
// import { AuthScreen } from '@libs/auth/screens/AuthScreen';
// A root stack navigator is often used for displaying modals on top of all other content. https://reactnavigation.org/docs/modal

const Stack = createNativeStackNavigator<ShellStackParamList>();

export const ShellNavigator = () => {
  // const user = useAppSelector((state) => state.authReducer.user);

  return (
    <Stack.Navigator initialRouteName='Auth'>
      <Stack.Screen
        name='Auth'
        component={AuthScreen}
        options={{ title: 'Auth', headerShown: false }}
      />
      {/* {user ? (
        <Stack.Screen
          name='Shell'
          component={BottomTabNavigator}
          options={{
            headerShown: false,
          }}
        />
      ) : ( */}
      {/* <Stack.Screen
          name='Auth'
          component={AuthScreen}
          options={{ title: 'Auth', headerShown: false }}
        />
      )} */}
      <Stack.Screen
        name='NotFound'
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
        {AuthNavigator()}
    </Stack.Navigator>
  );
};
