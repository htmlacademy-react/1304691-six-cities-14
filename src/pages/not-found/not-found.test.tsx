import { render, screen } from '@testing-library/react';
import NotFound from './not-found';
import { withHistory } from '../../utils/with-history';
import { withStore } from '../../utils/with-store';
import { makeFakeStore } from '../../utils/mocks';

describe('Component NotFound', () => {

  it('should render correctly', () => {
    const fakeStore = makeFakeStore();

    const expectedText = /404 Not Found/i;
    const expectedLinkText = 'Вернуться на главную';

    const { withStoreComponent } = withStore(<NotFound />, fakeStore);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.getByText(expectedLinkText)).toBeInTheDocument();
  });

});
