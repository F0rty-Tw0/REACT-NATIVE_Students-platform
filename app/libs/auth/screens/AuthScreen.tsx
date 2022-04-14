// COMPONENTS
import { Platform, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LoginForm } from '@libs/auth/components/LoginForm';
import { RegisterForm } from '@libs/auth/components/RegisterForm';
import { Logo } from '@libs/shared/ui/Logo';
//  HOOKS
import { useAppSelector } from '@libs/shared/hooks/redux-hooks/useAppSelector';
// REDUX
import { REGISTER } from '@libs/shell/redux/shellStoreTypes';
//  STYLES
import { containerStyles } from '@libs/shared/styles/Containers';

export const AuthScreen = () => {
  const { appState } = useAppSelector((state) => state.shellReducer);

  return (
    <View style={containerStyles.mainContainer}>
      <Logo />
      {appState === REGISTER ? <RegisterForm /> : <LoginForm />}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
};
