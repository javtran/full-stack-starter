import { Link } from 'react-router-dom';

import './Navigation.scss';

function Navigation() {
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
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
