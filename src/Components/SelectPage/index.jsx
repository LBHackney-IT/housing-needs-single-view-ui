import React, {Component} from 'react';
import './index.css';
import ResultsTable from "../ResultsTable";


export default class SelectPage extends Component {
  sources = ['SingleView', 'UHT', 'UHW', 'Academy', 'Comino', 'Jigsaw'];

  constructor(props) {
    super(props);
    
    let resultsState = {};
    this.sources.forEach(source => {
      resultsState[source] = {}
    })

    this.state = {results: resultsState};
  }

  processResults(results){
    let resultsState = this.state.results;
    results.forEach(result => {
      resultsState[result.source][result.id] = result;
    })
    this.setState({results: resultsState})
  }

  componentDidMount(){
    this.processResults(this.props.searchResults)
  }

  prevSelected(){
    if(Object.values(this.state.results.SingleView).length > 0){
      return [
        <h2>Previously selected</h2>,
        <ResultsTable results={Object.values(this.state.results.SingleView)} selectable={false} />
      ]
    }
  }

  newSelection(){
    return this.sources.map(source => {
      if(source !== 'SingleView'){
        if(Object.keys(this.state.results[source]).length > 0){
          return <div key={source}>
            <h3>Results from {source}</h3>
            <ResultsTable results={Object.values(this.state.results[source])} selectable={true} />
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
    return(
      <div className="selectPage">
        <h1>Select a customer</h1>
        { this.prevSelected() }
        <h2>New Selection</h2>
        { this.newSelection() }

        <button>Select</button>
      </div>
    );
  }
}
