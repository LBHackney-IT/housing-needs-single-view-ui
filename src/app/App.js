import React, { Component } from 'react';
import Header from './Components/Header';
import Phase from './Components/Phase';
import PrivateRoute from './Components/PrivateRoute';
import SearchPage from './Pages/SearchPage';
import ResultsPage from './Pages/ResultsPage';
import CustomerDetailsPage from './Pages/CustomerDetailsPage';
import TenancyDetailsPage from './Pages/TenancyDetailsPage';
import AddressResultsPage from './Pages/AddressResultsPage';

import LoginPage from './Pages/LoginPage';
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
            <PrivateRoute path="/tenancies" component={AddressResultsPage} />
            <PrivateRoute
              path="/customers/:id"
              component={CustomerDetailsPage}
            />
            <Route path="/tenancies/:id" component={TenancyDetailsPage} />
          </Router>
        </main>
      </>
    );
  }
}
