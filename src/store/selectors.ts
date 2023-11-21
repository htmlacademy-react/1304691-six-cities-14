import { createSelector } from '@reduxjs/toolkit';
import { State } from '../types/types';
import { sorting } from '../utils/utils';

const getActiveCity = (state: State) => state.activeCity;

const getOffers = (state: State) => state.offers;

const getSortItem = (state: State) => state.activeSortItem;

export const sortOffers = createSelector(
  [getOffers, getSortItem, getActiveCity],
  (offers, activeSortItem, activeCity) => {

    const currentOffers = offers.filter((offer) => offer.city.name === activeCity.name);

    switch (activeSortItem) {
      case 'Popular':
        return sorting.Popular(currentOffers);
      case 'HightToLow':
        return sorting.HighToLow(currentOffers);
      case 'LowToHigh':
        return sorting.LowToHigh(currentOffers);
      case 'TopRated':
        return sorting.TopRated(currentOffers);
    }
  },
);

