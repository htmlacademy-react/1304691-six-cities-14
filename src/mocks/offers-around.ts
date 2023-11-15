import { Offers } from '../types/types';
import { nanoid } from 'nanoid';
import { CityName } from '../const';

const AVATAR_URL = 'https://i.pravatar.cc/128';

const offersAroundHere: Offers = [
  {
    id: nanoid(),
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: CityName.Amsterdam
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: [
      'Heating'
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: true,
      name: 'Angelina'
    },
    images: [
      `${AVATAR_URL}?rnd=${Math.random()}`
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: 'img/apartment-01.jpg',
    price: 160,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'room'
  },
  {
    id: nanoid(),
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: CityName.Amsterdam
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: [
      'Heating'
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: true,
      name: 'Angelina'
    },
    images: [
      `${AVATAR_URL}?rnd=${Math.random()}`
    ],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: 'img/apartment-02.jpg',
    price: 70,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'room'
  },
  {
    id: nanoid(),
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: CityName.Amsterdam
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: [
      'Heating'
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: true,
      name: 'Angelina'
    },
    images: [
      `${AVATAR_URL}?rnd=${Math.random()}`
    ],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: 'img/apartment-03.jpg',
    price: 50,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'room'
  },
];

export {
  offersAroundHere,
};
