import { CardsList } from '../../components/cards-list/cards-list';
import { Helmet } from 'react-helmet-async';
import Map from '../../components/map/map';
import { Offers, Offer as OfferType } from '../../types/types';
import { addPluralEnding } from '../../utils/utils';
import { useState } from 'react';
import { CityName } from '../../const';
import CitiesList from '../../components/cities-list/cities-list';
import Header from '../../components/header/header';

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
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList />
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
