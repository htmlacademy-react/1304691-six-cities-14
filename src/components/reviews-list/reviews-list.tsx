import ReviewsItem from '../reviews-item/reviews-item';
import { Reviews } from '../../types/types';
import { memo } from 'react';

type ReviewsListProps = {
  reviews: Reviews;
}

function ReviewsListComponent({ reviews }: ReviewsListProps): JSX.Element {

  return (
    <ul className="reviews__list" data-testid="reviewsContainer">
      {reviews.map((review) => (
        <ReviewsItem key={review.id} review={review} />
      ))}
    </ul>
  );
}


const ReviewsList = memo(ReviewsListComponent);

export default ReviewsList;
