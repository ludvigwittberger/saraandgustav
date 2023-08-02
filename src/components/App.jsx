import '../sass/importer.sass';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Main from './Main';
import { routes } from '../Routes';

const App = () => {

  return (
    <Router>
      <div className="c-app--text-align-center">
        <div className="c-main">
          <Main />
          <div>
            <ul className="c-navbar">
              <li className="c-navbar--linkWrapper">
                <NavLink
                  to="/"
                  className="c-navbar__link"
                  exact activeClassName='c-navbar--currentLink'
                >
                  Välkommen
                </NavLink>
              </li>
              <li className="c-navbar--linkWrapper">
                <NavLink
                  to="/brollopet"
                  className="c-navbar__link"
                  activeClassName='c-navbar--currentLink'
                >
                  Bröllopet
                </NavLink>
              </li>
              <li className="c-navbar--linkWrapper">
                <NavLink
                  to="/brollopsfolje"
                  className="c-navbar__link"
                  activeClassName='c-navbar--currentLink'
                >
                  Bröllopsfölje
                </NavLink>
              </li>
              <li className="c-navbar--linkWrapper">
                <NavLink
                  to="/wishlist"
                  className="c-navbar__link"
                  activeClassName='c-navbar--currentLink'
                >
                  Önskelista
                </NavLink>
              </li>
              <li className="c-navbar--linkWrapper">
                <NavLink
                  to="/osa"
                  className="c-navbar__link"
                  activeClassName='c-navbar--currentLink'
                >
                  O.S.A
                </NavLink>
              </li>
            </ul>
          </div>

          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />))}
          </Switch>

        </div>
      </div>
    </Router>
  );
}

export default App;
