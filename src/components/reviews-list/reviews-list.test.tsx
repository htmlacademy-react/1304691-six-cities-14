import { render, screen } from '@testing-library/react';
import ReviewsList from './reviews-list';
import { fakeReviews } from '../../utils/mocks';

describe('Component ReviewsList', () => {

  it('should render correctly', () => {
    const reviewsItemTestId = 'reviewsContainer';

    render(<ReviewsList reviews={fakeReviews} />);

    const reviewsItem = screen.getByTestId(reviewsItemTestId);
    expect(reviewsItem).toBeInTheDocument();
  });

});
