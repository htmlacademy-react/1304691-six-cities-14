import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
  redirectTo: AppRoute;
  component?: boolean;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { authorizationStatus, children, redirectTo, component } = props;

  if (component) {
    return (authorizationStatus === AuthorizationStatus.NoAuth)
      ? <Navigate to={redirectTo} /> : children;
  }

  return (
    authorizationStatus === AuthorizationStatus.NoAuth
      ? children
      : <Navigate to={redirectTo} />
  );
}

export default PrivateRoute;
