import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import './index.css';
import App from './App';

const { store, persistor } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,

  document.getElementById('sourav')
);

// Pass console.log as a parameter to measure performance in browser console.
// reportWebVitals(console.log)
// Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
