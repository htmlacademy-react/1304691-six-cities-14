import { Route, BrowserRouter, Routes } from 'react-router-dom';
import MainPage from '../../pages/main/main';
import NotFound from '../../pages/not-found/not-found';
import { AppRoute, AuthorizationStatus } from '../../const';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import PrivateRoute from '../private-route/private-route';
import Offer from '../../pages/offer/offer';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import { useAppSelector } from '../../hooks';
import Loading from '../../pages/loading/loading';
import { getErrorOffersStatus, getIsOffersDataLoading } from '../../store/data-process/selectors';
import { getAutorisationStatus } from '../../store/user-process/selectors';
import ErrorOffers from '../../pages/error-offers/error-offers';
import { useEffect } from 'react';
import { fetchFavoritesAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  const authorizationStatus = useAppSelector(getAutorisationStatus);

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoritesAction());
    }

  }, [dispatch, authorizationStatus]);

  const isOffersDataLoading = useAppSelector(getIsOffersDataLoading);
  const hasErrorOffers = useAppSelector(getErrorOffersStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
    return (
      <Loading />
    );
  }

  if (hasErrorOffers) {
    return (
      <ErrorOffers />);
  }

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
                authorizationStatus={authorizationStatus}
                redirectTo={AppRoute.Login}
              >
                <Favorites />
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
              <Offer />
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
