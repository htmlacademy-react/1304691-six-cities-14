import Logo from '../../components/logo/logo';
import { Offer } from '../../types/offers';
import { RATING_MAX } from '../../const';
import { Helmet } from 'react-helmet-async';

type FavoritesProps = {
  favoriteOffers: Offer[];
}

type FavoriteItemProps = {
  offerInfo: Offer;
}

function FavoriteItemCard({ offerInfo }: FavoriteItemProps): JSX.Element {
  const { isPremium, price, title, rating, type, previewImage } = offerInfo;

  const ratingValue = (rating * 100) / RATING_MAX;

  return (
    <article className="favorites__card place-card">
      {isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ''}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place image" />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${ratingValue}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

function FavoriteItem({ offerInfo }: FavoriteItemProps): JSX.Element {

  const { city } = offerInfo;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city.name}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        <FavoriteItemCard offerInfo={offerInfo}></FavoriteItemCard>
      </div>
    </li>
  );
}

function FavoriteList({ favoriteOffers }: FavoritesProps): JSX.Element {

  const favorites: JSX.Element[] = [];
  for (let i = 0; i < favoriteOffers.length; i++) {
    favorites.push(<FavoriteItem offerInfo={favoriteOffers[i]} />);
  }

  return (
    <ul className="favorites__list">
      {...favorites}
    </ul>
  );
}


function Favorites({ favoriteOffers }: FavoritesProps): JSX.Element {

  return (
    <div className="page">
      <Helmet>
        <title>{'6 cities - Favorites'}</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoriteList favoriteOffers={favoriteOffers}></FavoriteList>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Favorites;
