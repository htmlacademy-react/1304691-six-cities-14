import { CardsList } from '../../components/cards-list/cards-list';
import { Helmet } from 'react-helmet-async';
import Map from '../../components/map/map';
import { Offer as OfferType, SortItem } from '../../types/types';
import { addPluralEnding } from '../../utils/utils';
import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import CitiesList from '../../components/cities-list/cities-list';
import Header from '../../components/header/header';
import SortList from '../../components/sort-list/sort-list';
import { setActiveSortItem } from '../../store/actions';
import { useAppDispatch } from '../../hooks';
import { sortOffers, getOffers, getSortItem, getActiveCity } from '../../store/selectors';
import NoCards from '../../components/no-cards/no-cards';

function MainPage(): JSX.Element {

  const dispatch = useAppDispatch();

  const [selectedPointId, setSelectedPointId] = useState<OfferType['id'] | null>(null);

  const activeSortItem = useAppSelector(getSortItem);

  const activeCity = useAppSelector(getActiveCity);

  const offers = useAppSelector(getOffers);

  const filteredOffers = offers.filter((offer) => offer.city.name === activeCity.name);

  const currentOffers = useAppSelector(() => sortOffers({ offers: filteredOffers, activeSortItem }));

  function handleListItemHover(itemId: OfferType['id'] | null) {
    setSelectedPointId(itemId);
  }

  function handleSortItems(type: SortItem) {
    dispatch(setActiveSortItem(type));
    return currentOffers;
  }

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>{'6 cities'}</title>
      </Helmet>
      <Header />
      <main className={`page__main page__main--index ${currentOffers.length === 0 && 'page__main--index-empty'}`}>
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList />
        <div className="cities">
          {currentOffers.length === 0 ? <NoCards /> :
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{currentOffers.length} place{addPluralEnding(currentOffers.length)} to stay in {activeCity.name}</b>
                <SortList activeSortItem={activeSortItem} onSortItems={handleSortItems} />
                <CardsList offers={currentOffers} block={'cities'} onListItemHover={handleListItemHover}></CardsList>
              </section>
              <div className="cities__right-section">
                <Map block={'cities'} offers={currentOffers} location={activeCity.location} selectedPointId={selectedPointId}></Map>
              </div>
            </div>}
        </div >
      </main >
    </div >
  );
}

export default MainPage;
