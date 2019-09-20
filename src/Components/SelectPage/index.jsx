import React, {Component} from 'react';
import './index.css';
import dummyData from "./dummy.json";
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
    this.processResults(dummyData.results)
  }

  render(){
    return(
      <div className="selectPage">
        <h1>Select a customer</h1>
        <h2>Previously selected</h2>
        <ResultsTable results={Object.values(this.state.results.SingleView)} selectable={false} />
        <h2>New Selection</h2>
        { this.sources.map(source => {
          if(source !== 'SingleView' && Object.keys(this.state.results[source]).length > 0){
            return <div key={source}>
              <h3>Results from {source}</h3>
              <ResultsTable results={Object.values(this.state.results[source])} selectable={true} />
            </div>
          }
        })}

        <button>Select</button>
      </div>
    );
  }
}
