import ReviewsItem from '../reviews-item/reviews-item';
import { Reviews } from '../../types/types';

type ReviewsListProps = {
  reviews: Reviews;
}

function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {

  const sortedReviews = reviews.slice().sort((reviewA, reviewB) => new Date(reviewB.date).getTime() - new Date(reviewA.date).getTime());

  return (
    <ul className="reviews__list">
      {sortedReviews.map((review) => (
        <ReviewsItem key={review.id} review={review} />
      ))}
    </ul>
  );
}

export default ReviewsList;
