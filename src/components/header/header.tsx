
import { Link } from 'react-router-dom';
import Logo from '../logo/logo';
import { AppRoute } from '../../const';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { checkAuthorizationStatus } from '../../utils/utils';
import { getAutorisationStatus, getUserInfo } from '../../store/user-process/selectors';
import { memo, useCallback, useMemo } from 'react';
import { getFavorites } from '../../store/data-process/selectors';
import { logoutAction } from '../../store/api-actions';

function HeaderComponent(): JSX.Element {

  const favorites = useAppSelector(getFavorites);

  const authorizationStatus = useAppSelector(getAutorisationStatus);

  const isLogged = useMemo(() => checkAuthorizationStatus(authorizationStatus), [authorizationStatus]);

  const user = useAppSelector(getUserInfo);

  const dispatch = useAppDispatch();

  const handleLogoutClick = useCallback(() => {
    dispatch(logoutAction());
  }, [dispatch]);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav" data-testid="headerNav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                {isLogged
                  ?
                  <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile" role="link" aria-label="Favorites">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{user.email}</span>
                    <span className="header__favorite-count">{favorites.length}</span>
                  </Link>
                  :
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login} role="link" aria-label="Sign in">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </Link>}
              </li>
              {isLogged
                &&
                <li className="header__nav-item">
                  <Link
                    className="header__nav-link"
                    to={''}
                    onClick={handleLogoutClick}
                  >
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

const Header = memo(HeaderComponent);

export default Header;
