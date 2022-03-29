//COMPONENTS
import { View } from '@/components/shared/Themed';
import { AuthForm } from '@/features/auth/components/AuthForm';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
//HOOKS
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
//MODELS
import { AuthCredentialsInterface } from '@/features/auth/models/interfaces/authInterface';
//REDUX
import { REGISTER_SUCCESS } from '@/features/auth//redux/types';
import { loginAndGetUser } from '@/features/auth/redux/actions/authActions';

export const AuthModal = () => {
  const dispatch = useDispatch() ;
  const navigation = useNavigation();
  const appState: string = useSelector(
    (state: any) => state.appReducer.appState
  );

  const handleLogin = async ({ email, password }: AuthCredentialsInterface) => {
    await dispatch(loginAndGetUser({ email, password }));
    navigation.navigate('Root');
  };

  // const handleRegister = async (email: string, password: string) => {
  //   try {
  //     const user = await register({email, password});
  //     _setUser(user);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <View style={styles.container}>
      {appState === REGISTER_SUCCESS ? (
        <AuthForm title='Register' handlePress={handleLogin} />
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
