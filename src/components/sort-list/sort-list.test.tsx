import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SortList from './sort-list';
import { setActiveSortItem } from '../../store/app-process/app-process';
import { createAPI } from '../../services/api';
import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action } from 'redux';
import { State, SortItem } from '../../types/types';
import { AppThunkDispatch } from '../../utils/mocks';

describe('Component SortList', () => {

  const axios = createAPI();
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);

  let store: ReturnType<typeof mockStoreCreator>;
  const activeSortItem = 'Popular';
  const handleSortItems = (type: SortItem) => {
    store.dispatch(setActiveSortItem(type));
  };

  beforeEach(() => {
    store = mockStoreCreator({ DATA: { offers: []}, APP: {}, USER: {} });
  });

  it('should render correctly', () => {
    const sortContainerTestId = 'sortingContainer';

    render(<SortList activeSortItem={activeSortItem} onSortItems={handleSortItems} />);

    const sortContainer = screen.getByTestId(sortContainerTestId);

    expect(sortContainer).toBeInTheDocument();
  });

  it('should open sort list when user click sortButton', async () => {
    const sortButtonTestId = 'sortingButton';
    const sortListTestId = 'sortingList';

    render(<SortList activeSortItem={activeSortItem} onSortItems={handleSortItems} />);

    const sortButton = screen.getByTestId(sortButtonTestId);
    const sortList = screen.getByTestId(sortListTestId);

    await userEvent.click(sortButton);

    expect(sortButton).toBeInTheDocument();
    expect(sortList).toHaveClass('places__options--opened');
  });

});
