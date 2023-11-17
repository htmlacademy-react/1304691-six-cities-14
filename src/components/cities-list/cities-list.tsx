import { CitiesMap } from '../../const';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { fetchOffers, setActiveCity } from '../../store/actions';
import { useAppDispatch } from '../../hooks';
import { City } from '../../types/types';

function CitiesList(): JSX.Element {
  const activeCity = useAppSelector((state) => state.activeCity);

  const dispatch = useAppDispatch();

  function onCitiesItemClick(city: City) {
    dispatch(fetchOffers());
    dispatch(setActiveCity(city));
  }

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CitiesMap.map((city) => (
            <li key={city.name} className="locations__item">
              <Link
                className={`locations__item-link tabs__item ${city.name === activeCity.name && 'tabs__item--active'}`}
                to="/"
                onClick={() => onCitiesItemClick(city)}
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

export default CitiesList;
