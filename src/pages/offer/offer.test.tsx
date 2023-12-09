import { render, screen } from '@testing-library/react';
import Offer from './offer';
import { withStore } from '../../utils/with-store';
import { makeFakeStore } from '../../utils/mocks';
import { withHistory } from '../../utils/with-history';

describe('Component Offer', () => {

  it('should render correctly', () => {
    const fakeStore = makeFakeStore();
    const offerTestId = 'offerContainer';
    const expectedTextOther = /Other places in the neighbourhood/i;
    const expectedTextMeet = /Meet the host/i;

    const { withStoreComponent } = withStore(<Offer />, fakeStore);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    const offer = screen.getByTestId(offerTestId);

    expect(offer).toBeInTheDocument();
    expect(screen.getByText(expectedTextOther)).toBeInTheDocument();
    expect(screen.getByText(expectedTextMeet)).toBeInTheDocument();
  });

});
