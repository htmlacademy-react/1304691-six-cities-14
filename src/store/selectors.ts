import { createSelector } from '@reduxjs/toolkit';
import { SortItem, OfferPreview, State } from '../types/types';
import { sorting } from '../utils/utils';

export const getActiveCity = (state: State) => state.activeCity;

export const getOffers = (state: { offers: OfferPreview[]; activeSortItem: SortItem }) => state.offers;

export const getSortItem = (state: { offers: OfferPreview[]; activeSortItem: SortItem }) => state.activeSortItem;

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

