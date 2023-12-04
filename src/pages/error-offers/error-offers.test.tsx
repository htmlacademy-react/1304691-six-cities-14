import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { withHistory, withStore } from '../../utils/mock-component';
import ErrorOffers from './error-offers';
import { fetchOffersAction } from '../../store/api-actions';
import { APIRoute } from '../../const';
import { extractActionsTypes } from '../../utils/mocks';

describe('Component ErrorOffers', () => {

  it('should render correctly', () => {
    const expectedText = /Не удалось загрузить данные/i;

    const { withStoreComponent } = withStore(<ErrorOffers />, {});
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should dispatch "fetchOffersAction" when user clicked replay button', async () => {
    const { withStoreComponent, mockStore, mockAxiosAdapter } = withStore(<ErrorOffers />, {});
    mockAxiosAdapter.onGet(APIRoute.Offers).reply(200, []);

    render(withStoreComponent);
    await userEvent.click(screen.getByRole('button'));
    const actions = extractActionsTypes(mockStore.getActions());

    expect(actions).toEqual([
      fetchOffersAction.pending.type,
      fetchOffersAction.fulfilled.type,
    ]);

  });

});
