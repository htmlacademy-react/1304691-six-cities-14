import { render, screen } from '@testing-library/react';
import MainPage from './main';
import { withStore } from '../../utils/with-store';
import { makeFakeStore } from '../../utils/mocks';
import { withHistory } from '../../utils/with-history';

describe('Component MainPage', () => {

  it('should render correctly', () => {
    const fakeStore = makeFakeStore();

    const { withStoreComponent } = withStore(<MainPage />, fakeStore);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    const citiesList = screen.getByRole('navigation', { name: /cities navigation/i });
    const sortingForm = screen.queryByRole('form', { name: /sorting form/i });

    expect(citiesList).toBeVisible();
    expect(sortingForm).not.toBeInTheDocument();
  });

});
