import { render, screen } from '@testing-library/react';
import ReviewsItem from './reviews-item';
import { fakeReviews } from '../../utils/mocks';

describe('Component NoFavorites', () => {

  it('should render correctly', () => {
    const reviewsItemTestId = 'reviewsItem';

    render(<ReviewsItem review={fakeReviews[0]} />);

    const reviewsItem = screen.getByTestId(reviewsItemTestId);
    expect(reviewsItem).toBeInTheDocument();
  });

});
