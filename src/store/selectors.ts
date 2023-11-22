import { createSelector } from '@reduxjs/toolkit';
import { SortItem, Offers } from '../types/types';
import { sorting } from '../utils/utils';

const getOffers = (state: { offers: Offers; activeSortItem: SortItem }) => state.offers;

const getSortItem = (state: { offers: Offers; activeSortItem: SortItem }) => state.activeSortItem;

export const sortOffers = createSelector(
  [getOffers, getSortItem],
  (offers, activeSortItem) => {

    switch (activeSortItem) {
      case 'Popular':
        return sorting.Popular(offers);
      case 'HightToLow':
        return sorting.HighToLow(offers);
      case 'LowToHigh':
        return sorting.LowToHigh(offers);
      case 'TopRated':
        return sorting.TopRated(offers);
    }
  },
);

