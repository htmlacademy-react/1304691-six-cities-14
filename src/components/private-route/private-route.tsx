import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { checkAuthorizationStatus } from '../../utils/utils';
import { useMemo } from 'react';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
  redirectTo: AppRoute;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { authorizationStatus, children, redirectTo } = props;

  const isLogged = useMemo(() => checkAuthorizationStatus(authorizationStatus), [authorizationStatus]);

  return (
    isLogged ? children : <Navigate to={redirectTo} />
  );
}

export default PrivateRoute;
