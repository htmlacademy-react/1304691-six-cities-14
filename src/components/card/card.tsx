import { Offer } from '../../types/offers';
import { Link } from 'react-router-dom';
import { RATING_MAX } from '../../const';
import { AppRoute } from '../../const';

type CardProps = {
  offer: Offer;
  handleOfferMouseEnter: () => void;
  handleOfferMouseLeave: () => void;
}

function Card({ offer, handleOfferMouseEnter, handleOfferMouseLeave }: CardProps): JSX.Element {

  const { price, title, rating, previewImage, isPremium, isFavorite, type, id } = offer;

  const ratingValue = (rating * 100) / RATING_MAX;

  return (
    <article className="cities__card place-card" data-id={id} onMouseEnter={handleOfferMouseEnter}
      onMouseLeave={handleOfferMouseLeave}
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
            <span style={{ width: `${ratingValue}%` }}></span>
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
