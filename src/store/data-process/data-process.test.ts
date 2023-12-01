import { createAPI } from '../../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action } from 'redux';
import { AppThunkDispatch, extractActionsTypes, makeFakeOffer, makeFakeFavoriteOffer, makeFakeReview, fakeOffer } from '../../utils/mocks';
import { OfferPreview, Review, State } from '../../types/types';
import { checkAuthAction, fetchOffersAction, fetchFavoritesAction, fetchAroundOffersAction, fetchReviewsAction, fetchOfferAction, fetchAddToFavoriteAction } from '../api-actions';
import { APIRoute } from '../../const';

describe('Async actions', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);

  let store: ReturnType<typeof mockStoreCreator>;

  let mockOffers: OfferPreview[];
  let mockFavoriteOffers: OfferPreview[];
  let mockReviews: Review[];

  beforeEach(() => {
    store = mockStoreCreator({ DATA: { offers: [] } });

    mockOffers = new Array(5).fill(null).map(() => makeFakeOffer());

    mockFavoriteOffers = new Array(5).fill(null).map(() => makeFakeFavoriteOffer());

    mockReviews = new Array(5).fill(null).map(() => makeFakeReview());
  });

  describe('checkAuthAction', () => {

    it('should dispatch checkAuthAction.pending and checkAuthAction.fulfilled with thunk checkAuthAction', async () => {
      mockAxiosAdapter.onGet(APIRoute.Login).reply(200);

      await store.dispatch((checkAuthAction()));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        checkAuthAction.pending.type,
        checkAuthAction.fulfilled.type
      ]);
    });

    it('should dispatch checkAuthAction.pending and checkAuthAction.rejected with thunk checkAuthAction', async () => {
      mockAxiosAdapter.onGet(APIRoute.Login).reply(400);

      await store.dispatch((checkAuthAction()));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        checkAuthAction.pending.type,
        checkAuthAction.rejected.type
      ]);
    });

  });

  describe('fetchOffersAction', () => {

    it('should dispatch fetchOffersAction.pending, fetchOffersAction.fulfilled when server response 200', async () => {
      mockAxiosAdapter.onGet(APIRoute.Offers).reply(200, mockOffers);

      await store.dispatch((fetchOffersAction()));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchOffersActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchOffersAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchOffersAction.pending.type,
        fetchOffersAction.fulfilled.type,
      ]);

      expect(fetchOffersActionFulfilled.payload)
        .toEqual(mockOffers);
    });

  });

  describe('fetchFavoriteOffersAction', () => {

    it('should dispatch fetchFavoriteOffersAction.pending, fetchFavoriteOffersAction.fulfilled when server response 200', async () => {
      mockAxiosAdapter.onGet(APIRoute.Favorite).reply(200, mockFavoriteOffers);

      await store.dispatch((fetchFavoritesAction()));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchFavoritesOffersActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchFavoritesAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchFavoritesAction.pending.type,
        fetchFavoritesAction.fulfilled.type,
      ]);

      expect(fetchFavoritesOffersActionFulfilled.payload)
        .toEqual(mockFavoriteOffers);
    });

  });

  describe('fetchAroundOffersAction', () => {

    it('should dispatch fetchAroundOffersAction.pending, fetchAroundOffersAction.fulfilled when server response 200', async () => {
      const id = '6af6f711-c28d-4121-82cd-e0b462a27f00';
      mockAxiosAdapter.onGet(`${APIRoute.Offers}/${id}/nearby`).reply(200, mockOffers);

      await store.dispatch((fetchAroundOffersAction(id)));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchAroundOffersActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchAroundOffersAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchAroundOffersAction.pending.type,
        fetchAroundOffersAction.fulfilled.type,
      ]);

      expect(fetchAroundOffersActionFulfilled.payload)
        .toEqual(mockOffers);
    });

  });

  describe('fetchReviewsAction', () => {

    it('should dispatch fetchReviewsAction.pending, fetchReviewsAction.fulfilled when server response 200', async () => {
      const id = '6af6f711-c28d-4121-82cd-e0b462a27f00';
      mockAxiosAdapter.onGet(`${APIRoute.Comments}/${id}`).reply(200, mockReviews);

      await store.dispatch((fetchReviewsAction(id)));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchReviewsActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchReviewsAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchReviewsAction.pending.type,
        fetchReviewsAction.fulfilled.type,
      ]);

      expect(fetchReviewsActionFulfilled.payload)
        .toEqual(mockReviews);
    });

  });

  describe('fetchOfferAction', () => {

    it('should dispatch fetchOfferAction.pending, fetchOfferAction.fulfilled when server response 200', async () => {
      const id = '6af6f711-c28d-4121-82cd-e0b462a27f00';
      mockAxiosAdapter.onGet(`${APIRoute.Offers}/${id}`).reply(200, fakeOffer);

      await store.dispatch((fetchOfferAction(id)));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchOfferActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchOfferAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchOfferAction.pending.type,
        fetchOfferAction.fulfilled.type,
      ]);

      expect(fetchOfferActionFulfilled.payload)
        .toEqual(fakeOffer);
    });

  });

  describe('fetchAddToFavoriteAction', () => {

    it('should dispatch fetchAddToFavoriteAction.pending, fetchAddToFavoriteAction.fulfilled when server response 200', async () => {
      const id = '6af6f711-c28d-4121-82cd-e0b462a27f00';
      const status = 0;

      const addToFavoritesData = {
        id: id,
        status: 0
      };

      mockAxiosAdapter.onGet(`${APIRoute.Favorite}/${id}/${status}`).reply(200, fakeOffer);

      await store.dispatch((fetchAddToFavoriteAction(addToFavoritesData)));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchAddToFavoriteActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchAddToFavoriteAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchAddToFavoriteAction.pending.type,
        fetchAddToFavoriteAction.fulfilled.type,
      ]);

      expect(fetchAddToFavoriteActionFulfilled.payload)
        .toEqual(fakeOffer);
    });

  });

});
