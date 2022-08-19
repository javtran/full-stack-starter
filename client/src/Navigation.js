import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import './Navigation.scss';
import Api from './Api';
import { useAuthContext } from './AuthContext';

function Navigation() {
  const navigate = useNavigate();
  const { user, setUser } = useAuthContext();

  useEffect(
    function () {
      Api.users.me().then((response) => {
        if (response.status === 204) {
          setUser(null);
        } else {
          setUser(response.data);
        }
      });
    },
    [setUser]
  );

  async function onLogout(event) {
    event.preventDefault();
    await Api.auth.logout();
    setUser(null);
    navigate('/');
  }

  return (
    <div className="primary-nav">
      <nav role="navigation" className="menu">
        <Link className="nav-link logo" to="/">
          Spoti<span>-file</span>
        </Link>
        <div className="overflow-container">
          <ul className="menu-dropdown nav flex-column">
            <li>
              <Link className="nav-link" to="/">
                Artists
              </Link>
              <span className="icon">
                <i class="fa fa-user-circle"></i>
              </span>
            </li>
            <li>
              <Link className="nav-link" to="/tracks">
                Tracks
              </Link>
              <span className="icon">
                <i class="fa fa-music"></i>
              </span>
            </li>
            <li>
              <a href="https://open.spotify.com/playlist/5hvQZZVI52kgqm7XNZ8zBu?si=093221aa53264656" target="”_blank”">
                Add
              </a>
              <span class="icon">
                <i class="fa fa-plus"></i>
              </span>
            </li>
            {user && (
              <>
                <li>
                  <Link className="nav-link" to="/account">
                    {user.firstName}
                  </Link>
                  <span className="icon">
                    {user.pictureUrl && <div className="header__picture" style={{ backgroundImage: `url(${user.pictureUrl})` }}></div>}
                  </span>
                </li>
                <li>
                  <a className="nav-link" href="/logout" onClick={onLogout}>
                    Log out
                  </a>
                </li>
              </>
            )}
            {!user && (
              <li>
                <Link className="nav-link" to="/login">
                  Log in
                </Link>
                {/* <span className="icon">
                  <i class="fa fa-music"></i>
                </span> */}
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
