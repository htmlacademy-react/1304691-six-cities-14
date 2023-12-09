import { render, screen } from '@testing-library/react';
import { withHistory } from '../../utils/with-history';
import { withStore } from '../../utils/with-store';
import { makeFakeStore } from '../../utils/mocks';
import CardsList from './cards-list';
import { fakeOffers } from '../../utils/mocks';

describe('Component CardsList', () => {

  it('should render correctly', () => {
    const cardsContainerTestId = 'cardsContainer';
    const fakeStore = makeFakeStore();

    const handleListItemHover = () => {
      throw true;
    };

    const { withStoreComponent } = withStore(<CardsList offers={fakeOffers} block={'cities'} onListItemHover={handleListItemHover} />, fakeStore);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    const cardsContainer = screen.getByTestId(cardsContainerTestId);

    expect(cardsContainer).toBeInTheDocument();
  });

});
