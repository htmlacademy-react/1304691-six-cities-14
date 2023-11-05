import { Offer } from '../../types/types';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { getRatingValue } from '../../utils/utils';

type CardProps = {
  offer: Offer;
  onOfferMouseEnter: () => void;
  onOfferMouseLeave: () => void;
}

function Card({ offer, onOfferMouseEnter, onOfferMouseLeave }: CardProps): JSX.Element {

  const { price, title, rating, previewImage, isPremium, isFavorite, type, id } = offer;

  return (
    <article className="cities__card place-card" data-id={id} onMouseEnter={onOfferMouseEnter}
      onMouseLeave={onOfferMouseLeave}
    >
      {isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Offer}${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"></img>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active ' : ''}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${getRatingValue(rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Card;
