import React, { Component } from 'react';
import Header from './Components/Header';
import Phase from './Components/Phase';
import PrivateRoute from './Components/PrivateRoute';
import SearchPage from './Pages/SearchPage';
import ResultsPage from './Pages/ResultsPage';
import DetailsPage from './Pages/DetailsPage';
import CallbackPage from './Pages/CallbackPage';
import LoginPage from './Pages/LoginPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Phase />
        <div id="main-wrapper">
          <Router>
            <Route path="/login" component={LoginPage} />
            <Route path="/callback" component={CallbackPage} />
            <PrivateRoute path="/" exact component={SearchPage} />
            <PrivateRoute path="/search" component={ResultsPage} />
            <PrivateRoute path="/customer/:id" component={DetailsPage} />
          </Router>
        </div>
      </>
    );
  }
}
