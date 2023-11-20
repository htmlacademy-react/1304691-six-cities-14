import { RATING_MAX } from '../const';
import { OfferPreview } from '../types/types';

function getRatingValue(rating: number): number {
  return (rating * 100) / RATING_MAX;
}

function addPluralEnding(count: number) {
  return count !== 1 ? 's' : '';
}

function capitalize(str: string) {
  return str[0].toUpperCase() + str.slice(1);
}

function sortByRating(offerA: OfferPreview, offerB: OfferPreview) {
  return offerB.rating - offerA.rating;
}

function sortLowToHigh(offerA: OfferPreview, offerB: OfferPreview) {
  return offerA.price - offerB.price;
}

function sortHighToLow(offerA: OfferPreview, offerB: OfferPreview) {
  return offerB.price - offerA.price;
}

const sorting: Record<string, (offers: OfferPreview[]) => OfferPreview[]> = {
  Popular: (offers: OfferPreview[]) => offers.slice(),
  HighToLow: (offers: OfferPreview[]) => offers.slice().sort(sortHighToLow),
  LowToHigh: (offers: OfferPreview[]) => offers.slice().sort(sortLowToHigh),
  TopRated: (offers: OfferPreview[]) => offers.slice().sort(sortByRating)
};

export {
  getRatingValue,
  addPluralEnding,
  capitalize,
  sorting
};
