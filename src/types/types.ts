import { CityName, SortMap } from '../const';
import { store } from '../store/index.js';
import { AuthorizationStatus } from '../const';

export type SortItem = keyof typeof SortMap;

export type Host = {
  avatarUrl: string;
  isPro: boolean;
  name: string;
}

export type City = {
  name: CityName;
  location: Location;
}

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type Review = {
  comment: string;
  date: string;
  id: string;
  rating: number;
  user: {
    avatarUrl: string;
    isPro: boolean;
    name: string;
  };
}

export type Reviews = Review[];

export type OfferPreview = {
  city: City;
  id: string;
  isFavorite: boolean;
  isPremium: boolean;
  location: Location;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
}

export type Offer = OfferPreview & {
  bedrooms: number;
  description: string;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
}

export type Offers = Offer[];

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AuthData = {
  email: string;
  password: string;
};

export type UserData = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
};

export type ReviewData = {
  comment: string;
  rating: number;
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type DataProcess = {
  offers: OfferPreview[];
  isOffersDataLoading: boolean;
  aroundOffers: OfferPreview[];
  reviews: Reviews;
  offer: Offer | null;
  favorites: OfferPreview[];
  hasError: boolean;
};

export type AppProcess = {
  activeCity: City;
  activeSortItem: SortItem;
};


