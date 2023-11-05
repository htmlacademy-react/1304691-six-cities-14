import { RATING_MAX } from '../const';

function getRatingValue(rating: number): number {
  return (rating * 100) / RATING_MAX;
}

export {
  getRatingValue,
};
