import CardsList from '../../components/cards-list/cards-list';
import { Helmet } from 'react-helmet-async';
import Map from '../../components/map/map';
import { Offer, SortItem } from '../../types/types';
import { addPluralEnding, checkLengthArray } from '../../utils/utils';
import { useState, useCallback, useMemo } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import CitiesList from '../../components/cities-list/cities-list';
import Header from '../../components/header/header';
import SortList from '../../components/sort-list/sort-list';
import NoCards from '../../components/no-cards/no-cards';
import classNames from 'classnames';
import { getActiveCity, getSortItem, sortOffers } from '../../store/app-process/selectors';
import { setActiveSortItem } from '../../store/app-process/app-process';
import { getOffers } from '../../store/data-process/selectors';

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

  const isEmpty = useMemo(() => checkLengthArray(filteredOffers), [filteredOffers]);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>{'6 cities'}</title>
      </Helmet>
      <Header />
      <main className={classNames(
        'page__main page__main--index',
        { 'page__main--index-empty': isEmpty })}
      >
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList />
        <div className="cities">
          {isEmpty ? <NoCards city={activeCity} /> :
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{filteredOffers.length} place{addPluralEnding(filteredOffers.length)} to stay in {activeCity.name}</b>
                <SortList activeSortItem={activeSortItem} onSortItems={handleSortItems} />
                <CardsList offers={currentOffers} block={'cities'} onListItemHover={handleListItemHover}></CardsList>
              </section>
              <div className="cities__right-section">
                <Map block={'cities'} offers={filteredOffers} location={activeCity.location} selectedPointId={selectedPointId}></Map>
              </div>
            </div>}
        </div>
      </main >
    </div >
  );
}

export default MainPage;
