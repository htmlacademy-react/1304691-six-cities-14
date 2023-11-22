import { createAction } from '@reduxjs/toolkit';
import { City, Offer, OfferPreview, SortItem, Reviews } from '../types/types';
import { AuthorizationStatus } from '../const';

export const fetchOffers = createAction<OfferPreview[]>('offers/fetch');

export const fetchOffer = createAction<Offer>('offer/fetch');

export const fetchAroundOffers = createAction<OfferPreview[]>('nearOffers/fetch');

export const fetchReview = createAction<Offer['id']>('reviews/fetch');

export const fetchReviews = createAction<Reviews>('reviews/fetch');

export const dropOffer = createAction('offer/dropOffer');

export const setActiveCity = createAction<City>('offers/setActiveCity');

export const fetchFavoriteOffers = createAction<OfferPreview[]>('favorites/fetch');

export const setActiveSortItem = createAction<SortItem>('offers/setActiveSortItem');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setOffersDataLoadingStatus = createAction<boolean>('offers/setOffersDataLoadingStatus');
