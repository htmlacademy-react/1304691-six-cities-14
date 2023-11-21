import { createAction } from '@reduxjs/toolkit';
import { City, Offer, SortItem } from '../types/types';

export const fetchOffers = createAction('offers/fetch');

export const fetchOffer = createAction<Offer['id']>('offer/fetch');

export const fetchAroundOffers = createAction<Offer['id']>('nearOffers/fetch');

export const fetchReviews = createAction<Offer['id']>('reviews/fetch');

export const dropOffer = createAction('offer/dropOffer');

export const setActiveCity = createAction<City>('offers/setActiveCity');

export const fetchFavoriteOffers = createAction('favorites/fetch');

export const setActiveSortItem = createAction<SortItem>('offers/setActiveSortItem');
