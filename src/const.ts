const CARD_COUNT: number = 5;

const RATING_MAX = 5;

const REVIEW_DATE_FORMAT = 'MMMM YYYY';

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
  Dussledorf = 'Dusseldorf'
}

export {
  CARD_COUNT,
  AppRoute,
  AuthorizationStatus,
  CityName,
  RATING_MAX,
  REVIEW_DATE_FORMAT,
  MIN_COMMENT_LENGTH,
  MAX_COMMENT_LENGTH
};
