import { CityName } from '../const';

type Host = {
  avatarUrl: string;
  isPro: boolean;
  name: string;
}

export type City = {
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  name: CityName;
}

type Location = {
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

export type Offer = {
  bedrooms: number;
  city: City;
  description: string;
  goods: string[];
  host: Host;
  id: string;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: Location;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
}

export type Offers = Offer[];

