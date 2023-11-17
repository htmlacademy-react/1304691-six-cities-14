import { CityNames } from '../../const';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';

function CitiesList(): JSX.Element {
  const activeCity = useAppSelector((state) => state.activeCity);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CityNames.map((city) => (
            <li key="city" className="locations__item">
              <Link className={`locations__item-link tabs__item ${city === activeCity.name && 'tabs__item--active'}`} to="/">
                <span>{city}</span>
              </Link>
            </li>)
          )}
        </ul>
      </section>
    </div>
  );
}

export default CitiesList;
