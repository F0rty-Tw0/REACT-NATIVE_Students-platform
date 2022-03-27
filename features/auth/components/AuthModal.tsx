//COMPONENTS
import { View } from '@/components/shared/Themed';
import { AuthForm } from '@/features/auth/components/AuthForm';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
//SERVICES
import { login, register } from '@/features/auth/services/auth.services';
//HOOKS
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatcher } from '@/hooks/redux-hooks/useAppDispatcher';
//MODELS
import { User } from 'firebase/auth';
//REDUX
import { REGISTER_SUCCESS } from '@/features/auth//redux/types';
import { setUser } from '@/features/auth/redux/actions/authActions';

export const AuthModal = () => {
  const dispatch = useAppDispatcher();
  const navigation = useNavigation();
  const appState: string = useSelector(
    (state: any) => state.appReducer.appState
  );

  const _setUser = (user: User) => {
    dispatch(
      setUser({
        email: user.email,
        id: user.uid,
        token: user.refreshToken,
      })
    );
    navigation.navigate('Root');
  };

  const handleLogin = async (email: string, password: string) => {
    try {
      const user = await login(email, password);
      _setUser(user);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegister = async (email: string, password: string) => {
    try {
      const user = await register(email, password);
      _setUser(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      {appState === REGISTER_SUCCESS ? (
        <AuthForm title='Register' handlePress={handleRegister} />
      ) : (
        <AuthForm title='Login' handlePress={handleLogin} />
      )}
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
