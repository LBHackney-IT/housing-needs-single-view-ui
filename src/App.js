import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header';
import SearchPage from './Pages/SearchPage';
import SelectPage from './Pages/SelectPage';
import DetailsPage from './Pages/DetailsPage';
import { BrowserRouter as Router, Route } from "react-router-dom";

export default class App extends Component {
  render(){
    return (
      <div>
        <Header />
        <div className="App">
          <div className="page-wrapper">
            <Router>
              <Route path="/" exact component={SearchPage} />
              <Route path="/search" component={SelectPage} />
              <Route path="/customer/:id" component={DetailsPage} />
            </Router>
          </div>
        </div>
      </div>
    );
    }
}
