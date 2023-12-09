import { useState, KeyboardEvent } from 'react';
import classNames from 'classnames';
import { SortMap } from '../../const';
import { SortItem } from '../../types/types';
import { memo } from 'react';

type SortListProps = {
  activeSortItem: SortItem;
  onSortItems: (type: SortItem) => void;
}

function SortListComponent({ onSortItems, activeSortItem }: SortListProps): JSX.Element {

  const [openSort, setOpenSort] = useState<boolean>(false);

  function handleSortFormClick() {
    setOpenSort((prevOpenSort) => !prevOpenSort);
  }

  function handleKeydown(evt: KeyboardEvent) {
    if (evt.key === 'Escape' && openSort) {
      evt.preventDefault();
      setOpenSort(false);
    }
  }

  function handleSortItemClick(type: SortItem) {
    onSortItems(type);
    setOpenSort(false);
  }

  return (
    <form className="places__sorting" action="#" method="get" onKeyDown={handleKeydown} data-testid="sortingContainer" role="form" aria-label="Sorting form">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleSortFormClick} data-testid="sortingButton">
        {SortMap[activeSortItem]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={classNames(
        'places__options places__options--custom',
        { 'places__options--opened': openSort }
      )}
      data-testid="sortingList"
      >
        {Object.entries(SortMap).map(([type, label]) => (
          <li
            key={type}
            className={classNames(
              'places__option',
              { 'places__option--active': activeSortItem === type }
            )}
            tabIndex={0}
            onClick={() => handleSortItemClick(type as SortItem)}
          >
            {label}
          </li>
        ))}
      </ul>
    </form>
  );
}

const SortList = memo(SortListComponent);

export default SortList;
