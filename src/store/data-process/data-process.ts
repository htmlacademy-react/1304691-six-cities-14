import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { DataProcess } from '../../types/types';
import { fetchAddReviewAction, fetchAroundOffersAction, fetchOfferAction, fetchReviewsAction, fetchOffersAction } from '../api-actions';

const initialState: DataProcess = {
  offers: [],
  isOffersDataLoading: false,
  aroundOffers: [],
  reviews: [],
  offer: null,
  favorites: [],
  error: null
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    dropOffer: (state) => {
      state.offer = null;
      state.aroundOffers = [];
      state.reviews = [];
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAroundOffersAction.fulfilled, (state, action) => {
        state.aroundOffers = action.payload;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offer = action.payload;
      })
      .addCase(fetchAddReviewAction.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersDataLoading = false;
      });
  }
});

export const { dropOffer } = dataProcess.actions;
