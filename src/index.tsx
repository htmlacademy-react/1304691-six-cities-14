import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';
import { offersAroundHere } from './mocks/offers-around';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offers={offers}
      reviews={reviews}
      offersAroundHere={offersAroundHere}
    />
  </React.StrictMode>
);
