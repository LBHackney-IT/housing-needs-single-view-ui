import React, { Component } from 'react';
import Header from './Components/Header';
import Phase from './Components/Phase';
import PrivateRoute from './Components/PrivateRoute';
import SearchPage from './Pages/SearchPage';
import ResultsPage from './Pages/ResultsPage';
import DetailsPage from './Pages/DetailsPage';
import LoginPage from './Pages/LoginPage';
import VulnerabilitiesPage from './Pages/VulnerabilitiesPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './css/styles.scss';

import { initAll } from 'lbh-frontend';

export default class App extends Component {
  componentDidMount() {
    initAll();
  }

  render() {
    return (
      <>
        <Header />
        <Phase />
        <main className="lbh-main-wrapper" id="main-content">
          <Router>
            <Route path="/login" component={LoginPage} />
            <PrivateRoute path="/" exact component={SearchPage} />
            <PrivateRoute path="/search" component={ResultsPage} />
            <PrivateRoute path="/customers/:id/view" component={DetailsPage} />
            <PrivateRoute
              path="/customers/:id/vulnerabilities"
              component={VulnerabilitiesPage}
            />
          </Router>
        </main>
      </>
    );
  }
}
