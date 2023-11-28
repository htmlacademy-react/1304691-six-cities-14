import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import FavoritesList from '../../components/favorites-list/favorites-list';
import Header from '../../components/header/header';
import { getFavorites } from '../../store/data-process/selectors';
import classNames from 'classnames';
import NoFavorites from '../../components/no-favorites/no-favorites';
import { useAppSelector } from '../../hooks';

function Favorites(): JSX.Element {

  const favoritesOffers = useAppSelector(getFavorites);

  return (
    <div className={classNames(
      'page',
      { 'page--favorites-empty': favoritesOffers.length === 0 }
    )}
    >
      <Helmet>
        <title>{'6 cities - Favorites'}</title>
      </Helmet>
      <Header />
      <main className={classNames(
        'page__main page__main--favorites',
        { 'page__main--favorites-empty': favoritesOffers.length === 0 }
      )}
      >
        <div className="page__favorites-container container">
          {
            favoritesOffers.length === 0 ? <NoFavorites /> :
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <FavoritesList offers={favoritesOffers}></FavoritesList>
              </section>
          }
        </div>
      </main>
      <footer className="footer container">
        <Link to={AppRoute.Root} className="footer__logo-link">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </ div >
  );
}

export default Favorites;
