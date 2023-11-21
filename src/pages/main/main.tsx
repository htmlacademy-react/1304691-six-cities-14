import { CardsList } from '../../components/cards-list/cards-list';
import { Helmet } from 'react-helmet-async';
import Map from '../../components/map/map';
import { OfferPreview, Offer as OfferType } from '../../types/types';
import { addPluralEnding } from '../../utils/utils';
import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import CitiesList from '../../components/cities-list/cities-list';
import Header from '../../components/header/header';
import SortList from '../../components/sort-list/sort-list';
import { sorting } from '../../utils/utils';
import { SortMap } from '../../const';

function MainPage(): JSX.Element {

  const [selectedPointId, setSelectedPointId] = useState<OfferType['id'] | null>(null);

  const [activeSortItem, setActiveSortItem] = useState<string>(SortMap.Popular);

  const activeCity = useAppSelector((state) => state.activeCity);
  const offers = useAppSelector((state) => state.offers);

  function handleListItemHover(itemId: OfferType['id'] | null) {
    setSelectedPointId(itemId);
  }

  const currentOffers = offers.filter((offer) => offer.city.name === activeCity.name);

  function sortingItems(label: string) {
    switch (label) {
      case SortMap.Popular:
        return sorting.Popular(currentOffers);
      case SortMap.HightToLow:
        return sorting.HighToLow(currentOffers);
      case SortMap.LowToHigh:
        return sorting.LowToHigh(currentOffers);
      case SortMap.TopRated:
        return sorting.TopRated(currentOffers);
    }
    return sorting.Popular(currentOffers);
  }

  let sortedOffers: OfferPreview[] = sortingItems(activeSortItem);

  function handleSortItems(label: string) {
    sortedOffers = sortingItems(label);
    setActiveSortItem(label);
    return sortedOffers;
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
              <b className="places__found">{currentOffers.length} place{addPluralEnding(currentOffers.length)} to stay in {activeCity.name}</b>
              <SortList activeSortItem={activeSortItem} onSortItems={handleSortItems} />
              <CardsList offers={sortedOffers} block={'cities'} onListItemHover={handleListItemHover}></CardsList>
            </section>
            <div className="cities__right-section">
              <Map block={'cities'} offers={currentOffers} location={activeCity.location} selectedPointId={selectedPointId}></Map>
            </div>
          </div>
        </div >
      </main >
    </div >
  );
}

export default MainPage;
