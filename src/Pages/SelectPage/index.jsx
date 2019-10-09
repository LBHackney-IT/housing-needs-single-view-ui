import React, {Component} from 'react';
import './index.css';
import ResultsTable from "../../Components/ResultsTable";
import SearchCustomers from '../../Gateways/SearchCustomers';
import CreateCustomer from '../../Gateways/CreateCustomer';
import { Redirect } from "react-router-dom";


export default class SelectPage extends Component {
  sources = ['SINGLEVIEW', 'UHT', 'UHW', 'JIGSAW', 'ACADEMY'];

  constructor(props) {
    super(props);
    
    let resultsState = {};
    this.sources.forEach(source => {
      resultsState[source] = {}
    })

    this.state = {results: resultsState, selected: {}, searching: true};
  }

  selectNewCustomer = (data) => {
    const selected = Object.values(this.state.selected).map(Object.values).flat();
    // Create a new record
    CreateCustomer(selected, (err, result) => {
      if(err) console.log(err)
      this.redirectToCustomer(result.customer.id)
    })
  }

  processResults(results){
    let resultsState = this.state.results;
    results.forEach(result => {
      resultsState[result.source][result.id] = result;
    })
    this.setState({results: resultsState, searching: false})
  }

  updateSelection = (data) => {
    this.setState(state => {
      let selected = this.state.selected;
      for(const key of Object.keys(data)){
        selected[key] = data[key];
      }
      return {selected: selected}
    })
  }

  componentDidMount(){
    const search = {}
    const params = new URLSearchParams(this.props.location.search);
    params.forEach((v,k) => {
      search[k] = v;
    })
    SearchCustomers(search, response => {
      this.processResults(response.customers);
    })
  }

  redirectToCustomer(id){
    this.setState({redirect: `/customer/${id}`})
  }

  selectExisting = (data) => {
    if(data.SINGLEVIEW && Object.keys(data.SINGLEVIEW).length === 1){
      this.redirectToCustomer(Object.values(data.SINGLEVIEW)[0].id)
    }
  }

  prevResults(){
    if(Object.values(this.state.results.SINGLEVIEW).length > 0){
      return [
        <h2 key="prev">Previously selected</h2>,
        <ResultsTable key="prevResults" results={Object.values(this.state.results.SINGLEVIEW)} selectable={false} onChange={this.selectExisting} />
      ]
    }
  }

  newResults(){
    return this.sources.map(source => {
      if(source !== 'SINGLEVIEW'){
        if(Object.keys(this.state.results[source]).length > 0){
          return <div key={source}>
            <h3>Results from {source}</h3>
            <ResultsTable key={source} results={Object.values(this.state.results[source])} selectable={true} onChange={this.updateSelection}/>
          </div>
        }else{
          return <div key={source}>
            <h3>Results from {source}</h3>
            <p>No results found</p>
          </div>
        }
      }
      return null;
    })
  }

  render(){
    if (this.state.redirect) {
      return (<Redirect push to={this.state.redirect} />)
    }

    if(this.state.searching){
      return (<div className="selectPage">
        <h1>Searching for customers...</h1>
      </div>)
    }

    return(
      <div className="selectPage">
        <h1>Select a customer</h1>
        { this.prevResults() }
        <h2 key="new">New Selection</h2>
        { this.newResults() }

        <button onClick={this.selectNewCustomer}>Select</button>
      </div>
    );
  }
}
