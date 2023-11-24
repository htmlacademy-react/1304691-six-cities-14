import { store } from '../store';
import { setError } from '../store/actions';
import { clearErrorAction } from '../store/api-actions';
import { Error } from '../types/types';

export const handleProcessError = (message: Error): void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};
