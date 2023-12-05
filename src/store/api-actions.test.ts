
import { fetchOffersAction, fetchFavoritesAction, fetchAroundOffersAction, fetchReviewsAction, fetchOfferAction, checkAuthAction, loginAction, logoutAction, fetchAddToFavoriteAction, fetchAddReviewAction } from './api-actions';
import { createAPI } from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action } from 'redux';
import { State, AuthData, Offer } from '../types/types';
import { AppThunkDispatch, extractActionsTypes, fakeOffers, fakeReviews, fakeOffer } from '../utils/mocks';
import { APIRoute } from '../const';
import * as tokenStorage from '../services/token';
import { NameSpace } from '../const';

describe('UserProcess', () => {

  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);

  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({ DATA: { offers: [], offer: fakeOffer }, APP: {}, USER: {}});
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

    it('should return UserData with "checkAuthAction.fulfilled" action', async () => {
      const fakeUserData = {
        name: 'Oliver Conner',
        avatarUrl: 'https://url-to-image/image.png',
        isPro: false,
        email: 'Oliver.conner@gmail.com',
        token: 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20='
      };

      mockAxiosAdapter.onGet(APIRoute.Login).reply(200, fakeUserData);

      await store.dispatch((checkAuthAction()));

      const emittedActions = store.getActions();
      const fetchCheckAuthActionFulfilled = emittedActions.at(1) as ReturnType<typeof checkAuthAction.fulfilled>;

      expect(fetchCheckAuthActionFulfilled.payload)
        .toEqual(fakeUserData);
    });

  });

  describe('loginAction', () => {

    it('should dispatch loginAction.pending, loginAction.fulfilled server response 200', async () => {

      const fakeUser: AuthData = { email: 'test@test.ru', password: '123456q' };

      const fakeServerReplay = { token: 'secret' };

      mockAxiosAdapter.onPost(APIRoute.Login).reply(200, fakeServerReplay);

      await store.dispatch((loginAction(fakeUser)));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        loginAction.pending.type,
        loginAction.fulfilled.type
      ]);
    });

    it('should dispatch loginAction.pending, loginAction.rejected server response 400', async () => {

      const fakeUser: AuthData = { email: 'test@test.ru', password: '123456' };

      const fakeServerReplay = { token: 'secret' };

      mockAxiosAdapter.onPost(APIRoute.Login).reply(400, fakeServerReplay);

      await store.dispatch((loginAction(fakeUser)));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        loginAction.pending.type,
        loginAction.rejected.type
      ]);
    });

    it('should call "saveToken" once with the received token', async () => {
      const fakeUser: AuthData = { email: 'test@test.ru', password: '123456' };
      const fakeServerReplay = { token: 'secret' };

      mockAxiosAdapter.onPost(APIRoute.Login).reply(200, fakeServerReplay);
      const mockSaveToken = vi.spyOn(tokenStorage, 'saveToken');

      await store.dispatch(loginAction(fakeUser));

      expect(mockSaveToken).toBeCalledTimes(1);
      expect(mockSaveToken).toBeCalledWith(fakeServerReplay.token);
    });

  });

  describe('logoutAction', () => {

    it('should dispatch "logoutAction.pending", "logoutAction.fulfilled" when server response 200', async () => {
      mockAxiosAdapter.onDelete(APIRoute.Logout).reply(200);

      await store.dispatch(logoutAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        logoutAction.pending.type,
        logoutAction.fulfilled.type,
      ]);
    });

    it('should one call "dropToken" with "logoutAction"', async () => {
      mockAxiosAdapter.onDelete(APIRoute.Logout).reply(200);
      const mockDropToken = vi.spyOn(tokenStorage, 'dropToken');

      await store.dispatch(logoutAction());

      expect(mockDropToken).toBeCalledTimes(1);
    });

  });

  describe('fetchOffersAction', () => {

    it('should dispatch fetchOffersAction.pending, fetchOffersAction.fulfilled when server response 200', async () => {
      mockAxiosAdapter.onGet(APIRoute.Offers).reply(200, fakeOffers);

      await store.dispatch((fetchOffersAction()));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchOffersActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchOffersAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchOffersAction.pending.type,
        fetchOffersAction.fulfilled.type,
      ]);

      expect(fetchOffersActionFulfilled.payload)
        .toEqual(fakeOffers);
    });

    it('should dispatch fetchOffersAction.pending, fetchOffersAction.rejected when server response 400', async () => {
      mockAxiosAdapter.onGet(APIRoute.Offers).reply(400, fakeOffers);

      await store.dispatch((fetchOffersAction()));

      const extractedActionsTypes = extractActionsTypes(store.getActions());

      expect(extractedActionsTypes).toEqual([
        fetchOffersAction.pending.type,
        fetchOffersAction.rejected.type,
      ]);

    });

  });

  describe('fetchFavoriteOffersAction', () => {

    it('should dispatch fetchFavoriteOffersAction.pending, fetchFavoriteOffersAction.fulfilled when server response 200', async () => {
      mockAxiosAdapter.onGet(APIRoute.Favorite).reply(200, fakeOffers);

      await store.dispatch((fetchFavoritesAction()));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchFavoritesOffersActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchFavoritesAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchFavoritesAction.pending.type,
        fetchFavoritesAction.fulfilled.type,
      ]);

      expect(fetchFavoritesOffersActionFulfilled.payload)
        .toEqual(fakeOffers);
    });

  });

  describe('fetchAroundOffersAction', () => {

    it('should dispatch fetchAroundOffersAction.pending, fetchAroundOffersAction.fulfilled when server response 200', async () => {
      const id = '6af6f711-c28d-4121-82cd-e0b462a27f00';
      mockAxiosAdapter.onGet(`${APIRoute.Offers}/${id}/nearby`).reply(200, fakeOffers);

      await store.dispatch((fetchAroundOffersAction(id)));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchAroundOffersActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchAroundOffersAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchAroundOffersAction.pending.type,
        fetchAroundOffersAction.fulfilled.type,
      ]);

      expect(fetchAroundOffersActionFulfilled.payload)
        .toEqual(fakeOffers);
    });

  });

  describe('fetchReviewsAction', () => {

    it('should dispatch fetchReviewsAction.pending, fetchReviewsAction.fulfilled when server response 200', async () => {
      const id = '6af6f711-c28d-4121-82cd-e0b462a27f00';
      mockAxiosAdapter.onGet(`${APIRoute.Comments}/${id}`).reply(200, fakeReviews);

      await store.dispatch((fetchReviewsAction(id)));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchReviewsActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchReviewsAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchReviewsAction.pending.type,
        fetchReviewsAction.fulfilled.type,
      ]);

      expect(fetchReviewsActionFulfilled.payload)
        .toEqual(fakeReviews);
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

    it('should dispatch fetchOfferAction.pending, fetchOfferAction.rejected when server response 400', async () => {
      const id = '6af6f711-c28d-4121-82cd-e0b462a27f00';
      mockAxiosAdapter.onGet(`${APIRoute.Offers}/${id}`).reply(400, fakeOffer);

      await store.dispatch((fetchOfferAction(id)));

      const extractedActionsTypes = extractActionsTypes(store.getActions());

      expect(extractedActionsTypes).toEqual([
        fetchOfferAction.pending.type,
        fetchOfferAction.rejected.type,
      ]);

    });

  });

  describe('fetchAddToFavoriteAction', () => {

    it('should dispatch fetchAddToFavoriteAction.fulfilled when server response 200', async () => {
      const mockOfferId = fakeOffer.id;
      const mockOfferStatus = Number(fakeOffer.isFavorite);

      const fakeOfferUpdated = Object.assign(fakeOffer) as Offer;
      fakeOfferUpdated.isFavorite = !fakeOfferUpdated.isFavorite;

      mockAxiosAdapter.onPost(`${APIRoute.Favorite}/${mockOfferId}/${mockOfferStatus}`).reply(200, fakeOffer);

      const addToFavoritesData = {
        id: mockOfferId,
        status: mockOfferStatus
      };

      await store.dispatch((fetchAddToFavoriteAction(addToFavoritesData)));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchAddToFavoriteActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchAddToFavoriteAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchAddToFavoriteAction.pending.type,
        fetchAddToFavoriteAction.fulfilled.type,
      ]);

      expect(fetchAddToFavoriteActionFulfilled.payload)
        .toEqual(fakeOfferUpdated);
    });

  });

  describe('fetchAddReviewAction', () => {

    it('should dispatch fetchAddReviewAction.fulfilled when server response 201', async () => {
      const mockReview = fakeReviews[0];

      const state = store.getState();

      mockAxiosAdapter.onPost(`${APIRoute.Comments}/${state[NameSpace.Data]?.offer?.id}`).reply(201, mockReview);

      const ReviewData = {
        comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
        rating: 3
      };

      await store.dispatch((fetchAddReviewAction(ReviewData)));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchAddReviewActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchAddReviewAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchAddReviewAction.pending.type,
        fetchAddReviewAction.fulfilled.type,
      ]);

      expect(fetchAddReviewActionFulfilled.payload)
        .toEqual(mockReview);
    });

    it('should dispatch fetchAddReviewAction.rejected when server response 400', async () => {
      const mockReview = fakeReviews[0];

      const state = store.getState();

      mockAxiosAdapter.onPost(`${APIRoute.Comments}/${state[NameSpace.Data]?.offer?.id}`).reply(400, mockReview);

      const ReviewData = {
        comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
        rating: 3
      };

      await store.dispatch((fetchAddReviewAction(ReviewData)));

      const extractedActionsTypes = extractActionsTypes(store.getActions());

      expect(extractedActionsTypes).toEqual([
        fetchAddReviewAction.pending.type,
        fetchAddReviewAction.rejected.type,
      ]);
    });

  });

});
