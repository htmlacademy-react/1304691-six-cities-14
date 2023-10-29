import { Offer } from '../types/offers';

const AVATAR_URL = 'https://i.pravatar.cc/128';

const offers: Offer[] = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: [
      'Heating'
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 3,
      isPro: true,
      name: 'Angelina'
    },
    id: 1,
    images: [
      `${AVATAR_URL}?rnd=${Math.random()}`
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: 'img/apartment-01.jpg',
    price: 80,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'room'
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Paris'
    },
    description: 'I really wanted to see Paris, and when the opportunity arose to accompany my husband on a business trip to Paris, I was very happy about it. Trip for 4 days.',
    goods: [
      'Heating'
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 3,
      isPro: true,
      name: 'Angelina'
    },
    id: 2,
    images: [
      `${AVATAR_URL}?rnd=${Math.random()}`
    ],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: 'img/apartment-02.jpg',
    price: 120,
    rating: 2,
    title: 'Boutique Hotel "Vellion Baumansky"',
    type: 'apartment'
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Hamburg'
    },
    description: 'В Гамбург и вообще на Север Германии я хотел добраться очень давно, но постоянно возникали другие хотелки по поездкам. Но сейчас, когда уже истекала многолетняя немецкая виза, учитывая, что новую немецкую визу фактически не получить на данный момент, то Гамбург был наиболее очевидным выбором. ',
    goods: [
      'Heating'
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 3,
      isPro: true,
      name: 'Angelina'
    },
    id: 3,
    images: [
      `${AVATAR_URL}?rnd=${Math.random()}`
    ],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: 'img/apartment-small-04.jpg',
    price: 200,
    rating: 3,
    title: 'Hotel and apartments Stars of Arbat',
    type: 'room'
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Dussledorf'
    },
    description: 'На последние выходные августам нам нужна была ночёвка в Дюссельдорфе, но мы тянули с бронированием отеля до последнего и поэтому в начале недели на букинге в интересующем нас районе всё было распродано или цены были, мягко говоря, высоковаты.',
    goods: [
      'Heating'
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 3,
      isPro: true,
      name: 'Angelina'
    },
    id: 4,
    images: [
      `${AVATAR_URL}?rnd=${Math.random()}`
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: 'img/apartment-03.jpg',
    price: 150,
    rating: 2.5,
    title: 'Hilton Garden Inn Moscow Krasnoselskaya Hotel',
    type: 'apartment'
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Dussledorf'
    },
    description: 'На последние выходные августам нам нужна была ночёвка в Дюссельдорфе, но мы тянули с бронированием отеля до последнего и поэтому в начале недели на букинге в интересующем нас районе всё было распродано или цены были, мягко говоря, высоковаты.',
    goods: [
      'Heating'
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 3,
      isPro: true,
      name: 'Angelina'
    },
    id: 5,
    images: [
      `${AVATAR_URL}?rnd=${Math.random()}`
    ],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: 'img/apartment-small-03.jpg',
    price: 70,
    rating: 1,
    title: 'CONCERT at Elektrozavodskaya KONCERT.RU™ HOTEL',
    type: 'room'
  }
];

export {
  offers,
};
