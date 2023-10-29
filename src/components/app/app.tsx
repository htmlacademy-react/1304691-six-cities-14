import { Route, BrowserRouter, Routes } from 'react-router-dom';
import MainPage from '../../pages/main/main';
import NotFound from '../../pages/404/404';
import { AppRoute, AuthorizationStatus } from '../../const';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import PrivateRoute from '../private-route/private-route';
import Offer from '../../pages/offer/offer';
import { Offer as OfferType } from '../../types/offers';

type AppScreenProps = {
  cardCount: number;
  offers: OfferType[];
}

function App({ cardCount, offers }: AppScreenProps): JSX.Element {

  function getFavoriteOffers() {
    return offers.filter((offer) => offer.isFavorite === true);
  }

  const favoriteOffers = getFavoriteOffers();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainPage cardCount={cardCount} offers={offers} />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <Favorites favoriteOffers={favoriteOffers} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Offer}
          element={<Offer offers={offers}/>}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
