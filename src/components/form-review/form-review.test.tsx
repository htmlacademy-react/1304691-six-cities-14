import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormReview from './form-review';
import { makeFakeStore } from '../../utils/mocks';
import { withHistory } from '../../utils/with-history';
import { withStore } from '../../utils/with-store';

describe('Component FormReview', () => {

  it('should render correctly when user enter rating and review', async () => {
    const fakeStore = makeFakeStore();
    const reviewTestId = 'reviewElement';

    const expectedReviewValue = 'The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath.';

    const { withStoreComponent } = withStore(<FormReview />, fakeStore);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    await userEvent.type(
      screen.getByTestId(reviewTestId),
      expectedReviewValue,
    );

    expect(screen.getByDisplayValue(expectedReviewValue)).toBeInTheDocument();
  });

});
