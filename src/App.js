import React, { Component } from 'react';
import Header from './Components/Header';
import Phase from './Components/Phase';
import PrivateRoute from './Components/PrivateRoute';
import SearchPage from './Pages/SearchPage';
import NewSearchPage from './Pages/NewSearchPage';
import ResultsPage from './Pages/ResultsPage';
import DetailsPage from './Pages/DetailsPage';
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
            <PrivateRoute path="/" exact component={SearchPage} />
            <PrivateRoute path="/new_search" exact component={NewSearchPage} />
            <PrivateRoute path="/search" component={ResultsPage} />
            <PrivateRoute path="/customers/:id" component={DetailsPage} />
          </Router>
        </div>
      </>
    );
  }
}
