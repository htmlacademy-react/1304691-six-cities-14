import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/types';
import { AxiosInstance } from 'axios';
import { fetchOffers, requireAuthorization, fetchReviews, setOffersDataLoadingStatus } from './actions';
import { OfferPreview, Reviews } from '../types/types';
import { APIRoute, AuthorizationStatus } from '../const';
import { saveToken, dropToken } from '../components/services/token';
import { UserData, AuthData } from '../types/types';

type apiActionConfig = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
};

export const fetchOffersAction = createAsyncThunk<void, undefined, apiActionConfig>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setOffersDataLoadingStatus(true));
    const { data } = await api.get<OfferPreview[]>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(fetchOffers(data));
  },
);

export const fetchReviewsAction = createAsyncThunk<void, undefined, apiActionConfig>(
  'data/fetchReviews',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Reviews>(APIRoute.Comments);
    dispatch(fetchReviews(data));
  },
);

export const loginAction = createAsyncThunk<void, AuthData, apiActionConfig>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data: { token } } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, apiActionConfig>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
