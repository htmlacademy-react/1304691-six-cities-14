import { ThunkDispatch } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import { Action } from 'redux';
import { OfferPreview, State, Review, Offer, UserData, Location, City } from '../types/types';
import { CityName } from '../const';
import { name, internet, datatype, random } from 'faker';
import { CITIES_MAP } from '../const';
import { AuthorizationStatus } from '../const';

export type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createAPI>, Action>;

export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);

export const makeFakeLocation = (): Location => ({
  latitude: datatype.number({ min: -90, max: 90, precision: 0.000001 }),
  longitude: datatype.number({ min: -180, max: 180, precision: 0.000001 }),
  zoom: datatype.number({ min: 1, max: 17 }),
} as Location);

export const fakeOffers: OfferPreview[] = [
  {
    id: 'cdaa2ba9-d9f0-47f0-8b3a-213925c2b052',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: CityName.Amsterdam,
      location: makeFakeLocation(),
    },
    location: makeFakeLocation(),
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'https://url-to-image/image.png'
  },
  {
    id: 'ded0b68b-031b-44e0-b7e3-a0468fb202ad',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: CityName.Amsterdam,
      location: makeFakeLocation()
    },
    location: makeFakeLocation(),
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'https://url-to-image/image.png'
  },
  {
    id: '58969c57-5c63-4bec-9bdc-666b19bbe21e',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: CityName.Amsterdam,
      location: makeFakeLocation()
    },
    location: makeFakeLocation(),
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'https://url-to-image/image.png'
  }
];

export const fakeReviews: Review[] = [
  {
    id: 'cdaa2ba9-d9f0-47f0-8b3a-213925c2b052',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Oliver Conner',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4
  },
  {
    id: 'ded0b68b-031b-44e0-b7e3-a0468fb202ad',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Oliver Conner',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4
  },
  {
    id: '58969c57-5c63-4bec-9bdc-666b19bbe21e',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Oliver Conner',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4
  }
];

export const fakeOffer: Offer = {
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
  previewImage: 'https://url-to-image/image.png',
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

export const makeFakeCity = (): City => ({
  name: random.arrayElement(CITIES_MAP).name,
  location: makeFakeLocation()
} as City);

export const makeFakeUserData = (): UserData => ({
  avatarUrl: internet.avatar(),
  email: internet.email(),
  id: datatype.number({ min: 1, max: 100 }),
  isPro: datatype.boolean(),
  name: name.firstName(),
  token: datatype.uuid(),
} as UserData);

export const makeFakeStore = (initialState?: Partial<State>): State => ({
  DATA: {
    offers: fakeOffers,
    isOffersDataLoading: false,
    aroundOffers: fakeOffers,
    reviews: fakeReviews,
    offer: null,
    favorites: fakeOffers,
    hasErrorOffers: false,
    hasErrorOffer: false,
    addReviewStatus: {
      pending: false,
      rejected: false,
      success: false
    }
  },
  USER: {
    authorizationStatus: AuthorizationStatus.Unknown,
    user: makeFakeUserData()
  },
  APP: {
    activeCity: makeFakeCity(),
    activeSortItem: 'Popular',
  },
  ...initialState ?? {},
});
