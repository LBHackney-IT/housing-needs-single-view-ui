import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header';
import SearchPage from './Components/SearchPage';
import SelectPage from './Components/SelectPage';

export default class App extends Component {
  render(){
    return (
      <div>
        <Header />
        <div className="App">
          <div className="page-wrapper">
            <SearchPage />
          </div>
        </div>
      </div>
    );
    }
}
