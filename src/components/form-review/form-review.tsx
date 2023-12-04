import { useState, ChangeEvent, Fragment, FormEvent, useEffect } from 'react';
import { MIN_COMMENT_LENGTH, MAX_COMMENT_LENGTH } from '../../const';
import { fetchAddReviewAction } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { memo } from 'react';
import { getAddReviewStatus, getErrorAddReviewStatus, getAddSuccessStatus } from '../../store/data-process/selectors';

const RATING_TITLES = ['terribly', 'badly', 'not bad', 'good', 'perfect'];

function FormReviewComponent(): JSX.Element {

  const initialState = {
    comment: '',
    rating: 0
  };

  const [formData, setFormData] = useState(initialState);

  const dispatch = useAppDispatch();

  const isAddingReview = useAppSelector(getAddReviewStatus);

  const hasError = useAppSelector(getErrorAddReviewStatus);

  const isSuccessAddReview = useAppSelector(getAddSuccessStatus);

  const isValid =
    formData.comment.length >= MIN_COMMENT_LENGTH &&
    formData.comment.length <= MAX_COMMENT_LENGTH &&
    formData.rating !== 0;

  function handleRatingChange(evt: ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, rating: +evt.target.value });
  }

  function handleTextChange(evt: ChangeEvent<HTMLTextAreaElement>) {
    setFormData({ ...formData, comment: evt.target.value });
  }

  function handleFormSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    dispatch(fetchAddReviewAction(formData));
  }

  useEffect(() => {
    if (isSuccessAddReview) {
      setFormData({
        comment: '',
        rating: 0
      });
    }
  }, [isSuccessAddReview]);

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Array.from({ length: 5 }, (_, index: number) => ++index)
          .reverse()
          .map((item) => (
            <Fragment key={`${item}-stars`}>
              <input className="form__rating-input visually-hidden" name="rating" value={item} id={`${item}-stars`} type="radio" onChange={handleRatingChange} checked={formData.rating === item} disabled={isAddingReview} />
              <label htmlFor={`${item}-stars`} className="reviews__rating-label form__rating-label" title={RATING_TITLES[item - 1]}>
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          ))}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={handleTextChange} value={formData.comment} disabled={isAddingReview}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{MIN_COMMENT_LENGTH} characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValid || isAddingReview}
        >
          {isAddingReview ? 'Submit...' : 'Submit'}
        </button>
      </div>
      {hasError && <div style={{ color: 'red', marginTop: '20px' }}>Произошла ошибка отправки данных. Попробуйте ещё раз</div>}
    </form>
  );
}

const FormReview = memo(FormReviewComponent);

export default FormReview;
