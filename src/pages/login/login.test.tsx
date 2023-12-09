import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './login';
import { makeFakeStore } from '../../utils/mocks';
import { withHistory } from '../../utils/with-history';
import { withStore } from '../../utils/with-store';

describe('Component Login', () => {

  it('should render correctly when user enter login and password', async () => {
    const fakeStore = makeFakeStore();
    const loginTestId = 'loginElement';
    const passwordTestId = 'passwordElement';

    const expectedLoginValue = 'keks';
    const expectedPasswordValue = '123456d';

    const { withStoreComponent } = withStore(<Login />, fakeStore);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    await userEvent.type(
      screen.getByTestId(loginTestId),
      expectedLoginValue,
    );
    await userEvent.type(
      screen.getByTestId(passwordTestId),
      expectedPasswordValue,
    );

    expect(screen.getByDisplayValue(expectedLoginValue)).toBeInTheDocument();
    expect(screen.getByDisplayValue(expectedPasswordValue)).toBeInTheDocument();
  });

});
