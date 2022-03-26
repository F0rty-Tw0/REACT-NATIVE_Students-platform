import { View, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AuthButton } from '@/components/auth/AuthButton';
import { DisplayUserInterface } from '@/models/interfaces/authInterface';
import { login, logout, register } from '@/redux/actions/authActions';
import { useNavigation } from '@react-navigation/native';

export const AuthMenu = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user: DisplayUserInterface = useSelector(
    (state: any) => state.authReducer?.user
  );
  return !user ? (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      <Pressable
        onPress={() => {
          navigation.navigate('Login');
          dispatch(login());
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
          dispatch(register());
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
        navigation.navigate('Root');
        dispatch(logout());
      }}
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
      })}
    >
      <AuthButton title='Logout' />
    </Pressable>
  );
};
