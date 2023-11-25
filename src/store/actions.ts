import { createAction } from '@reduxjs/toolkit';
import { City, Offer, OfferPreview, SortItem, Reviews, Error, Review } from '../types/types';
import { AuthorizationStatus } from '../const';

export const getOffers = createAction<OfferPreview[]>('offers/get');

export const getOffer = createAction<Offer>('offer/get');

export const getAroundOffers = createAction<OfferPreview[]>('nearOffers/get');

export const getReview = createAction<Offer['id']>('reviews/get');

export const getReviews = createAction<Reviews>('reviews/get');

export const dropOffer = createAction('offer/dropOffer');

export const setActiveCity = createAction<City>('offers/setActiveCity');

export const getFavoriteOffers = createAction<OfferPreview[]>('favorites/get');

export const setActiveSortItem = createAction<SortItem>('offers/setActiveSortItem');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setOffersDataLoadingStatus = createAction<boolean>('offers/setOffersDataLoadingStatus');

export const setError = createAction<Error>('app/setError');

export const addReview = createAction<Review>('offer/addReview');
