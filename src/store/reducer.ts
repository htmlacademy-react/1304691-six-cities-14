import { createReducer } from '@reduxjs/toolkit';
import { Reviews, Offer, City, OfferPreview } from '../types/types';
import { dropOffer, fetchAroundOffers, fetchOffer, fetchOffers, fetchReviews, setActiveCity, fetchFavoriteOffers, setActiveSortItem, requireAuthorization, setOffersDataLoadingStatus, setError } from './actions';
import { CityMapDefault, AuthorizationStatus } from '../const';
import { SortItem, Error } from '../types/types';

const initialState: {
  offers: OfferPreview[];
  aroundOffers: OfferPreview[];
  reviews: Reviews;
  offer: Offer | null;
  favorites: OfferPreview[];
  activeCity: City;
  loaded: boolean;
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
  loaded: false,
  activeCity: CityMapDefault,
  activeSortItem: 'Popular',
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  error: null
};

const reducer = createReducer(initialState, (bulder) => {
  bulder
    .addCase(fetchOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(fetchOffer, (state, action) => {
      state.offer = action.payload;
      state.loaded = true;
    })
    .addCase(fetchAroundOffers, (state, action) => {
      state.aroundOffers = action.payload;
    })
    .addCase(fetchReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(dropOffer, (state) => {
      state.offer = null;
      state.aroundOffers = [];
      state.loaded = false;
    })
    .addCase(setActiveCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(fetchFavoriteOffers, (state, action) => {
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
    });

});

export { reducer };
