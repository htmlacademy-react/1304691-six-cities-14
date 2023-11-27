import Header from '../../components/header/header';
import { Helmet } from 'react-helmet-async';
import FormReview from '../../components/form-review/form-review';
import ReviewsList from '../../components/reviews-list/reviews-list';
import Map from '../../components/map/map';
import { useParams } from 'react-router-dom';
import CardsListMemo from '../../components/cards-list/cards-list';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { MAX_AROUND_OFFERS_COUNT, MAX_REVIEWS_COUNT } from '../../const';
import { useEffect } from 'react';
import NotFound from '../404/404';
import Loading from '../loading/loading';
import { fetchOfferAction, fetchAroundOffersAction, fetchReviewsAction } from '../../store/api-actions';
import { getRatingValue } from '../../utils/utils';
import { checkAuthorizationStatus } from '../../utils/utils';
import { getOffer, getAroundOffers, getReviews, getIsOffersDataLoading } from '../../store/data-process/selectors';
import { getAutorisationStatus } from '../../store/user-process/selectors';
import { dropOffer } from '../../store/data-process/data-process';

function Offer(): JSX.Element {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const authorizationStatus = useAppSelector(getAutorisationStatus);

  const isLogged = checkAuthorizationStatus(authorizationStatus);

  const offer = useAppSelector(getOffer);

  const isOffersDataLoading = useAppSelector(getIsOffersDataLoading);

  const offersAround = useAppSelector(getAroundOffers);
  const offersAroundRender = offersAround.slice(0, MAX_AROUND_OFFERS_COUNT);

  const reviews = useAppSelector(getReviews);

  const reviewsRender = reviews.slice(0, MAX_REVIEWS_COUNT);

  useEffect(() => {
    if (!id) {
      return;
    }

    dispatch(fetchOfferAction(id));
    dispatch(fetchAroundOffersAction(id));
    dispatch(fetchReviewsAction(id));

    return () => {
      dispatch(dropOffer());
    };
  }, [dispatch, id]);

  if (!offer && !isOffersDataLoading) {
    return <Loading />;
  }

  if (!offer) {
    return <NotFound />;
  }

  const { images, isPremium, title, rating, type, bedrooms, maxAdults, price, goods, description } = offer;

  const { avatarUrl, name, isPro } = offer.host;

  return (
    <div className="page">
      <Helmet>
        <title>{'6 cities - Offer'}</title>
      </Helmet>
      <Header />

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {images.map((image) => (
                <div key={image} className="offer__image-wrapper">
                  <img className="offer__image" src={image} alt={title} />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium &&
                <div className="offer__mark">
                  <span>Premium</span>
                </div>}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${getRatingValue(rating)}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {goods.map((good) => (
                    <li key={good} className="offer__inside-item">
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={avatarUrl} width="74" height="74" alt={name} />
                  </div>
                  <span className="offer__user-name">
                    {name}
                  </span>
                  {isPro &&
                    <span className="offer__user-status">
                      Pro
                    </span>}
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewsList reviews={reviewsRender}></ReviewsList>
                {isLogged && <FormReview></FormReview>}
              </section>
            </div>
          </div>
          <Map offers={offersAroundRender} block={'offer'} location={offer.location} offer={offer}></Map>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <CardsListMemo offers={offersAroundRender} block={'near-places'} isOtherPlaces></CardsListMemo>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Offer;
