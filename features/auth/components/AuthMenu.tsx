//COMPONENTS
import { View, Pressable } from 'react-native';
import { AuthButton } from '@/features/auth/components/AuthButton';
//HOOKS
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
//MODELS
import { DisplayUserInterface } from '@/features/auth/models/interfaces/authInterface';
import { logout } from '@/features/auth/redux/actions/authActions';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import { AuthScreenProp } from '@/features/auth/types/NavigationTypes';
//REDUX

export const AuthMenu = () => {
  const navigation = useNavigation<AuthScreenProp>();
  const dispatch = useDispatch();
  const user: DisplayUserInterface = useAppSelector(
    (state) => state.authReducer
  );
  return !user ? (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      <Pressable
        onPress={() => {
          navigation.navigate('Login');
        }}
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
        })}
      >
        <AuthButton title='Login' />
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate('Register');
        }}
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
        })}
      >
        <AuthButton title='Register' />
      </Pressable>
    </View>
  ) : (
    <Pressable
      onPress={() => {
        dispatch(logout());
        navigation.navigate('Core');
      }}
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
      })}
    >
      <AuthButton title='Logout' />
    </Pressable>
  );
};
