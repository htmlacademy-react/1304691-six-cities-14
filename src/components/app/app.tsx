import { Route, BrowserRouter, Routes } from 'react-router-dom';
import MainPage from '../../pages/main/main';
import NotFound from '../../pages/404/404';
import { AppRoute, AuthorizationStatus } from '../../const';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import PrivateRoute from '../private-route/private-route';
import Offer from '../../pages/offer/offer';
import { Offers } from '../../types/types';
import { HelmetProvider } from 'react-helmet-async';
import { Offer as OfferType } from '../../types/types';
import { useState } from 'react';
import { Reviews } from '../../types/types';
import { CITY } from '../../mocks/map';

type AppScreenProps = {
  offers: Offers;
  reviews: Reviews;
  offersAroundHere: Offers;
}

function App({ offers, reviews, offersAroundHere }: AppScreenProps): JSX.Element {

  function getFavoritesOffers() {
    return offers.filter((offer) => offer.isFavorite === true);
  }

  const favoritesOffers = getFavoritesOffers();

  const [selectedPoint, setSelectedPoint] = useState<OfferType | undefined>(
    undefined
  );

  function handleListItemHover(id: number) {
    const currentOffer = offers.find((offer) => offer.id === id);

    setSelectedPoint(currentOffer);
  }

  function handleListItemLeave() {
    setSelectedPoint(undefined);
  }

  function getOffersByCity() {
    return offers.filter((offer) => offer.city.name === CITY.name);
  }

  const offersByCity = getOffersByCity();

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={
              <MainPage
                selectedPoint={selectedPoint}
                onListItemHover={handleListItemHover}
                onListItemLeave={handleListItemLeave}
                offersByCity={offersByCity}
              />
            }
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.Auth}
              >
                <Favorites favoritesOffers={favoritesOffers} />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Login}
            element={<Login />}
          />
          <Route
            path={`${AppRoute.Offer}:id`}
            element={
              <Offer
                reviews={reviews}
                offers={offers}
                offersAroundHere={offersAroundHere}
              />
            }
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
