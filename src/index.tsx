import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getToken } from './services/token';
import { changeAuthorizationStatus } from './store/user-process/user-process';
import { checkAuthAction, fetchOffersAction } from './store/api-actions';

const token = getToken();

if (token !== '') {
  store.dispatch(checkAuthAction());
} else {
  store.dispatch(changeAuthorizationStatus());
}

store.dispatch(fetchOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>
);
