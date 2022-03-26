import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import { View } from '@/components/shared/Themed';
import { Login } from '@/components/auth/Login';
import { Register } from '@/components/auth/Register';
import { useSelector } from 'react-redux';
import { REGISTER } from '@/redux/types';

export const AuthModal = () => {
  const appState: string = useSelector(
    (state: any) => state.appReducer.appState
  );
  return (
    <View style={styles.container}>
      {appState === REGISTER ? <Register /> : <Login />}
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
