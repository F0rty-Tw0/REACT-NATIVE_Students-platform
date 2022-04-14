// COMPONENTS
import { Platform, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LoginForm } from '@libs/auth/components/LoginForm';
import { RegisterForm } from '@libs/auth/components/RegisterForm';
//  HOOKS
import { useAppSelector } from '@libs/shared/hooks/redux-hooks/useAppSelector';
// REDUX
import { REGISTER } from '@libs/shell/redux/shellStoreTypes';
//  STYLES
import { containersStyles } from '@libs/shared/styles/Containers';
import Logo from '@images/logo.svg';

export const AuthScreen = () => {
  const { appState } = useAppSelector((state) => state.shellReducer);

  return (
    <View style={containersStyles.mainContainer}>
      <View style={containersStyles.imageContainer}>
        <Logo />
      </View>

      {appState === REGISTER ? <RegisterForm /> : <LoginForm />}

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
};
