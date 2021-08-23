import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import sessionStorage from 'redux-persist/es/storage/session';

import reducers from './reducers';

const rootPersistConfig = {
  key: 'sourav',
  storage: sessionStorage
};

const customReducer = persistReducer(rootPersistConfig, reducers);

export default () => {
  const store = createStore(
    customReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
  const persistor = persistStore(store);
  return {
    store,
    persistor
  };
};
