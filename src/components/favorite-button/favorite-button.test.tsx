import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { withHistory } from '../../utils/with-history';
import { withStore } from '../../utils/with-store';
import { extractActionsTypes, makeFakeStore, fakeOffer } from '../../utils/mocks';
import FavoriteButton from './favorite-button';
import { NameBlockForFavoriteButton } from '../../const';
import { APIRoute } from '../../const';
import { fetchAddToFavoriteAction } from '../../store/api-actions';

describe('Component FavoriteButton', () => {
  const fakeStore = makeFakeStore();

  it('should render correctly', () => {

    const { withStoreComponent } = withStore(<FavoriteButton id={fakeOffer.id} isFavorite={fakeOffer.isFavorite} nameBlock={NameBlockForFavoriteButton.PlaceCard} />, fakeStore);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    const addToFavorites = screen.getByRole('button', { name: /favorites button/i });
    expect(addToFavorites).toBeVisible();
  });

  it('should dispatch "changeOfferFavoriteStatus" and "fetchAddToFavoriteAction" when user clicked to favorite button', async () => {
    const { withStoreComponent, mockStore, mockAxiosAdapter } = withStore(<FavoriteButton id={fakeOffer.id} isFavorite={fakeOffer.isFavorite} nameBlock={NameBlockForFavoriteButton.PlaceCard} />, fakeStore);

    mockAxiosAdapter.onPost(`${APIRoute.Favorite}/${fakeOffer.id}/${Number(!fakeOffer.isFavorite)}`).reply(200, []);

    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    const favoriteButton = screen.getByRole('button', { name: /favorites button/i });

    await userEvent.click(favoriteButton);

    const actions = extractActionsTypes(mockStore.getActions());

    expect(actions).toEqual([
      'DATA/changeOfferFavoriteStatus',
      fetchAddToFavoriteAction.pending.type,
      fetchAddToFavoriteAction.fulfilled.type,
    ]);
  });

});
