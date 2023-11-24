import { createReducer } from '@reduxjs/toolkit';
import { dropOffer, getAroundOffers, getOffer, getOffers, getReviews, setActiveCity, getFavoriteOffers, setActiveSortItem, requireAuthorization, setOffersDataLoadingStatus, setError, addReview } from './actions';
import { CityMapDefault, AuthorizationStatus } from '../const';
import { Reviews, Offer, City, OfferPreview, SortItem, Error } from '../types/types';

const initialState: {
  offers: OfferPreview[];
  aroundOffers: OfferPreview[];
  reviews: Reviews;
  offer: Offer | null;
  favorites: OfferPreview[];
  activeCity: City;
  activeSortItem: SortItem;
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  error: Error;
} = {
  offers: [],
  aroundOffers: [],
  reviews: [],
  offer: null,
  favorites: [],
  activeCity: CityMapDefault,
  activeSortItem: 'Popular',
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  error: null
};

const reducer = createReducer(initialState, (bulder) => {
  bulder
    .addCase(getOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(getOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(getAroundOffers, (state, action) => {
      state.aroundOffers = action.payload;
    })
    .addCase(getReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(dropOffer, (state) => {
      state.offer = null;
      state.aroundOffers = [];
      state.reviews = [];
    })
    .addCase(setActiveCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(getFavoriteOffers, (state, action) => {
      state.favorites = action.payload;
    })
    .addCase(setActiveSortItem, (state, action) => {
      state.activeSortItem = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(addReview, (state, action) => {
      state.reviews.push(action.payload);
    });

});

export { reducer };
