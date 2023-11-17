import { createReducer } from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';
import { reviews } from '../mocks/reviews';
import { Offers, Reviews, Offer, City } from '../types/types';
import { dropOffer, fetchAroundOffers, fetchOffer, fetchOffers, fetchReviews, setActiveCity, fetchFavoriteOffers } from './actions';
import { CityMapDefault } from '../const';

const initialState: {
  offers: Offers;
  aroundOffers: Offers;
  reviews: Reviews;
  offer: Offer | null;
  favorites: Offers;
  activeCity: City;
} = {
  offers,
  aroundOffers: [],
  reviews: [],
  offer: null,
  favorites: [],
  activeCity: CityMapDefault
};

const reducer = createReducer(initialState, (bulder) => {
  bulder
    .addCase(fetchOffers, (state) => {
      state.offers = offers;
    })
    .addCase(fetchOffer, (state, action) => {
      state.offer = offers.find((offer) => offer.id === action.payload) ?? null;
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
    })
    .addCase(setActiveCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(fetchFavoriteOffers, (state) => {
      state.favorites = offers.filter((offer) => offer.isFavorite);
    });
});

export { reducer };
