import { render, screen } from '@testing-library/react';
import Favorites from './favorites';
import { makeFakeStore } from '../../utils/mocks';
import { withHistory } from '../../utils/with-history';
import { withStore } from '../../utils/with-store';

describe('Component Favorites', () => {

  it('should render correctly', () => {
    const fakeStore = makeFakeStore();

    const expectedText = /Saved listing/i;

    const { withStoreComponent } = withStore(<Favorites />, fakeStore);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

});
