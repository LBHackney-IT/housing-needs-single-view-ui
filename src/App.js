import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header';
import SearchCustomers from './Gateways/SearchCustomers';
import CreateCustomer from './Gateways/CreateCustomer';
import FetchCustomer from './Gateways/FetchCustomer';
import SearchPage from './Pages/SearchPage';
import SelectPage from './Pages/SelectPage';
import DetailsPage from './Pages/DetailsPage';
import dummyCustomer from './dummyCustomer.json';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {page: 'SearchPage', pageState: '', customerDetails: dummyCustomer.customer};
  }

  search = (query) => {
    this.setState({pageState: 'searching'})
    SearchCustomers(query, response => {
      this.setState({searchResults: response.customers, page: 'SelectPage', pageState: ''})
    })
  }

  selectExistingCustomer = (data) => {
    FetchCustomer(data.id, (err, result) => {
      if(err) console.log(err)
      this.setState({customerDetails: result.customer, page: 'DetailsPage'})
    })
  }

  selectNewCustomer = (data) => {
    // Create a new record
    CreateCustomer(data, (err, result) => {
      if(err) console.log(err)
      this.setState({customerDetails: result.customer, page: 'DetailsPage'})
    })
  }

  pageSwitch(){
    switch(this.state.page){
      case 'SelectPage':
        return <SelectPage searchResults={this.state.searchResults} onSelectExisting={this.selectExistingCustomer} onSelectNew={this.selectNewCustomer}/>
      case 'DetailsPage':
        return <DetailsPage customer={this.state.customerDetails}/>
      default:
        return <SearchPage onSearch={this.search} pageState={this.state.pageState} />
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
