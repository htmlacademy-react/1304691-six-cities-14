import { CITIES_MAP } from '../../const';
import { Link } from 'react-router-dom';
import { setActiveCity } from '../../store/app-process/app-process';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { City } from '../../types/types';
import classNames from 'classnames';
import { getActiveCity } from '../../store/app-process/selectors';
import { memo, useCallback } from 'react';

function CitiesListComponent(): JSX.Element {
  const activeCity = useAppSelector(getActiveCity);

  const dispatch = useAppDispatch();

  const handleCitiesItemClick = useCallback((city: City) => dispatch(setActiveCity(city)), [dispatch]);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list" data-testid="citiesList" role="navigation" aria-label="Cities navigation">
          {CITIES_MAP.map((city) => (
            <li key={city.name} className="locations__item">
              <Link
                className={classNames(
                  'locations__item-link tabs__item',
                  { 'tabs__item--active': city.name === activeCity.name }
                )}
                to="/"
                onClick={() => handleCitiesItemClick(city)}
              >
                <span>{city.name}</span>
              </Link>
            </li>)
          )}
        </ul>
      </section>
    </div>
  );
}

const CitiesList = memo(CitiesListComponent);

export default CitiesList;
