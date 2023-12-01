import { ThunkDispatch } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import { Action } from 'redux';
import { OfferPreview, State, Review } from '../types/types';
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

export const makeFakeFavoriteOffer = (): OfferPreview => ({
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
  isFavorite: true,
  isPremium: false,
  rating: 4,
  previewImage: 'https://url-to-image/image.png'
});

export const makeFakeReview = (): Review => ({
  id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
  date: '2019-05-08T14:13:56.569Z',
  user: {
    name: 'Oliver Conner',
    avatarUrl: 'https://url-to-image/image.png',
    isPro: false
  },
  comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  rating: 4
});

export const fakeOffer = {
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
  description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  bedrooms: 3,
  goods: [
    'Heating'
  ],
  host: {
    name: 'Oliver Conner',
    avatarUrl: 'https://url-to-image/image.png',
    isPro: false
  },
  images: [
    'https://url-to-image/image.png'
  ],
  maxAdults: 4
};
