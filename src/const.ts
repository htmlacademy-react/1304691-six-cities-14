import { City } from './types/types';

const CARD_COUNT: number = 5;

const RATING_MAX = 5;

const REVIEW_DATE_FORMAT = 'MMMM YYYY';

const MAX_AROUND_OFFERS_COUNT = 3;

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

const CityMapDefault: City = {
  name: CityName.Paris,
  location: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13
  }
};

const CitiesMap: City[] = [
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
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  {
    name: CityName.Brussels,
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  {
    name: CityName.Amsterdam,
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  {
    name: CityName.Hamburg,
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  {
    name: CityName.Dusseldorf,
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  }
];

export {
  CARD_COUNT,
  AppRoute,
  AuthorizationStatus,
  CityName,
  CitiesMap,
  CityMapDefault,
  RATING_MAX,
  REVIEW_DATE_FORMAT,
  MIN_COMMENT_LENGTH,
  MAX_COMMENT_LENGTH,
  MAX_AROUND_OFFERS_COUNT
};
