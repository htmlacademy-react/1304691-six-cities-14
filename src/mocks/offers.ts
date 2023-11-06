import { Offers } from '../types/types';

const AVATAR_URL = 'https://i.pravatar.cc/128';

const offers: Offers = [
  {
    id: 1,
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
    price: 80,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'room'
  },
  {
    id: 2,
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
    images: [
      `${AVATAR_URL}?rnd=${Math.random()}`
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
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
    id: 3,
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
    images: [
      `${AVATAR_URL}?rnd=${Math.random()}`
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
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
    id: 4,
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
    images: [
      `${AVATAR_URL}?rnd=${Math.random()}`
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
  },
  {
    id: 8,
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Amsterdam'
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
    images: [
      `${AVATAR_URL}?rnd=${Math.random()}`
    ],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.41463874452988,
      longitude: 5.025148896856438,
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
