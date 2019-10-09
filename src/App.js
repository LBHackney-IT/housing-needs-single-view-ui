import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header';
import PrivateRoute from './Components/PrivateRoute';
import SearchPage from './Pages/SearchPage';
import SelectPage from './Pages/SelectPage';
import DetailsPage from './Pages/DetailsPage';
import CallbackPage from './Pages/CallbackPage';
import LoginPage from './Pages/LoginPage';
import { BrowserRouter as Router, Route } from "react-router-dom";

export default class App extends Component {
  render(){
    return (
      <div>
        <Header />
        <div className="App">
          <div className="page-wrapper">
            <Router>
              <Route path="/login" component={LoginPage} />
              <Route path="/callback" component={CallbackPage} />
              <PrivateRoute path="/" exact component={SearchPage} />
              <PrivateRoute path="/search" component={SelectPage} />
              <PrivateRoute path="/customer/:id" component={DetailsPage} />
            </Router>
          </div>
        </div>
      </div>
    );
    }
}
