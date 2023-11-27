import { createSelector } from '@reduxjs/toolkit';
import { OfferPreview, State } from '../../types/types';
import { NameSpace } from '../../const';
import { sorting } from '../../utils/utils';

export const getActiveCity = (state: State) => state[NameSpace.App].activeCity;

export const getSortItem = (state: State) => state[NameSpace.App].activeSortItem;

export const sortOffers = createSelector(
  [
    (state: State) => state[NameSpace.App].activeSortItem,
    (_: State, offers: OfferPreview[]) => offers
  ],
  (activeSortItem, offers) => {

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
