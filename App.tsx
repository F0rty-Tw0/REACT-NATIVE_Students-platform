import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/integration/react';
import useCachedResources from '@/hooks/useCachedResources';
import useColorScheme from '@/hooks/useColorScheme';
import Navigation from '@/navigation/Navigation';
import './firebase';

//STORE
import { store, persistor } from '@/redux/store';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  return !isLoadingComplete ? null : (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}
