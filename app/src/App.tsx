import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { Provider as StoreProvider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/integration/react';
import Navigation from '@app/navigation/Navigation';
// HOOKS
import useCachedResources from '@app/hooks/useCachedResources';
import useColorScheme from '@libs/shared/hooks/useColorScheme';
// DATA ACCESS
import '@app/data-access/firebase';
// STORE
import { store, persistor } from '@app/redux/store';

const App = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  
  return !isLoadingComplete ? null : (
    <StoreProvider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </PersistGate>
    </StoreProvider>
  );
};

export default registerRootComponent(App);
