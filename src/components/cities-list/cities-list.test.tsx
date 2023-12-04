import { random } from 'faker';
import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import { makeFakeStore } from '../../utils/mocks';
import { citiesMap } from '../../const';
import CitiesList from './cities-list';

describe('Component CitiesList', () => {

  it('should render correctly', () => {
    const citiesListTestId = 'citiesList';
    const fakeStore = makeFakeStore();
    const expectedText = random.arrayElement(citiesMap).name;

    const { withStoreComponent } = withStore(<CitiesList />, fakeStore);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    const citiesList = screen.getByTestId(citiesListTestId);

    expect(citiesList).toBeInTheDocument();
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

});
