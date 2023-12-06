import Header from '../../components/header/header';
import { Helmet } from 'react-helmet-async';
import FormReview from '../../components/form-review/form-review';
import ReviewsList from '../../components/reviews-list/reviews-list';
import Map from '../../components/map/map';
import { useParams } from 'react-router-dom';
import CardsList from '../../components/cards-list/cards-list';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { MAX_AROUND_OFFERS_COUNT, MAX_REVIEWS_COUNT, MAX_OFFER_IMAGE_COUNT, NameBlockForFavoriteButton } from '../../const';
import { useEffect, useMemo } from 'react';
import NotFound from '../not-found/not-found';
import Loading from '../loading/loading';
import { fetchOfferAction, fetchAroundOffersAction, fetchReviewsAction } from '../../store/api-actions';
import { getRatingValue } from '../../utils/utils';
import { getOffer, getAroundOffers, getSortedByDateReviews, getIsOffersDataLoading, getErrorOfferStatus } from '../../store/data-process/selectors';
import { dropOffer } from '../../store/data-process/data-process';
import FavoriteButton from '../../components/favorite-button/favorite-button';
import { getAutorisationStatus } from '../../store/user-process/selectors';
import { checkAuthorizationStatus } from '../../utils/utils';
import classNames from 'classnames';

function Offer(): JSX.Element {

  const { id } = useParams();
  const dispatch = useAppDispatch();

  const offer = useAppSelector(getOffer);

  const authorizationStatus = useAppSelector(getAutorisationStatus);

  const isLogged = useMemo(() => checkAuthorizationStatus(authorizationStatus), [authorizationStatus]);

  const hasErrorOffer = useAppSelector(getErrorOfferStatus);
  const isOffersDataLoading = useAppSelector(getIsOffersDataLoading);
  const offersAround = useAppSelector(getAroundOffers);
  const reviews = useAppSelector(getSortedByDateReviews);

  const offersAroundRender = offersAround.slice(0, MAX_AROUND_OFFERS_COUNT);

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

  if (hasErrorOffer) {
    return <NotFound />;
  }

  if (!offer && !isOffersDataLoading) {
    return <Loading />;
  }

  if (!offer) {
    return <NotFound />;
  }

  const { images, isPremium, title, rating, type, bedrooms, maxAdults, price, goods, description } = offer;

  const { avatarUrl, name, isPro } = offer.host;

  const imagesRender = images.slice(0, MAX_OFFER_IMAGE_COUNT);

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
              {imagesRender.map((image) => (
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
                <FavoriteButton id={offer?.id} isFavorite={offer?.isFavorite} nameBlock={NameBlockForFavoriteButton.Offer} size={'offer'}></FavoriteButton>
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
                  <div className={classNames(
                    'offer__avatar-wrapper user__avatar-wrapper',
                    { 'offer__avatar-wrapper--pro': isPro }
                  )}
                  >
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
            <CardsList offers={offersAroundRender} block={'near-places'} isOtherPlaces></CardsList>
          </section>
        </div>
      </main>
    </div >
  );
}

export default Offer;
