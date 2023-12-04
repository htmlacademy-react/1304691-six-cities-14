
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';
import { AuthorizationStatus, defaultUser } from '../../const';
import { userProcess } from './user-process';

describe('UserProcess', () => {

  describe('checkSliceDefault', () => {

    it('should return initial state with empty action', () => {
      const emptyAction = { type: '' };
      const expectedState = {
        authorizationStatus: AuthorizationStatus.Auth,
        user: defaultUser
      };

      const result = userProcess.reducer(expectedState, emptyAction);

      expect(result).toEqual(expectedState);
    });

    it('should return default initial state with empty action', () => {
      const emptyAction = { type: '' };
      const expectedState = {
        authorizationStatus: AuthorizationStatus.Unknown,
        user: defaultUser
      };

      const result = userProcess.reducer(undefined, emptyAction);

      expect(result).toEqual(expectedState);
    });
  });

  describe('checkAuthAction', () => {

    it('should set "Auth" with "checkAuthAction.fulfilled" action', () => {

      const initialState = { authorizationStatus: AuthorizationStatus.NoAuth, user: defaultUser };
      const expectedState = { authorizationStatus: AuthorizationStatus.Auth, user: undefined };

      const result = userProcess.reducer(initialState, checkAuthAction.fulfilled);

      expect(result).toEqual(expectedState);
    });

    it('should set "NoAuth" with "checkAuthAction.rejected" action', () => {
      const initialState = { authorizationStatus: AuthorizationStatus.Auth, user: defaultUser };
      const expectedState = { authorizationStatus: AuthorizationStatus.NoAuth, user: defaultUser };

      const result = userProcess.reducer(initialState, checkAuthAction.rejected);

      expect(result).toEqual(expectedState);
    });

  });

  describe('loginAction', () => {

    it('should set "Auth" with "loginAction.fulfilled" action', () => {
      const initialState = { authorizationStatus: AuthorizationStatus.NoAuth, user: defaultUser };
      const expectedState = { authorizationStatus: AuthorizationStatus.Auth, user: undefined };

      const result = userProcess.reducer(initialState, loginAction.fulfilled);

      expect(result).toEqual(expectedState);
    });

    it('should set "NoAuth" with "loginAction.rejected" action', () => {
      const initialState = { authorizationStatus: AuthorizationStatus.Auth, user: defaultUser };
      const expectedState = { authorizationStatus: AuthorizationStatus.NoAuth, user: defaultUser };

      const result = userProcess.reducer(initialState, loginAction.rejected);

      expect(result).toEqual(expectedState);
    });

  });

  describe('logoutAction', () => {

    it('should set "NoAuth", with "logoutAction.fulfilled" action', () => {
      const initialState = { authorizationStatus: AuthorizationStatus.Auth, user: defaultUser };
      const expectedState = { authorizationStatus: AuthorizationStatus.NoAuth, user: defaultUser };

      const result = userProcess.reducer(initialState, logoutAction.fulfilled);

      expect(result).toEqual(expectedState);
    });

  });

});
