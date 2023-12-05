
import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import { makeFakeStore } from '../../utils/mocks';
import FavoritesCard from './favorites-card';
import { fakeOffers } from '../../utils/mocks';

describe('Component FavoritesCard', () => {

  it('should render correctly', () => {
    const favoritesItemTestId = 'favoritesItem';
    const fakeStore = makeFakeStore();

    const { withStoreComponent } = withStore(<FavoritesCard offer={fakeOffers[0]} />, fakeStore);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    const favoritesItem = screen.getByTestId(favoritesItemTestId);
    expect(favoritesItem).toBeInTheDocument();
  });

});
