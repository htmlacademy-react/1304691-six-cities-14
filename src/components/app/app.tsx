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
import { Reviews } from '../../types/types';
import ScrollToTop from '../scroll-to-top/scroll-to-top';

type AppScreenProps = {
  offers: Offers;
  reviews: Reviews;
  offersAroundHere: Offers;
}

function App({ offers, reviews, offersAroundHere }: AppScreenProps): JSX.Element {

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path={AppRoute.Root}
            element={
              <MainPage />
            }
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.Auth}
                redirectTo={AppRoute.Login}
              >
                <Favorites />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Login}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.Auth}
                redirectTo={AppRoute.Root}
              >
                <Login />
              </PrivateRoute>
            }
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
