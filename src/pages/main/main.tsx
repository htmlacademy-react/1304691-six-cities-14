import { CardsList } from '../../components/cards-list/cards-list';
import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import Map from '../../components/map/map';
import { Offers, Offer as OfferType } from '../../types/types';
import { addPluralEnding } from '../../utils/utils';
import { useState } from 'react';
import { CityName } from '../../const';

type MainPageProps = {
  offersByCity: Offers;
}

function MainPage({ offersByCity }: MainPageProps): JSX.Element {

  const [selectedPointId, setSelectedPointId] = useState<OfferType['id'] | null>(null);

  const activeCity = CityName.Amsterdam;

  function handleListItemHover(itemId: OfferType['id'] | null) {
    setSelectedPointId(itemId);
  }

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>{'6 cities'}</title>
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
                  <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile" >
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </Link>
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

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Paris</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Cologne</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Brussels</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item tabs__item--active">
                  <span>Amsterdam</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Hamburg</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersByCity.length} place{addPluralEnding(offersByCity.length)} to stay in {activeCity}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <CardsList offers={offersByCity} block={'cities'} onListItemHover={handleListItemHover}></CardsList>
            </section>
            <div className="cities__right-section">
              <Map offersByCity={offersByCity} selectedPointId={selectedPointId}></Map>
            </div>
          </div>
        </div >
      </main >
    </div >
  );
}

export default MainPage;
