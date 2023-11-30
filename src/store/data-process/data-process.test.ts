import { createAPI } from '../../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action } from 'redux';
import { AppThunkDispatch, extractActionsTypes, makeFakeOffer } from '../../utils/mocks';
import { State } from '../../types/types';
import { checkAuthAction, fetchOffersAction } from '../api-actions';
import { APIRoute } from '../../const';

describe('Async actions', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);

  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({ DATA: { offers: [] } });
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

    it('should dispatch fetchOffersAction.pending, fetchOffersAction.fulfilled when servet response 200', async () => {
      const mockOffers = new Array(5).fill(null).map(() => makeFakeOffer());

      await store.dispatch((fetchOffersAction()));
      mockAxiosAdapter.onGet(APIRoute.Offers).reply(200, mockOffers);

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

    it('should dispatch fetchOffersAction.pending, fetchOffersAction.rejected when servet response 400', async () => {
      mockAxiosAdapter.onGet(APIRoute.Offers).reply(400, []);

      await store.dispatch((fetchOffersAction()));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchOffersAction.pending.type,
        fetchOffersAction.rejected.type,
      ]);

    });

  });

});
