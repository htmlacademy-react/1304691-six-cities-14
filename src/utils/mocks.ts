import { ThunkDispatch } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import { Action } from 'redux';
import { OfferPreview, State } from '../types/types';
import { CityName } from '../const';


export type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createAPI>, Action>;

export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);

export const makeFakeOffer = (): OfferPreview => ({
  id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
  title: 'Beautiful & luxurious studio at great location',
  type: 'apartment',
  price: 120,
  city: {
    name: CityName.Amsterdam,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    }
  },
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  },
  isFavorite: false,
  isPremium: false,
  rating: 4,
  previewImage: 'https://url-to-image/image.png'
});
