import { dataProcess } from './data-process';
import { fetchOffersAction, fetchAroundOffersAction, fetchReviewsAction, fetchOfferAction, fetchFavoritesAction } from '../api-actions';
import { fakeOffers, fakeReview, fakeOffer } from '../../utils/mocks';

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
        reviews: fakeReview,
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
          fakeReview, '', id)
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

  describe('fetchOfferAction', () => {

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

});
