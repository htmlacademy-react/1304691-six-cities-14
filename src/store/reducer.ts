import { createReducer } from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';
import { reviews } from '../mocks/reviews';
import { Offers, Reviews, Offer, City, OfferPreview } from '../types/types';
import { dropOffer, fetchAroundOffers, fetchOffer, fetchOffers, fetchReviews, setActiveCity, fetchFavoriteOffers, setActiveSortItem } from './actions';
import { CityMapDefault } from '../const';
import { SortItem } from '../types/types';

const initialState: {
  offers: Offers;
  aroundOffers: OfferPreview[];
  reviews: Reviews;
  offer: Offer | null;
  favorites: OfferPreview[];
  activeCity: City;
  loaded: boolean;
  activeSortItem: SortItem;
} = {
  offers,
  aroundOffers: [],
  reviews: [],
  offer: null,
  favorites: [],
  loaded: false,
  activeCity: CityMapDefault,
  activeSortItem: 'Popular'
};

const reducer = createReducer(initialState, (bulder) => {
  bulder
    .addCase(fetchOffers, (state) => {
      state.offers = offers;
    })
    .addCase(fetchOffer, (state, action) => {
      state.offer = offers.find((offer) => offer.id === action.payload) ?? null;
      state.loaded = true;
    })
    .addCase(fetchAroundOffers, (state, action) => {
      state.aroundOffers = offers.filter((offer) => offer.id !== action.payload);
    })
    .addCase(fetchReviews, (state) => {
      state.reviews = reviews;
    })
    .addCase(dropOffer, (state) => {
      state.offer = null;
      state.aroundOffers = [];
      state.loaded = false;
    })
    .addCase(setActiveCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(fetchFavoriteOffers, (state) => {
      state.favorites = offers.filter((offer) => offer.isFavorite);
    })
    .addCase(setActiveSortItem, (state, action) => {
      state.activeSortItem = action.payload;
    });
});

export { reducer };
