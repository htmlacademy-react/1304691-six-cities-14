import { CityName } from '../const';
import { store } from '../store/index.js';

type Host = {
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
  id: number;
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

