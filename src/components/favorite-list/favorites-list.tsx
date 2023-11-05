import { Offers } from '../../types/types';
import FavoriteCard from '../favorites-card/favorites-card';

type FavoriteListProps = {
  favoriteOffers: Offers;
}

function FavoriteList({ favoriteOffers }: FavoriteListProps): JSX.Element {
  const CitiesList = [...new Set(favoriteOffers.map((offer) => offer.city.name))].sort();

  return (
    <ul className="favorites__list">
      {CitiesList.map((city) => (
        <li className="favorites__locations-items" key={city}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{city}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {favoriteOffers
              .filter((offer) => offer.city.name === city)
              .map((offer) => (
                <FavoriteCard offer={offer} key={offer.id} />
              ))}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default FavoriteList;
