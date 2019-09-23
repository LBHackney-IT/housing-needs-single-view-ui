import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header';
import SearchGateway from './Gateways/SearchGateway'
import SearchPage from './Components/SearchPage';
import SelectPage from './Components/SelectPage';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {page: 'SearchPage', pageState: ''};
  }

  search = (query) => {
    this.setState({pageState: 'searching'})
    SearchGateway(query, response => {
      this.setState({searchResults: response.results, page: 'SelectPage', pageState: ''})
    })
  }

  pageSwitch(){
    switch(this.state.page){
      case 'SelectPage':
        return <SelectPage searchResults={this.state.searchResults}/>
      default:
        return <SearchPage onSearch={this.search} pageState={this.state.pageState}/>
    }
  }

  render(){
    return (
      <div>
        <Header />
        <div className="App">
          <div className="page-wrapper">
            { this.pageSwitch() }
          </div>
        </div>
      </div>
    );
    }
}
