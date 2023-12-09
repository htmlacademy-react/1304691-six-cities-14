import FavoritesCard from '../favorites-card/favorites-card';
import { OfferPreview } from '../../types/types';

type FavoritesListProps = {
  offers: OfferPreview[];
}

function FavoritesList({ offers }: FavoritesListProps): JSX.Element {

  const CitiesList = [...new Set(offers.map((offer) => offer.city.name))].sort();

  return (
    <ul className="favorites__list" data-testid="favoritesList">
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
            {offers
              .filter((offer) => offer.city.name === city)
              .map((offer) => (
                <FavoritesCard offer={offer} key={offer.id} />
              ))}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default FavoritesList;
