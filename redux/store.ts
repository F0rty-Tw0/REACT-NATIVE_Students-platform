import { createStore, applyMiddleware, compose } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import ReduxThunk from 'redux-thunk';

import { allReducers } from '@/redux/reducers';

export const store = createStore(
  allReducers,
  compose(applyMiddleware(ReduxThunk), devToolsEnhancer())
);
