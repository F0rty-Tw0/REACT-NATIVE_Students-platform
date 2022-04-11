//COMPONENTS
import { View, Pressable } from 'react-native';
import { AuthButton } from '@libs/auth/components/AuthButton';
//HOOKS
import { useNavigation } from '@react-navigation/native';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import { useDispatch } from 'react-redux';
//MODELS
import { DisplayUserInterface } from '@libs/auth/models/interfaces/authInterface';
import { AuthScreenProp } from '@libs/auth/types/authScreenTypes';
//REDUX
import { logout } from '@libs/auth/redux/actions/authActions';

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
        navigation.navigate('Shell');
      }}
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
      })}
    >
      <AuthButton title='Logout' />
    </Pressable>
  );
};
