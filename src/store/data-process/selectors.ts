import { State } from '../../types/types';
import { NameSpace } from '../../const';

export const getOffer = (state: State) => state[NameSpace.Data].offer;

export const getAroundOffers = (state: State) => state[NameSpace.Data].aroundOffers;

export const getReviews = (state: State) => state[NameSpace.Data].reviews;

export const getIsOffersDataLoading = (state: State) => state[NameSpace.Data].isOffersDataLoading;

export const getOffers = (state: State) => state[NameSpace.Data].offers;

export const getFavorites = (state: State) => state[NameSpace.Data].favorites;

export const getErrorStatus = (state: State): boolean => state[NameSpace.Data].hasError;


