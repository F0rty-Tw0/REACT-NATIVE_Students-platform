// COMPONENTS
import { Platform } from 'react-native';
import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { LoginForm } from '@/features/auth/components/LoginForm';
import { RegisterForm } from '@/features/auth/components/RegisterForm';
import { View } from '@/features/shared/components/Themed';
// HOOKS
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
// REDUX
import { LOGIN } from '@/features/core/redux/appTypes';
import { appLogin } from '@/features/core/redux/actions/appActions';
// STYLES
import { containersStyles } from '@/features/shared/constants/Containers';
import Logo from '@/assets/images/logo.svg';

export const AuthScreen = () => {
  const dispatch = useDispatch();
  const { appState } = useAppSelector((state) => state.appReducer);

  useEffect(() => {
    if (appState === null) {
      dispatch(appLogin());
    }
  }, []);

  return (
    <View style={containersStyles.mainContainer}>
      <View style={containersStyles.imageContainer}>
        <Logo />
      </View>
      {appState === LOGIN ? <LoginForm /> : <RegisterForm />}
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
};
