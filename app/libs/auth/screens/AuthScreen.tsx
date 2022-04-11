// COMPONENTS
import { Platform } from 'react-native';
import { Provider as AuthStoreProvider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { LoginForm } from '@libs/auth/components/LoginForm';
import { RegisterForm } from '@libs/auth/components/RegisterForm';
import { View } from '@libs/shared/components/Themed';
//  HOOKS
import { useAppSelector } from '@libs/shared/hooks/redux-hooks/useAppSelector';
// REDUX
import { REGISTER } from '@libs/shell/redux/shellStoreTypes';
//  STYLES
import { containersStyles } from '@libs/shared/styles/Containers';
import Logo from '@images/logo.svg';
import { store } from '@app/redux/store';

export const AuthScreen = () => {
  const { appState } = useAppSelector((state) => state.shellReducer);

  return (
    <AuthStoreProvider store={store}>
      <View style={containersStyles.mainContainer}>
        <View style={containersStyles.imageContainer}>
          <Logo />
        </View>

        {appState === REGISTER ? <RegisterForm /> : <LoginForm />}

        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      </View>
    </AuthStoreProvider>
  );
};
