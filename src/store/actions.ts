import { createAction } from '@reduxjs/toolkit';
import { City, Offer, OfferPreview, SortItem, Reviews, Error, Review } from '../types/types';

export const getOffers = createAction<OfferPreview[]>('offers/get');

export const getOffer = createAction<Offer>('offer/get');

export const dropOffer = createAction('offer/dropOffer');

export const getAroundOffers = createAction<OfferPreview[]>('nearOffers/get');

export const addReview = createAction<Review>('reviews/addReview');

export const getReviews = createAction<Reviews>('reviews/get');

export const setActiveCity = createAction<City>('offers/setActiveCity');

export const getFavoriteOffers = createAction<OfferPreview[]>('favorites/get');

export const setActiveSortItem = createAction<SortItem>('offers/setActiveSortItem');

export const setOffersDataLoadingStatus = createAction<boolean>('offers/setOffersDataLoadingStatus');

export const setError = createAction<Error>('app/setError');

