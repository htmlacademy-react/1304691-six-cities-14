
import { render, screen } from '@testing-library/react';
import { withHistory } from '../../utils/with-history';
import { withStore } from '../../utils/with-store';
import { makeFakeStore } from '../../utils/mocks';
import FavoritesList from './favorites-list';
import { fakeOffers } from '../../utils/mocks';

describe('Component FavoritesList', () => {

  it('should render correctly', () => {
    const favoritesListTestId = 'favoritesList';
    const fakeStore = makeFakeStore();

    const { withStoreComponent } = withStore(<FavoritesList offers={fakeOffers} />, fakeStore);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    const favoritesList = screen.getByTestId(favoritesListTestId);
    expect(favoritesList).toBeInTheDocument();
  });

});
