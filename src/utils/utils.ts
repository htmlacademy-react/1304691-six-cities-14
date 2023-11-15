import { RATING_MAX } from '../const';

function getRatingValue(rating: number): number {
  return (rating * 100) / RATING_MAX;
}

function addPluralEnding(count: number) {
  return count !== 1 ? 's' : '';
}

function capitalize(str: string) {
  return str[0].toUpperCase() + str.slice(1);
}

export {
  getRatingValue,
  addPluralEnding,
  capitalize
};
