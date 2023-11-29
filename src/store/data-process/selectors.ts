import { State } from '../../types/types';
import { NameSpace } from '../../const';

export const getOffer = (state: State) => state[NameSpace.Data].offer;

export const getAroundOffers = (state: State) => state[NameSpace.Data].aroundOffers;

export const getReviews = (state: State) => state[NameSpace.Data].reviews;

export const getIsOffersDataLoading = (state: State) => state[NameSpace.Data].isOffersDataLoading;

export const getOffers = (state: State) => state[NameSpace.Data].offers;

export const getFavorites = (state: State) => state[NameSpace.Data].favorites;

export const getErrorOffersStatus = (state: State): boolean => state[NameSpace.Data].hasErrorOffers;

export const getErrorOfferStatus = (state: State): boolean => state[NameSpace.Data].hasErrorOffer;

export const getAddReviewStatus = (state: State): boolean => state[NameSpace.Data].addReviewStatus.pending;

export const getErrorAddReviewStatus = (state: State): boolean => state[NameSpace.Data].addReviewStatus.rejected;

export const getAddSuccessStatus = (state: State): boolean => state[NameSpace.Data].addReviewStatus.success;

