import { City, UserData } from './types/types';

const CARD_COUNT: number = 5;

const RATING_MAX = 5;

const REVIEW_DATE_FORMAT = 'MMMM YYYY';

const MAX_AROUND_OFFERS_COUNT = 3;
const MAX_REVIEWS_COUNT = 10;

const MAX_OFFER_IMAGE_COUNT = 6;

enum AppRoute {
  Root = '/',
  Login = '/login',
  NotFound = '/404',
  Favorites = '/favorites',
  Offer = '/offer/'
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const MIN_COMMENT_LENGTH = 50;
const MAX_COMMENT_LENGTH = 300;

enum CityName {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}

const CITY_MAP_DEFAULT: City = {
  name: CityName.Paris,
  location: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13
  }
};

enum NameBlockForFavoriteButton {
  Offer = 'offer',
  PlaceCard = 'place-card'
}

const CITIES_MAP: City[] = [
  {
    name: CityName.Paris,
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  {
    name: CityName.Cologne,
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    }
  },
  {
    name: CityName.Brussels,
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13
    }
  },
  {
    name: CityName.Amsterdam,
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    }
  },
  {
    name: CityName.Hamburg,
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    }
  },
  {
    name: CityName.Dusseldorf,
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    }
  }
];

const SortMap = {
  Popular: 'Popular',
  LowToHigh: 'Price: low to high',
  HightToLow: 'Price: high to low',
  TopRated: 'Top rated first'
} as const;

enum APIRoute {
  Offers = '/offers',
  Favorite = '/favorite',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
}

enum NameSpace {
  Data = 'DATA',
  App = 'APP',
  User = 'USER',
}

const defaultUser: UserData = {
  name: '',
  avatarUrl: '',
  isPro: false,
  email: '',
  token: ''
};

export {
  CARD_COUNT,
  AppRoute,
  AuthorizationStatus,
  CityName,
  APIRoute,
  SortMap,
  CITIES_MAP,
  CITY_MAP_DEFAULT,
  RATING_MAX,
  REVIEW_DATE_FORMAT,
  MIN_COMMENT_LENGTH,
  MAX_COMMENT_LENGTH,
  MAX_REVIEWS_COUNT,
  MAX_AROUND_OFFERS_COUNT,
  NameSpace,
  defaultUser,
  MAX_OFFER_IMAGE_COUNT,
  NameBlockForFavoriteButton
};
