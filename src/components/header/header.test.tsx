import { render, screen } from '@testing-library/react';
import Header from './header';
import { makeFakeStore } from '../../utils/mocks';
import { withHistory } from '../../utils/with-history';
import { withStore } from '../../utils/with-store';
import { AppRoute, NameSpace, AuthorizationStatus } from '../../const';

describe('Component Header', () => {

  const fakeStore = makeFakeStore();

  it('should render correctly', () => {
    const headerNavTestId = 'headerNav';

    const { withStoreComponent } = withStore(<Header />, fakeStore);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByTestId(headerNavTestId)).toBeInTheDocument();
  });

  it('should render favorite link when AuthorizationStatus.Auth', () => {
    fakeStore[NameSpace.User].authorizationStatus = AuthorizationStatus.Auth;

    const { withStoreComponent } = withStore(<Header />, fakeStore);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    const linkToFavorites = screen.getByRole('link', { name: /favorites/i });
    expect(linkToFavorites).toBeVisible();
    expect(linkToFavorites).toHaveAttribute('href', AppRoute.Favorites);
  });

  it('should render sign in link when AuthorizationStatus.NoAuth', () => {
    fakeStore[NameSpace.User].authorizationStatus = AuthorizationStatus.NoAuth;

    const { withStoreComponent } = withStore(<Header />, fakeStore);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    const linkToSignIn = screen.getByRole('link', { name: /sign in/i });
    expect(linkToSignIn).toBeVisible();
    expect(linkToSignIn).toHaveAttribute('href', AppRoute.Login);
  });

});
