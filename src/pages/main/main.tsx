import CardsListMemo from '../../components/cards-list/cards-list';
import { Helmet } from 'react-helmet-async';
import MapMemo from '../../components/map/map';
import { Offer, SortItem } from '../../types/types';
import { addPluralEnding } from '../../utils/utils';
import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import CitiesList from '../../components/cities-list/cities-list';
import HeaderMemo from '../../components/header/header';
import SortListMemo from '../../components/sort-list/sort-list';
import { useAppDispatch } from '../../hooks';
import NoCards from '../../components/no-cards/no-cards';
import classNames from 'classnames';
import { getActiveCity, getSortItem, sortOffers } from '../../store/app-process/selectors';
import { setActiveSortItem } from '../../store/app-process/app-process';
import { getOffers } from '../../store/data-process/selectors';
import { useCallback } from 'react';

function MainPage(): JSX.Element {

  const dispatch = useAppDispatch();

  const [selectedPointId, setSelectedPointId] = useState<Offer['id'] | null>(null);

  const activeSortItem = useAppSelector(getSortItem);

  const activeCity = useAppSelector(getActiveCity);

  const offers = useAppSelector(getOffers);

  const filteredOffers = offers.filter((offer) => offer.city.name === activeCity.name);

  const currentOffers = useAppSelector((state) => sortOffers(state, filteredOffers));

  const handleListItemHover = useCallback((itemId: Offer['id'] | null) => setSelectedPointId(itemId), []);

  const handleSortItems = useCallback((type: SortItem) => {
    dispatch(setActiveSortItem(type));
  }, [dispatch]);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>{'6 cities'}</title>
      </Helmet>
      <HeaderMemo />
      <main className={classNames(
        'page__main page__main--index',
        { 'page__main--index-empty': filteredOffers.length === 0 })}
      >
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList />
        <div className="cities">
          {filteredOffers.length === 0 ? <NoCards /> :
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{filteredOffers.length} place{addPluralEnding(filteredOffers.length)} to stay in {activeCity.name}</b>
                <SortListMemo activeSortItem={activeSortItem} onSortItems={handleSortItems} />
                <CardsListMemo offers={currentOffers} block={'cities'} onListItemHover={handleListItemHover}></CardsListMemo>
              </section>
              <div className="cities__right-section">
                <MapMemo block={'cities'} offers={offers} location={activeCity.location} selectedPointId={selectedPointId}></MapMemo>
              </div>
            </div>}
        </div>
      </main >
    </div >
  );
}

export default MainPage;
