
import { render, screen } from '@testing-library/react';
import { withHistory } from '../../utils/with-history';
import { withStore } from '../../utils/with-store';
import { makeFakeStore } from '../../utils/mocks';
import Card from './card';
import { fakeOffers } from '../../utils/mocks';

describe('Component Card', () => {

  it('should render correctly', () => {
    const offersItemTestId = 'offersCard';
    const fakeStore = makeFakeStore();

    const block = 'cities';

    const handleListItemHover = () => {
      throw true;
    };

    const { withStoreComponent } = withStore(<Card offer={fakeOffers[0]} block={block} onListItemHover={handleListItemHover} />, fakeStore);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    const cardItem = screen.getByTestId(offersItemTestId);
    expect(cardItem).toBeInTheDocument();
  });

});
