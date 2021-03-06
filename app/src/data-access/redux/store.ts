import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { devToolsEnhancer } from '@redux-devtools/extension';
import ReduxThunk from 'redux-thunk';

import { allReducers } from '@app/data-access/redux/reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [
    'currentChatReducer',
    'messageReducer',
    'shellReducer',
  ],
};

const persistedReducer = persistReducer(persistConfig, allReducers);

export const store = createStore(
  persistedReducer,
  compose(applyMiddleware(ReduxThunk), devToolsEnhancer())
);

export const persistor = persistStore(store);

export type AppDispatcher = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
