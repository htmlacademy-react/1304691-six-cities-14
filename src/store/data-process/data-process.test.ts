import { dataProcess, dropOffer, changeOfferFavoriteStatus } from './data-process';
import { fetchOffersAction, fetchAroundOffersAction, fetchReviewsAction, fetchOfferAction, fetchFavoritesAction, fetchAddToFavoriteAction, fetchAddReviewAction } from '../api-actions';
import { fakeOffers, fakeReviews, fakeOffer } from '../../utils/mocks';
import { NameBlockForFavoriteButton } from '../../const';

describe('DataProcess', () => {

  describe('checkSliceDefault', () => {

    it('should return initial state with empty action', () => {
      const emptyAction = { type: '' };
      const expectedState = {
        offers: [],
        isOffersDataLoading: false,
        aroundOffers: [],
        reviews: [],
        offer: null,
        favorites: [],
        hasErrorOffers: true,
        hasErrorOffer: false,
        addReviewStatus: {
          pending: false,
          rejected: false,
          success: false
        }
      };

      const result = dataProcess.reducer(expectedState, emptyAction);

      expect(result).toEqual(expectedState);
    });

    it('should return default initial state with empty action', () => {
      const emptyAction = { type: '' };
      const expectedState = {
        offers: [],
        isOffersDataLoading: false,
        aroundOffers: [],
        reviews: [],
        offer: null,
        favorites: [],
        hasErrorOffers: false,
        hasErrorOffer: false,
        addReviewStatus: {
          pending: false,
          rejected: false,
          success: false
        }
      };

      const result = dataProcess.reducer(undefined, emptyAction);

      expect(result).toEqual(expectedState);
    });
  });

  describe('fetchOffersAction', () => {

    it('should set isOffersDataLoading to true, hasErrorOffers to false with fetchOffersAction.pending', () => {
      const expectedState = {
        offers: [],
        isOffersDataLoading: true,
        aroundOffers: [],
        reviews: [],
        offer: null,
        favorites: [],
        hasErrorOffers: false,
        hasErrorOffer: false,
        addReviewStatus: {
          pending: false,
          rejected: false,
          success: false
        }
      };

      const result = dataProcess.reducer(undefined, fetchOffersAction.pending);

      expect(result).toEqual(expectedState);
    });

    it('should set offers to array with offers, isOffersDataLoading to false with fetchOffersAction.fulfilled', () => {
      const expectedState = {
        offers: fakeOffers,
        isOffersDataLoading: false,
        aroundOffers: [],
        reviews: [],
        offer: null,
        favorites: [],
        hasErrorOffers: false,
        hasErrorOffer: false,
        addReviewStatus: {
          pending: false,
          rejected: false,
          success: false
        }
      };

      const result = dataProcess.reducer(
        undefined,
        fetchOffersAction.fulfilled(
          fakeOffers, '', undefined)
      );

      expect(result).toEqual(expectedState);
    });

    it('should set isOffersDataLoading to true, hasErrorOffers to true with fetchOffersAction.rejected', () => {
      const expectedState = {
        offers: [],
        isOffersDataLoading: false,
        aroundOffers: [],
        reviews: [],
        offer: null,
        favorites: [],
        hasErrorOffers: true,
        hasErrorOffer: false,
        addReviewStatus: {
          pending: false,
          rejected: false,
          success: false
        }
      };

      const result = dataProcess.reducer(
        undefined,
        fetchOffersAction.rejected
      );

      expect(result).toEqual(expectedState);
    });
  });

  describe('fetchAroundOffersAction', () => {

    it('should set aroundOffers to array with around offers with fetchAroundOffersAction.fulfilled', () => {
      const id = fakeOffers[0].id;

      const expectedState = {
        offers: [],
        isOffersDataLoading: false,
        aroundOffers: fakeOffers,
        reviews: [],
        offer: null,
        favorites: [],
        hasErrorOffers: false,
        hasErrorOffer: false,
        addReviewStatus: {
          pending: false,
          rejected: false,
          success: false
        }
      };

      const result = dataProcess.reducer(
        undefined,
        fetchAroundOffersAction.fulfilled(
          fakeOffers, '', id)
      );

      expect(result).toEqual(expectedState);
    });

  });

  describe('fetchReviewsAction', () => {

    it('should set reviews to array with reviews by offer with fetchReviewsAction.fulfilled', () => {
      const id = fakeOffers[0].id;

      const expectedState = {
        offers: [],
        isOffersDataLoading: false,
        aroundOffers: [],
        reviews: fakeReviews,
        offer: null,
        favorites: [],
        hasErrorOffers: false,
        hasErrorOffer: false,
        addReviewStatus: {
          pending: false,
          rejected: false,
          success: false
        }
      };

      const result = dataProcess.reducer(
        undefined,
        fetchReviewsAction.fulfilled(
          fakeReviews, '', id)
      );

      expect(result).toEqual(expectedState);
    });

  });

  describe('fetchOfferAction', () => {

    it('should set offer with fetchOfferAction.fulfilled,hasErrorOffers to false', () => {
      const id = fakeOffers[0].id;

      const expectedState = {
        offers: [],
        isOffersDataLoading: false,
        aroundOffers: [],
        reviews: [],
        offer: fakeOffer,
        favorites: [],
        hasErrorOffers: false,
        hasErrorOffer: false,
        addReviewStatus: {
          pending: false,
          rejected: false,
          success: false
        }
      };

      const result = dataProcess.reducer(
        undefined,
        fetchOfferAction.fulfilled(
          fakeOffer, '', id)
      );

      expect(result).toEqual(expectedState);
    });

    it('should hasErrorOffer to true with fetchOfferAction.rejected', () => {
      const expectedState = {
        offers: [],
        isOffersDataLoading: false,
        aroundOffers: [],
        reviews: [],
        offer: null,
        favorites: [],
        hasErrorOffers: false,
        hasErrorOffer: true,
        addReviewStatus: {
          pending: false,
          rejected: false,
          success: false
        }
      };

      const result = dataProcess.reducer(
        undefined,
        fetchOfferAction.rejected
      );

      expect(result).toEqual(expectedState);
    });

  });

  describe('fetchFavoritesOfferAction', () => {

    it('should set favorites to array with favorites offers with fetchFavoritesAction.fulfilled', () => {
      const expectedState = {
        offers: [],
        isOffersDataLoading: false,
        aroundOffers: [],
        reviews: [],
        offer: null,
        favorites: fakeOffers,
        hasErrorOffers: false,
        hasErrorOffer: false,
        addReviewStatus: {
          pending: false,
          rejected: false,
          success: false
        }
      };

      const result = dataProcess.reducer(
        undefined,
        fetchFavoritesAction.fulfilled(
          fakeOffers, '', undefined
        )
      );

      expect(result).toEqual(expectedState);
    });

  });

  describe('fetchAddToFavoriteAction', () => {

    it('should set favorites are updated after fetchAddToFavoriteAction.fulfilled', () => {
      const mockOffer = fakeOffer;

      const expectedState = {
        offers: [],
        isOffersDataLoading: false,
        aroundOffers: [],
        reviews: [],
        offer: null,
        favorites: [mockOffer],
        hasErrorOffers: false,
        hasErrorOffer: false,
        addReviewStatus: {
          pending: false,
          rejected: false,
          success: false
        }
      };

      const addToFavoritesData = {
        id: fakeOffer.id,
        status: 1
      };

      const result = dataProcess.reducer(undefined, fetchAddToFavoriteAction.fulfilled(fakeOffer, '', addToFavoritesData));

      expect(result).toEqual(expectedState);
    });

  });

  describe('fetchAddReviewAction', () => {

    it('should set reviews are updated and addReviewStatus.success true after fetchAddReviewAction.fulfilled', () => {
      const mockReview = fakeReviews[0];

      const initialState = {
        offers: [],
        isOffersDataLoading: false,
        aroundOffers: [],
        reviews: [],
        offer: null,
        favorites: [],
        hasErrorOffers: false,
        hasErrorOffer: false,
        addReviewStatus: {
          pending: false,
          rejected: false,
          success: true
        }
      };

      const expectedState = {
        offers: [],
        isOffersDataLoading: false,
        aroundOffers: [],
        reviews: [mockReview],
        offer: null,
        favorites: [],
        hasErrorOffers: false,
        hasErrorOffer: false,
        addReviewStatus: {
          pending: false,
          rejected: false,
          success: true
        }
      };

      const ReviewData = {
        comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
        rating: 5
      };

      const result = dataProcess.reducer(initialState, fetchAddReviewAction.fulfilled(mockReview, '', ReviewData));

      expect(result).toEqual(expectedState);
    });

    it('should return addReviewStatus.rejected true after fetchAddReviewAction.rejected', () => {
      const expectedState = {
        offers: [],
        isOffersDataLoading: false,
        aroundOffers: [],
        reviews: [],
        offer: null,
        favorites: [],
        hasErrorOffers: false,
        hasErrorOffer: false,
        addReviewStatus: {
          pending: false,
          rejected: true,
          success: false
        }
      };

      const result = dataProcess.reducer(undefined, fetchAddReviewAction.rejected);

      expect(result).toEqual(expectedState);
    });

    it('should return addReviewStatus.pending true during fetchAddReviewAction.pending', () => {
      const expectedState = {
        offers: [],
        isOffersDataLoading: false,
        aroundOffers: [],
        reviews: [],
        offer: null,
        favorites: [],
        hasErrorOffers: false,
        hasErrorOffer: false,
        addReviewStatus: {
          pending: true,
          rejected: false,
          success: false
        }
      };

      const result = dataProcess.reducer(undefined, fetchAddReviewAction.pending);

      expect(result).toEqual(expectedState);
    });

  });

  describe('dropOffer', () => {

    it('should drop offer after dropOffer action', () => {
      const mockReview = fakeReviews[0];

      const initialState = {
        offers: [],
        isOffersDataLoading: false,
        aroundOffers: fakeOffers,
        reviews: [mockReview],
        offer: fakeOffer,
        favorites: [],
        hasErrorOffers: false,
        hasErrorOffer: false,
        addReviewStatus: {
          pending: false,
          rejected: false,
          success: true
        }
      };

      const expectedState = {
        offers: [],
        isOffersDataLoading: false,
        aroundOffers: [],
        reviews: [],
        offer: null,
        favorites: [],
        hasErrorOffers: false,
        hasErrorOffer: false,
        addReviewStatus: {
          pending: false,
          rejected: false,
          success: true
        }
      };

      const result = dataProcess.reducer(initialState, dropOffer());

      expect(result).toEqual(expectedState);
    });

  });

  describe('changeOfferFavoriteStatus', () => {

    it('should change favorite status in offer after changeOfferFavoriteStatus action', () => {

      const mockOffer = fakeOffers[0];

      const fakeOffersUpdated = structuredClone(fakeOffers);
      fakeOffersUpdated[0].isFavorite = !fakeOffersUpdated[0].isFavorite;

      const fakeOfferUpdated = structuredClone(fakeOffer);
      fakeOfferUpdated.isFavorite = !fakeOfferUpdated.isFavorite;

      const initialState = {
        offers: fakeOffers,
        isOffersDataLoading: false,
        aroundOffers: fakeOffers,
        reviews: [],
        offer: fakeOffer,
        favorites: [],
        hasErrorOffers: false,
        hasErrorOffer: false,
        addReviewStatus: {
          pending: false,
          rejected: false,
          success: false
        }
      };

      const expectedState = {
        offers: fakeOffersUpdated,
        isOffersDataLoading: false,
        aroundOffers: fakeOffersUpdated,
        reviews: [],
        offer: fakeOfferUpdated,
        favorites: [],
        hasErrorOffers: false,
        hasErrorOffer: false,
        addReviewStatus: {
          pending: false,
          rejected: false,
          success: false
        }
      };

      const result = dataProcess.reducer(initialState, changeOfferFavoriteStatus({ id: mockOffer.id, nameBlock: NameBlockForFavoriteButton.Offer }));

      expect(result).toEqual(expectedState);
    });

  });

});
