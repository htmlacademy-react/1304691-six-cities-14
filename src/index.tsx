import React from 'react';
import ReactDOM from 'react-dom/client';
import { CARD_COUNT } from './const';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      cardCount={CARD_COUNT}
    />
  </React.StrictMode>
);
