const CARD_COUNT: number = 5;

const RATING_MAX = 5;

const URL_MARKER_DEFAULT = '../markup/img/pin.svg';

const URL_MARKER_CURRENT = '../markup/img/pin-active.svg';

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

export {
  CARD_COUNT,
  AppRoute,
  AuthorizationStatus,
  RATING_MAX,
  URL_MARKER_DEFAULT,
  URL_MARKER_CURRENT,
  REVIEW_DATE_FORMAT
};
