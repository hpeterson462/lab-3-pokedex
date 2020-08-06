import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
}
  from 'react-router-dom';

import SearchPage from './SearchPage.js';
import DetailPage from './DetailPage.js';
import './App.css';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Router>
          <section>
            <Link to="/">Home</Link>
            <Link to="/detail">Detail</Link>
          </section>
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <SearchPage {...routerProps} />}
            />
            <Route
              path="/detail/:myPokemonId"
              exact
              render={(routerProps) => <DetailPage {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}
