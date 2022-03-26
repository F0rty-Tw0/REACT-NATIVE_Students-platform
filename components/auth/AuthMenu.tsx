import { View, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { LoginButton } from '@/components/auth/LoginButton';
import { RegisterButton } from '@/components/auth/RegisterButton';
import { LogoutButton } from '@/components/auth/LogoutButton';
import { DisplayUserInterface } from '@/models/interfaces/authInterface';
import { login, logout, register } from '@/redux/actions/authActions';

export const AuthMenu = ({ navigation }: any) => {
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
        <LoginButton />
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
        <RegisterButton />
      </Pressable>
    </View>
  ) : (
    <Pressable
      onPress={() => {
        dispatch(logout());
      }}
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
      })}
    >
      <LogoutButton />
    </Pressable>
  );
};
